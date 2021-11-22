import { Component, ElementRef, ViewChild } from '@angular/core';
import { Account } from 'src/app/entites/account.entity';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from 'src/app/client/services/ClientService.service';
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
declare var Quill: any;

@Component({
  // selector: 'app-content1',
  templateUrl: './clientSendRequest.component.html',
})
export class ClientSendRequestComponent {

  priorities: Priority[];
  facilities: Facility[];
  services: Service[];
  requests : RequestClient[];
  facility: Facility;
  
  requestdetail: RequestClient[];
  reqlogs: ReqLog[];
  reqConvert: CreateRequestbyUserReq;
  
  requestAddForm: FormGroup;
  requestDetailForm: FormGroup;
  closeForm: FormGroup;
  
  constructor(
    private service: ClientService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    // private dt: Table,
    
    ){}
    
    ngOnInit() {
      let acc : Account  = JSON.parse(localStorage.getItem('role'));
      this.service.findallReq(acc.id).then(
        worked=>{this.requests = worked},
      reject => { console.log(reject) }
      );
    this.service.findAllFacility().then(
      res => { this.facilities = res },
      reject => { console.log(reject) }
    );
    this.service.findAllPriority().then(
      res => { this.priorities = res },
      reject => { console.log(reject) }
    );

    
    this.requestAddForm = this.formBuilder.group({
      content:['', Validators.required],
      facility:{},
      facility_id: [0, Validators.required],
      request_priority_id:[0, Validators.required],
      service_id: [0, Validators.required],
    });

      this.closeForm = this.formBuilder.group({
        request_by_user_id:0,
        reason: ['', Validators.required, Validators.minLength(10)],
        });

  }

  // getEventValue($event:any) :string {
  //   return $event.target.value;
  // } strictDomEventTypes bật off hảy xài cái này
  

  findFacility(evt: any){
    // alert(evt.target.value);
    var val = evt.target.value;
    var splitted = val.split("-", 1); 
    this.service.findFacility(parseInt(splitted)).then(
      res => { this.services = res },
      reject => { console.log(reject) }
    );
  }

  findReqBaseStatus(evt: any){
    let acc : Account  = JSON.parse(localStorage.getItem('role'));
    var val = evt.target.value;
    if(parseInt(val) == 0){
      this.service.findallReq(acc.id).then(
        worked=>{this.requests = worked},
      reject => { console.log(reject) }
      );
    }
    else{
    this.service.findReqbyStatus(parseInt(val),acc.id).then(
      res => { this.requests = res },
      reject => { console.log(reject) }
    );
    }
  }
  get f() { return this.requestAddForm.controls; }
  requestSubmit(){

    if (
      this.f.content.value == '' || this.f.facility_id.value == 0 || this.f.request_priority_id.value == 0 || this.f.service_id.value == 0 
      )
       {
        this.toastr.error('Your reqeust seem like missing something', '', {
          timeOut: 5000,
          progressBar: true,
          progressAnimation: 'increasing'
        });
        }
     else {
      let req:CreateRequestbyUserReq = this.requestAddForm.value;
      let acc : Account  = JSON.parse(localStorage.getItem('role'));
      
      
      var val = this.requestAddForm.value.facility_id;
      var split = val.split("-"); 
      var id = split[0];
      var headID = split[1];
      req.facility.id = parseInt(id);
      req.facility.headaccountid = parseInt(headID);
      
      req.request_status_id = 1;
      req.account_id = acc.id;
  
      this.toastr.info('Your request in processing stage!!', '', {
        timeOut: 4500,
        progressBar: true,
        progressAnimation: 'increasing'
      });
      this.service.createRequest(req).then(
        accept => {
          this.toastr.success('Successfully sent Request to this facility', '', {
            timeOut: 3500,
            progressBar: true,
            progressAnimation: 'increasing'
          });
            this.requestAddForm = this.formBuilder.group({
              content:['', Validators.required],
              facility:{},
              facility_id: [0, Validators.required],
              request_priority_id:[0, Validators.required],
              service_id: [0, Validators.required],
          }); 
          this.service.findallReq(acc.id).then(
            workedd=>{this.requests = workedd},
          reject => { console.log(reject) }
          );
          console.log(accept)
        },
        reject => {console.log(reject)}
      );
    }
  
  }


//Detail
findDetail(id: number){
  this.service.findReq(id).then(
    worked=>{
      this.requestdetail = worked;
      worked.forEach(element => {
        this.closeForm = this.formBuilder.group({
          request_by_user_id:element.id,
          reason: element.reason_to_close,
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
  get detail(){return this.closeForm.controls;}
  submitClose(){
    if(
      this.detail.reason.value == '' || this.detail.reason.value == null || this.detail.reason.value.length <= 10 
    ){
      this.toastr.error('Reason to close shouldn`t be empty or less than 10 character!', '', {
        timeOut: 4500,
        progressBar: true,
        progressAnimation: 'increasing'
      });
    }
    else{
      let req:ReqClose = this.closeForm.value;
      let acc : Account  = JSON.parse(localStorage.getItem('role'));
      req.request_status_id = 4;
      req.user_task_status = "Closed";req.head_task_status = "Closed";
      this.toastr.warning('Your Request been sent!', '', {
        timeOut: 3500,
        progressBar: true,
        progressAnimation: 'increasing'
      });    
      this.service.closeReq(req).then(
         worked=>{
          //  Toast closed
              this.toastr.info('This request had been closed, thank!', '', {
              timeOut: 3500,
              progressBar: true,
              progressAnimation: 'increasing'
            });

        // update find all
        this.service.findallReq(acc.id).then(
          workedd=>{
            this.requests = workedd;
            // this.requestdetail = workedd;
          },
        reject => { console.log(reject) }
        );
      },
      
         rej=>{console.log(rej)}
       );
    }

    
  }
}
