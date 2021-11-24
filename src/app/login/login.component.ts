import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../entites/account.entity';
import { LoginAccount } from '../entites/loginAccount.entity';
import { LoginService } from '../services/LoginService.service';
// import { AccountService } from '../services/account.service';
import * as CryptoJS from 'crypto-js';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.css' ]
})
export class LoginComponent {

  loginForm: FormGroup;
  constructor(
    private service: LoginService,
    private router: Router,
    private builder : FormBuilder,
    private toastr: ToastrService
  ){}
  ngOnInit() {
    this.loginForm = this.builder.group({
      Username : '',
      Password: ''
    });
  }
  get f() { return this.loginForm.controls; }
  login(){    
    let account : LoginAccount = this.loginForm.value;
    // account.password = CryptoJS.AES.encrypt(account.password);
    this.service.login(account).then(
      work => {
        if(work == null || work == undefined){
          this.toastr.error('Wrong Pass!!', '', {
            timeOut: 2000,
            progressBar: true,
            progressAnimation: 'increasing',
          });
          this.loginForm = this.builder.group({
            Username : '',
            Password : ''
          })
        }
        let acc : Account = work;
        localStorage.setItem('role', JSON.stringify(acc[0]));
        localStorage.setItem('isLogged', 'true');
        localStorage.setItem('roleid', JSON.stringify(acc[0].roleId))
        this.toastr.success('Hello!! '+ JSON.stringify(acc[0].name), '', {
          timeOut: 3500,
          progressBar: true,
          progressAnimation: 'increasing'
        });
        if(parseInt(localStorage.getItem('roleid')) == 4)
        this.router.navigate(['/client']);
        else if (parseInt(localStorage.getItem('roleid')) == 1)
        this.router.navigate(['/admin']);
        else if (parseInt(localStorage.getItem('roleid')) == 2)
        this.router.navigate(['/head']);
        else if (parseInt(localStorage.getItem('roleid')) == 3)
        this.router.navigate(['/asignee']);
        
      },
      rej => {
        this.toastr.error('Account Not found!!', '', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'increasing',
      });
      this.loginForm = this.builder.group({
        Username : '',
        Password : ''
      })}
    )
  }  
  
}
