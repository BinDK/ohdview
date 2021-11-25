import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin/services/AdminService.service';
import { Account } from 'src/app/entites/account.entity';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Role } from 'src/app/entites/role.entity';
import { empty } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private router: Router,
    private toaster: ToastrService
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
      // password: '',
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

  findByuser(evt:any){
    var val = evt.target.value;
    if(val == ''){
      this.service.findAll().then(
        res => { this.accounts = res
          //  alert(res.length)
         },
        reject => { console.log(reject) }
      );
    }
    this.service.findbyUser(val).then(
      res => { this.accounts = res },
      reject => { console.log(reject) }
    );
  }
  get detail(){return this.accountAddForm.controls;}
  addAccount() {
    if(
      this.detail.name.value == '' || this.detail.email.value == '' || this.detail.username.value == '' || this.detail.roleId.value == 0 
    ){
      this.toaster.error('Missing some value', '', {
        timeOut: 3500,
        progressBar: true,
        progressAnimation: 'increasing'
      });
    }
else{
  let accountx: Account = this.accountAddForm.value;
  this.service.createAccount(accountx).then(
    accept => {
      this.toaster.success('Successfully added new account!!', '', {
        timeOut: 3500,
        progressBar: true,
        progressAnimation: 'increasing'
      });
      this.service.findAll().then(
        res => {
          this.accounts = res; 
          this.accountAddForm = this.formBuilder.group({
            name: '',
            email: '',
            username: '',
            // password: '',
            roleId: 0,
          }); 
          },
        reject => { console.log(reject) }
      );

    },
    reject => {
          this.toaster.warning('Account already claimed', '', {
          timeOut: 3500,
          progressBar: true,
          progressAnimation: 'increasing'
        });
   }
  );
}

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
        this.toaster.success('Successfully change this account!!', '', {
          timeOut: 3500,
          progressBar: true,
          progressAnimation: 'increasing'
        });
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
      // password: '',
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
        this.toaster.success('Successfully Deactivate this account!!', '', {
          timeOut: 3500,
          progressBar: true,
          progressAnimation: 'increasing'
        });
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
