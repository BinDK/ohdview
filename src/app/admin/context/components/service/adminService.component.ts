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
  serviceDetail: Service[];
  facilities: Facility[];
  serviceAddForm: FormGroup;
  serviceUpdateForm: FormGroup;
  serviceDeleteForm: FormGroup;

  constructor(
    private service: AdminService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.service.findAllService().then(
      res => { this.services = res },
      reject => { console.log(reject) }
    );
    this.service.findAllFacility().then(
      res => { this.facilities = res },
      reject => { console.log(reject) }
    );


    this.serviceAddForm = this.formBuilder.group({
      name: '',
      facilityid: 0,
      description: '',
    });
    this.serviceUpdateForm = this.formBuilder.group({
      id:0,
      name: '',
      facilityid: 0,
      description: '',
    });
    this.serviceDeleteForm = this.formBuilder.group({
      id: 0
    });
  }

  serviceAdd() {
    let service: Service = this.serviceAddForm.value;
    this.service.createService(service).then(
      accept => {
        console.log(accept);
        this.service.findAllService().then(
          res => { this.services = res },
          reject => { console.log(reject) }
        );
      },
      reject => { console.log(reject) }
    );
  }

  detailService(id: number) {
    this.service.detailService(id).then(
      res => {

        this.serviceDetail = res;
        console.log(res);
        res.forEach(servi => {
          this.serviceUpdateForm = this.formBuilder.group({
            id: servi.id,
            name: servi.name,
            facilityid: servi.facilityid,
            description: servi.description,
          });
        });
      },

      reject => { console.log(reject) }
    );
  }
  serviceUpdate() {
    let service: Service = this.serviceUpdateForm.value;

    this.service.updateService(service).then(
      accept => {
        this.service.findAllService().then(
          res => { this.services = res },
          reject => { console.log(reject) }
        );
      },
      reject => { console.log(reject) }
    );
  }
  noUpdate() {
    this.serviceUpdateForm = this.formBuilder.group({
      id: 0,
      name: '',
      facilityid: 0,
      description: ''
    });
  }

  deleteService(id: number) {
    this.serviceDeleteForm = this.formBuilder.group({
      id: id
    });
  }
  actualDelete() {
    let service: Service = this.serviceDeleteForm.value;

    this.service.deleteService(service.id).then(
      accept => {
        this.service.findAllService().then(
          res => { this.services = res },
          reject => { console.log(reject) }
        );
      },
      reject => { console.log(reject) }
    );
  }
  actualNotDelete() {
    this.serviceDeleteForm = this.formBuilder.group({
      id: 0
    });
  }
}
