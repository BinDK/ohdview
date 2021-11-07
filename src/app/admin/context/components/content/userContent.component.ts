import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin/services/AdminService.service';
import { Account } from 'src/app/entites/account.entity';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Role } from 'src/app/entites/role.entity';
import { empty } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-content1',
  templateUrl: './userContent.component.html',
})
export class UserContentComponent {

  accounts: Account[];
  roles: Role[];
  accountAddForm: FormGroup;
  accountUpdateForm: FormGroup;
  accountDeleteForm: FormGroup;
  userDetail: Account[];
  constructor(
    private service: AdminService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.findAll().then(
      res => { this.accounts = res
        //  alert(res.length)
       },
      reject => { console.log(reject) }
    );
    this.service.findAllRole().then(
      res => { this.roles = res },
      reject => { console.log(reject) }
    );

    this.accountAddForm = this.formBuilder.group({
      name: '',
      email: '',
      username: '',
      password: '',
      roleId: 0,
    });
    this.accountUpdateForm = this.formBuilder.group({
      id: 0,
      name: '',
      email: '',
      username: '',
      password: '',
      roleId: 0,
    });
    this.accountDeleteForm = this.formBuilder.group({
      id: 0,
    });
  }

  addAccount() {
    let accountx: Account = this.accountAddForm.value;
    this.service.createAccount(accountx).then(
      accept => {
        this.service.findAll().then(
          res => {
            this.accounts = res; 
            this.accountAddForm = this.formBuilder.group({
              name: '',
              email: '',
              username: '',
              password: '',
              roleId: 0,
            }); 
            },
          reject => { console.log(reject) }
        );
      },
      reject => { console.log(reject) }
    );
  }

  detailUser(id: number) {
    this.service.findUser(id).then(
      res => {

        this.userDetail = res;
        console.log(res);
        res.forEach(user => {
          this.accountUpdateForm = this.formBuilder.group({
            id: user.id,
            name: user.name,
            password: '',
            username: user.username,
            email: user.email,
            roleId: user.role.id
          });
        });
      },

      reject => { console.log(reject) }
    );
  }
  updateAccount() {
    let acc: Account = this.accountUpdateForm.value;

    this.service.updateAccount(acc).then(
      accept => {
        this.service.findAll().then(
          res => { this.accounts = res },
          reject => { console.log(reject) }
        );
      },
      reject => { console.log(reject) }
    );
  }

  noUpdate() {
    this.accountUpdateForm = this.formBuilder.group({
      id: 0,
      name: '',
      email: '',
      username: '',
      password: '',
      roleId: 0,
    });
  }


  deleteAccount(id: number) {
    this.accountDeleteForm = this.formBuilder.group({
      id: id
    });
  }
  actualDelete() {
    let acc: Account = this.accountDeleteForm.value;

    this.service.deleteAccount(acc.id).then(
      accept => {
        console.log(accept);
        this.service.findAll().then(
          res => { this.accounts = res },
          reject => { console.log(reject) }
        );
      },
      reject => { console.log(reject) }
    );
  }
  noDelete() {
    this.accountDeleteForm = this.formBuilder.group({
      id: 0
    });
  }
}
