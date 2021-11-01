import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/admin/services/AdminService.service';
import { Facility } from 'src/app/entites/facility.entity';
import { Service } from 'src/app/entites/service.entity';

@Component({
  templateUrl: './adminService.component.html',
})
export class AdminServiceComponent {


  services: Service[];
facilities: Facility[];
  serviceAddForm: FormGroup;
  serviceUpdateForm: FormGroup;

  constructor(
    private service: AdminService,
    private formBuilder: FormBuilder

  ){}

  ngOnInit() {
    this.service.findAllService().then(
          res => {this.services  = res},
          reject =>{console.log(reject) }
      );
      this.service.findAllFacility().then(
        res => {this.facilities  = res},
        reject =>{console.log(reject) }
    );


    this.serviceAddForm = this.formBuilder.group({
      name:'',
      Facility:'',
      description:'',
    });
    this.serviceUpdateForm = this.formBuilder.group({
      name:'',
      Facility:'',
      description:'',
    }); 
  }

  serviceAdd(){

  }

  serviceUpdate(){

  }
  
}
