import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin/services/AdminService.service';
import { Account } from 'src/app/entites/account.entity';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Role } from 'src/app/entites/role.entity';

@Component({
  // selector: 'app-content1',
  templateUrl: './adminProfile.component.html',
})
export class AdminProfileComponent {

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
