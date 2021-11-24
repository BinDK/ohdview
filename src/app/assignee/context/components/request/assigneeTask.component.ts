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
import { UserTask } from 'src/app/entites/userTask.entity';
import { AssigneeService } from 'src/app/assignee/services/AssigneeService.service';
import { FinTask } from 'src/app/entites/finishedTask.entity';
declare var Quill: any;

@Component({
  // selector: 'app-content1',
  templateUrl: './assigneeTask.component.html',
})
export class AssigneeTaskComponent {

  priorities: Priority[];
  facilities: Facility[];
  services: Service[];
  userTasks : UserTask[];
  facility: Facility;
  assignees: Account[]; 
  detailhea

  requestdetail: RequestClient[];
  reqlogs: ReqLog[];
  reqConvert: CreateRequestbyUserReq;
  
  requestAddForm: FormGroup;
  requestDetailForm: FormGroup;
  
  finTaskForm: FormGroup;
  
  finheadTasks : HeadTask[];
  finuserTasks: UserTask[];
  constructor(
    private service: AssigneeService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    // private dt: Table,
    
    ){}
    
    ngOnInit() {
      let acc : Account  = JSON.parse(localStorage.getItem('role'));
      this.service.findallTask(acc.id).then(
        worked=>{this.userTasks = worked},
      reject => { console.log(reject) }
      );

      this.finTaskForm = this.formBuilder.group({
        id: 0,
        note: '',
        });

  }


  findAssignmentStatus(evt: any){
    let acc : Account  = JSON.parse(localStorage.getItem('role'));
    var val = evt.target.value;
    if(parseInt(val) == 0){
      this.service.findallTask(acc.id).then(
        worked=>{this.userTasks = worked},
        reject => { console.log(reject) }
      );
    }
    else if(parseInt(val) == 1){
    this.service.findTaskStatus("on", acc.id).then(
      res => { this.userTasks = res },
      reject => { console.log(reject) }
    );
    }
    else if(parseInt(val) == 2){
      this.service.findTaskStatus("fin", acc.id).then(
        res => { this.userTasks = res },
        reject => { console.log(reject) }
      );
      }
      else if(parseInt(val) == 3){
        this.service.findTaskStatus("clo", acc.id).then(
          res => { this.userTasks = res },
          reject => { console.log(reject) }
        );
        }
  }
  get f() { return this.requestAddForm.controls; }



//Detail

findDetail(id: number,idd:number){
  this.service.findReq(id).then(
    worked=>{
      this.requestdetail = worked;
      worked.forEach(element => {
        this.finTaskForm = this.formBuilder.group({
          id:element.id,
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
  this.service.detailheadtask(idd).then(work=>{this.finheadTasks = work},rej=>{});
}

findDetailFin(id: number, idd:number){
  this.service.findReq(id).then(
    worked=>{
      this.requestdetail = worked;
      
    },
    rej =>{}
  );
  this.service.findReq_logbyID(id).then(
    worked => {this.reqlogs = worked},
    rej => {}
  );
  this.service.detailusertask(id).then(
    workedd=>{this.finuserTasks = workedd;},
    rej=>{}
  );
  this.service.detailheadtask(idd).then(work=>{this.finheadTasks = work},rej=>{});

}

findDetailClose(id: number){
  this.service.findReq(id).then(
    worked=>{
      this.requestdetail = worked;
    },
    rej =>{}
  );
  this.service.findReq_logbyID(id).then(
    worked => {this.reqlogs = worked},
    rej => {}
  );
}

  get detail(){return this.finTaskForm.controls;}
  submitAssign(){
    if(
      this.detail.note.value == '' || this.detail.note.value == null || this.detail.note.value.length <= 10){
      this.toastr.error('Note for Head shouldn`t be empty or less than 10 character!', '', {
        timeOut: 4500,
        progressBar: true,
        progressAnimation: 'increasing'
      });
    }
    else{
      let req:FinTask = this.finTaskForm.value;
      let acc : Account  = JSON.parse(localStorage.getItem('role'));
       this.service.finishedTask(req).then(
         worked=>{
           this.toastr.info('This task had been update', '', {
          timeOut: 3500,
          progressBar: true,
          progressAnimation: 'increasing'
        });
        this.service.findallTask(acc.id).then(
          worked=>{this.userTasks = worked},
        reject => { console.log(reject) }
        );
      },
         rej=>{console.log(rej)}
       );
    }

    
  }
}
