import { Component } from '@angular/core';
import { Account } from 'src/app/entites/account.entity';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from 'src/app/client/services/ClientService.service';
import { Priority } from 'src/app/entites/priority.entity';

@Component({
  // selector: 'app-content1',
  templateUrl: './clientSendRequest.component.html',
})
export class ClientSendRequestComponent {

  accounts: Account[];
  priority: Priority[];
  accountAddForm: FormGroup;
  accountUpdateForm: FormGroup;

  constructor(
    private service: ClientService,
    private formBuilder: FormBuilder

  ){}

  ngOnInit() {


    this.accountAddForm = this.formBuilder.group({
      id:'',
      name:'',
      email:'',
      username:'',
      password:'',
      // role:1,
    });
  }

  addAccount(){
  let account :Account= this.accountAddForm.value;
  // alert(" Role : "+ account.roleId);
  // this.service.create(account).then(
  //     accept => {console.log(accept)},
  //     reject => {console.log(reject)}
  // );
  }

  updateAccount(){
    
  }
}
