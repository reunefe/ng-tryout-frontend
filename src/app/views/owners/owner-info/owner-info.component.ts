import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Owner } from '../../../models/owner.model';
import { Address } from '../../../models/address.model';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-owner-info',
  inputs: ['owner'],
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.css']
})
export class OwnerInfoComponent implements OnInit {
  form: FormGroup;
  @Input() owner: Owner;
  @Input() uploader: FileUploader;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'firstName': new FormControl(this.owner && this.owner.firstName, [
        Validators.required, Validators.minLength(2)
      ]),
      'lastName': new FormControl(this.owner && this.owner.lastName, [
        Validators.required, Validators.minLength(3)
      ]),
      'phoneNr': new FormControl(this.owner && this.owner.phoneNr, [
        Validators.required, Validators.minLength(9)
      ]),
      'emergencyNr': new FormControl(this.owner && this.owner.emergencyNr),
      'street': new FormControl(this.owner && this.owner.address && this.owner.address.street),
      'houseNr': new FormControl(this.owner && this.owner.address && this.owner.address.houseNr),
      'zipCode': new FormControl(this.owner && this.owner.address && this.owner.address.zipCode),
      'city': new FormControl(this.owner && this.owner.address && this.owner.address.city),
      'email': new FormControl(this.owner && this.owner.email, [
        Validators.required
      ])
    });
  }

  getOwner(): Owner {
    let owner: Owner = new Owner(
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.phoneNr,
      undefined,
      new Address(
        this.form.value.street,
        this.form.value.houseNr,
        this.form.value.zipCode,
        this.form.value.city
      ),
      this.form.value.email,
      this.form.value.emergencyNr
    );

    return owner;
  }

}
