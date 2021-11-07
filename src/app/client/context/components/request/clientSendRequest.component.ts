import { Component, ElementRef, ViewChild } from '@angular/core';
import { Account } from 'src/app/entites/account.entity';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from 'src/app/client/services/ClientService.service';
import { Priority } from 'src/app/entites/priority.entity';
import { Editor } from 'primeng/editor';
import { Facility } from 'src/app/entites/facility.entity';
import { Service } from 'src/app/entites/service.entity';
declare var Quill: any;

@Component({
  // selector: 'app-content1',
  templateUrl: './clientSendRequest.component.html',
})
export class ClientSendRequestComponent {

  priorities: Priority[];
  facilities: Facility[];
  services: Service[];
  
  reason:string
 
  requestAddForm: FormGroup;
  requestDetailForm: FormGroup;

  constructor(
    private service: ClientService,
    private formBuilder: FormBuilder,
    
    
    ){}
    
    ngOnInit() {
      
    this.service.findAllFacility().then(
      res => { this.facilities = res },
      reject => { console.log(reject) }
    );
    this.service.findAllPriority().then(
      res => { this.priorities = res },
      reject => { console.log(reject) }
    );
    // this.accountAddForm = this.formBuilder.group({
    //   id:'',
    //   name:'',
    //   email:'',
    //   username:'',
    //   password:''
    // });
    // this.reason = '';
      this.requestDetailForm = this.formBuilder.group({
        id:'',
        reason: new FormControl('', [Validators.required, Validators.minLength(10)]),
        });

  }

  // addRequest(){
  // let account :Account= this.accountAddForm.value;
  // // alert(" Role : "+ account.roleId);
  // // this.service.create(account).then(
  // //     accept => {console.log(accept)},
  // //     reject => {console.log(reject)}
  // // );
  // }

  findFacility(evt: any){
    // alert(evt.target.value);
    this.service.findFacility(evt.target.value).then(
      res => { this.services = res },
      reject => { console.log(reject) }
    );
  }

  detailRequest(id:number){
    
  }
  get detail(){
    return this.requestDetailForm.controls;
  }
  submit(){
    alert(this.requestDetailForm.value);

  }
}
