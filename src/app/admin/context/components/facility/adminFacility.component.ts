import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/admin/services/AdminService.service';
import { Account } from 'src/app/entites/account.entity';
import { Facility } from 'src/app/entites/facility.entity';
import { Role } from 'src/app/entites/role.entity';

@Component({
  selector: 'aadmin-facility',
  templateUrl: './adminFacility.component.html',
})
export class AdminFacilityComponent {

  facilities: Facility[];
  accounts: Account[];
  roles: Role;
  facilityAddForm: FormGroup;
  facilityUpdateForm: FormGroup;

  constructor(
    private service: AdminService,
    private formBuilder: FormBuilder

  ){}

  ngOnInit() {
    this.service.findAllFacility().then(
          res => {this.facilities  = res},
          reject =>{console.log(reject) }
      );
      this.service.findAllHead().then(
        res => {this.accounts  = res},
        reject =>{console.log(reject) }
    );
    this.facilityAddForm = this.formBuilder.group({
      id:'',
      name:'',
      email:'',
      username:'',
      password:'',
      roleId:0,
    });
    this.facilityUpdateForm = this.formBuilder.group({
      name:'',
      email:'',
      username:'',
      password:'',
      roleId:0,
    });

  }
  addFacility(){

  }

  updateFacility(){

  }
  
}
