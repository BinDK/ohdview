import { Component } from '@angular/core';
import { Account } from 'src/app/entites/account.entity';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Role } from 'src/app/entites/role.entity';
import { ClientService } from 'src/app/client/services/ClientService.service';

@Component({
  // selector: 'app-content1',
  templateUrl: './clientProfile.component.html',
})
export class ClientProfileComponent {

  accounts: Account[];
  roles: Role[];
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
