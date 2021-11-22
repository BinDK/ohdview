import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin/services/AdminService.service';
import { Account } from 'src/app/entites/account.entity';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Role } from 'src/app/entites/role.entity';
import { AllAccount } from 'src/app/services/AllAccount.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  // selector: 'app-content1',
  templateUrl: './adminProfile.component.html',
})
export class AdminProfileComponent {
  nts: Account[];

  accountAddForm: FormGroup;
  accountUpdateForm: FormGroup;
  changePass: FormGroup;
  name: any;
  username: any;
  constructor(
    private service: AllAccount,
    private formBuilder: FormBuilder,
    private toastr: ToastrService


  ) { }

  ngOnInit() {

    this.service.information().then(
      success => {
        success.forEach(succes => {
          this.accountUpdateForm = this.formBuilder.group({
            username: [{ value: succes.username, disabled: true }],
            email: succes.email,
          });
          this.name = succes.name;
          this.username = succes.username;
        });
      },
      reject => { });

    this.changePass = this.formBuilder.group({
      newp: ['', Validators.required],
      confirmp: ['', Validators.required]
    });
  }
  get g() { return this.accountUpdateForm.controls; }
  submitUPDATE() {
    if (this.g.email.value == null || this.g.email.value == '') {
      this.toastr.error('Email Cannot Be Empty!!', '', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'increasing'
      });
          this.service.information().then(
            success => {
              success.forEach(succes => {
                this.accountUpdateForm = this.formBuilder.group({
                  username: [{ value: succes.username, disabled: true }],
                  email: succes.email,
                });
              });
            },
            reject => { });
   
    }
    else {
      let account: Account = this.accountUpdateForm.value;
      let accID: Account = JSON.parse(localStorage.getItem('role'));
      account.id = accID.id;
      account.username = this.username;
      this.service.updateAccount(account).then(
        worked => {
          this.toastr.success('Successfully change email!!', '', {
            timeOut: 3500,
            progressBar: true,
            progressAnimation: 'increasing'
          });
          worked.forEach(acc => {
            this.accountUpdateForm = this.formBuilder.group({
              username: [{ value: acc.username, disabled: true }],
              email: [acc.email, Validators.required],
            });
          });
        },
        reject => { console.log(reject) }
      );
    }
  }

  get f() { return this.changePass.controls; }
  submitChangeP() {
    if (this.f.newp.value != this.f.confirmp.value) {
      this.toastr.error('Password Did notmatch!!', '', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'increasing'
      });
      this.changePass = this.formBuilder.group({
        newp: ['', Validators.required],
        confirmp: ['', Validators.required]
      });
    }
    else {
      let accID: Account = JSON.parse(localStorage.getItem('role'));
      accID.password = this.f.confirmp.value;
      this.service.ChangePass(accID).then(
        work => {
          this.toastr.success('Password Change Successfully!!', '', {
            timeOut: 3000,
            progressBar: true,
            progressAnimation: 'increasing'
          });
          this.changePass = this.formBuilder.group({
            newp: ['', Validators.required],
            confirmp: ['', Validators.required]
          });
        },
        reject => { }
      );
    }

  }

}
