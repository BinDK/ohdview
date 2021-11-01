import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin/services/AdminService.service';
import { Account } from 'src/app/entites/account.entity';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Role } from 'src/app/entites/role.entity';
import { empty } from 'rxjs';

@Component({
  // selector: 'app-content1',
  templateUrl: './userContent.component.html',
})
export class UserContentComponent {

  accounts: Account[];
  roles: Role[];
  accountAddForm: FormGroup;
  accountUpdateForm: FormGroup;

  constructor(
    private service: AdminService,
    private formBuilder: FormBuilder

  ){}

  ngOnInit() {
    this.service.findAll().then(
          res => {this.accounts  = res},
          reject =>{console.log(reject) }
      );
    this.service.findAllRole().then(
        res => {this.roles  = res},
        reject =>{console.log(reject) }
    );

    this.accountAddForm = this.formBuilder.group({
      id:'',
      name:'',
      email:'',
      username:'',
      password:'',
      roleId:0,
    });
    this.accountUpdateForm = this.formBuilder.group({
      name:'',
      email:'',
      username:'',
      password:'',
      roleId:0,
    });
  }

  addAccount(){
  let account :Account = this.accountAddForm.value;
  alert(account.name + "--" + account.email + "--" + account.username + "--" + account.password + "--" + account.roleId);
  // account.id = 6;
  // account.role = null;
  this.service.create(account).then(
      accept => {console.log(accept)},
      reject => {console.log(reject)}
  );
  }

  updateAccount(){
    
  }
}
