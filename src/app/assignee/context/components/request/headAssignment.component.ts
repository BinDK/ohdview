import { Component, ElementRef, ViewChild } from '@angular/core';
import { Account } from 'src/app/entites/account.entity';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeadService } from 'src/app/head/services/HeadService.service';
import { Priority } from 'src/app/entites/priority.entity';
import { Editor } from 'primeng/editor';
import { Facility } from 'src/app/entites/facility.entity';
import { Service } from 'src/app/entites/service.entity';
import { RequestClient } from 'src/app/entites/requestclient.entitiy';
import { CreateRequestbyUserReq } from 'src/app/entites/createRequestbyUserReq.entitiy';
import { ToastrService } from 'ngx-toastr';
import { Table } from 'primeng/table'
import { ReqLog } from 'src/app/entites/reqLog.entity';
import { ReqClose } from 'src/app/entites/reqClose.entity';
import { HeadTask } from 'src/app/entites/headTask.entity';
import { AssignMent } from 'src/app/entites/Assignment.entity';
declare var Quill: any;

@Component({
  // selector: 'app-content1',
  templateUrl: './assigneeTask.component.html',
})
export class HeadAssignmentComponent {

  priorities: Priority[];
  facilities: Facility[];
  services: Service[];
  headTasks : HeadTask[];
  facility: Facility;
  assignees: Account[]; 
  
  requestdetail: RequestClient[];
  reqlogs: ReqLog[];
  reqConvert: CreateRequestbyUserReq;
  
  requestAddForm: FormGroup;
  requestDetailForm: FormGroup;
  assignForm: FormGroup;
  
  constructor(
    private service: HeadService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    // private dt: Table,
    
    ){}
    
    ngOnInit() {
      let acc : Account  = JSON.parse(localStorage.getItem('role'));
      this.service.findallAssignment(acc.id).then(
        worked=>{this.headTasks = worked},
      reject => { console.log(reject) }
      );
      this.service.findAllHead().then(
        worked=>{this.assignees = worked},
      reject => { console.log(reject) }
      );


    

      this.assignForm = this.formBuilder.group({
        request_by_user_id:0,
        assignee_Id: 0,
        note: '',
        });

  }


  findAssignmentStatus(evt: any){
    let acc : Account  = JSON.parse(localStorage.getItem('role'));
    var val = evt.target.value;
    if(parseInt(val) == 0){
      this.service.findallAssignment(acc.id).then(
        worked=>{this.headTasks = worked},
        reject => { console.log(reject) }
      );
    }
    else if(parseInt(val) == 1){
    this.service.findAssignment("on", acc.id).then(
      res => { this.headTasks = res },
      reject => { console.log(reject) }
    );
    }
    else if(parseInt(val) == 3){
      this.service.findAssignment("fin", acc.id).then(
        res => { this.headTasks = res },
        reject => { console.log(reject) }
      );
      }
      else if(parseInt(val) == 4){
        this.service.findAssignment("clo", acc.id).then(
          res => { this.headTasks = res },
          reject => { console.log(reject) }
        );
        }
  }
  get f() { return this.requestAddForm.controls; }
  // requestSubmit(){

  //   if (
  //     this.f.content.value == '' || this.f.facility_id.value == 0 || this.f.request_priority_id.value == 0 || this.f.service_id.value == 0 
  //     )
  //      {
  //       this.toastr.error('Your reqeust seem like missing something', '', {
  //         timeOut: 5000,
  //         progressBar: true,
  //         progressAnimation: 'increasing'
  //       });
  //       }
  //    else {
  //     let req:CreateRequestbyUserReq = this.requestAddForm.value;
  //     let acc : Account  = JSON.parse(localStorage.getItem('role'));
      
      
  //     var val = this.requestAddForm.value.facility_id;
  //     var split = val.split("-"); 
  //     var id = split[0];
  //     var headID = split[1];
  //     req.facility.id = parseInt(id);
  //     req.facility.headaccountid = parseInt(headID);
      
  //     req.request_status_id = 1;
  //     req.account_id = acc.id;
  
  //     this.toastr.info('Your request in processing stage!!', '', {
  //       timeOut: 4500,
  //       progressBar: true,
  //       progressAnimation: 'increasing'
  //     });
  //     this.service.createRequest(req).then(
  //       accept => {
  //         this.toastr.success('Successfully sent Request to this facility', '', {
  //           timeOut: 3500,
  //           progressBar: true,
  //           progressAnimation: 'increasing'
  //         });
  //           this.requestAddForm = this.formBuilder.group({
  //             content:['', Validators.required],
  //             facility:{},
  //             facility_id: [0, Validators.required],
  //             request_priority_id:[0, Validators.required],
  //             service_id: [0, Validators.required],
  //         }
  //       ); console.log(accept)},
  //       reject => {console.log(reject)}
  //     );
  //   }
  
  // }


//Detail
findDetail(id: number){
  this.service.findReq(id).then(
    worked=>{
      this.requestdetail = worked;
      worked.forEach(element => {
        this.assignForm = this.formBuilder.group({
          assignee_Id: 0,
          request_by_user_id:element.id,
          note: '',
          });
      });
    },
    rej =>{}
  );
  this.service.findReq_logbyID(id).then(
    worked => {this.reqlogs = worked},
    rej => {}
  );
}
  get detail(){return this.assignForm.controls;}
  submitAssign(){
    if(
      this.detail.note.value == '' || this.detail.note.value == null || this.detail.note.value.length <= 10 || 
      this.detail.assignee_Id.value == 0
      ){
      this.toastr.error('Note / Assignee shouldn`t be empty or less than 10 character!', '', {
        timeOut: 4500,
        progressBar: true,
        progressAnimation: 'increasing'
      });
    }
    else{
      let req:AssignMent = this.assignForm.value;
      let acc : Account  = JSON.parse(localStorage.getItem('role'));
       this.service.updateAssignment(req).then(
         worked=>{
           this.toastr.info('This task had been update', '', {
          timeOut: 3500,
          progressBar: true,
          progressAnimation: 'increasing'
        });
      },
         rej=>{console.log(rej)}
       );
    }

    
  }
}
