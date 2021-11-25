import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  faciDetail: Facility[];
  accounts: Account[];
  roles: Role;
  facilityAddForm: FormGroup;
  facilityUpdateForm: FormGroup;
  facilityDeleteForm: FormGroup;
  
  constructor(
    private service: AdminService,
    private formBuilder: FormBuilder,
    private toaster: ToastrService

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
      name:'',
      headaccountid:0,
      description:'',
    });
    this.facilityUpdateForm = this.formBuilder.group({
      id:0,
      name:'',
      headaccountid:0,
      description:'',
    });
    this.facilityDeleteForm = this.formBuilder.group({id: 0});

  }
  get detail(){return this.facilityAddForm.controls;}
  addFacility(){
    if(this.detail.name.value == '' || this.detail.headaccountid.value == 0){
      this.toaster.error('Missing some value', '', {
        timeOut: 3500,
        progressBar: true,
        progressAnimation: 'increasing'
      });
    }
    else{

      let faci :Facility = this.facilityAddForm.value;
      this.service.createFacility(faci).then(
        accept => {
          this.toaster.success('Successfully added Facility', '', {
            timeOut: 3500,
            progressBar: true,
            progressAnimation: 'increasing'
          });
          this.service.findAllFacility().then(
            res => {this.facilities  = res},
            reject =>{console.log(reject) }
            );
          },
          reject => {console.log(reject)}
          );
        }  
  }
  findByName(evt:any){
    var val = evt.target.value;
    if(val == ''){
      this.service.findAllFacility().then(
        res => { this.facilities = res
          //  alert(res.length)
         },
        reject => { console.log(reject) }
      );
    }
    this.service.facilityFindBy(val).then(
      res => { this.facilities = res },
      reject => { console.log(reject) }
    );
  }

  detailFacility(id: number) {
    this.service.detailFacility(id).then(
      res => {

        this.faciDetail = res;
        console.log(res);
        res.forEach(faci => {
          this.facilityUpdateForm = this.formBuilder.group({
            id: faci.id,
            name: faci.name,
            headaccountid: faci.head.id,
            description: faci.description,
          });
        });
      },

      reject => { console.log(reject) }
    );
  }
  facilityUpdate() {
    let faci: Facility = this.facilityUpdateForm.value;

    this.service.updateFacility(faci).then(
      accept => {
        this.toaster.success('Successfully updated Facility', '', {
          timeOut: 3500,
          progressBar: true,
          progressAnimation: 'increasing'
        });
        this.service.findAllFacility().then(
          res => { this.facilities = res },
          reject => { console.log(reject) }
        );
      },
      reject => { console.log(reject) }
    );
  }
  noUpdate() {
    this.facilityUpdateForm = this.formBuilder.group({
      id: 0,
      name: '',
      headaccountid: 0,
      description: ''
    });
  }

  deleteFacility(id: number) {
    this.facilityDeleteForm = this.formBuilder.group({
      id: id
    });
  }
  actualDelete() {
    let faci: Facility = this.facilityDeleteForm.value;

    this.service.deleteFacility(faci.id).then(
      accept => {
        this.service.findAllFacility().then(
          res => { this.facilities = res },
          reject => { console.log(reject) }
        );
      },
      reject => { console.log(reject) }
    );
  }
  actualNotDelete() {
    this.facilityDeleteForm = this.formBuilder.group({
      id: 0
    });
  }
  
}
