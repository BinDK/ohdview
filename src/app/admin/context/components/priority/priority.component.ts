import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin/services/AdminService.service';
import { Account } from 'src/app/entites/account.entity';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Role } from 'src/app/entites/role.entity';
import { empty } from 'rxjs';
import { Priority } from 'src/app/entites/priority.entity';

@Component({
  // selector: 'app-content1',
  templateUrl: './priority.component.html',
})
export class AdminPriorityComponent {

  accounts: Account[];
  priorities: Priority[];
  priorityAddForm: FormGroup;
  priorityUpdateForm: FormGroup;
  constructor(
    private service: AdminService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit() {
    this.service.findAll().then(
          res => {this.accounts  = res},
          reject =>{console.log(reject) }
      );


      this.priorityAddForm = this.formBuilder.group({
        id: '',
        name:''
      });
    this.priorityUpdateForm = this.formBuilder.group({
      id:'',
      name:''
    });
  }

  addAccount(){
  let account :Account = this.priorityAddForm.value;
  // alert(account.name + "--" + account.email + "--" + account.username + "--" + account.password + "--" + account.roleId);
  // account.id = 6;
  // account.role = null;
  // this.service.create(account).then(
  //     accept => {console.log(accept)},
  //     reject => {console.log(reject)}
  // );
  }

  updateAccount(){
    
  }
}
