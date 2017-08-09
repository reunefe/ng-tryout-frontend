import { Component, OnInit, ViewChild } from '@angular/core';
import { OwnerInfoComponent } from '../owner-info/owner-info.component';
import { OwnerService } from '../../../services/owner.service';

@Component({
  selector: 'app-owner-registration',
  templateUrl: './owner-registration.component.html',
  styleUrls: ['./owner-registration.component.css']
})
export class OwnerRegistrationComponent implements OnInit {
  @ViewChild('ownerInfo') ownerInfo: OwnerInfoComponent;

  constructor(private ownerService: OwnerService) {
  }

  ngOnInit() {
  }

  registerOwner() {
    let owner = this.ownerInfo.getOwner();
    this.ownerService.createOwner(owner)
      .subscribe(() => {
        this.ownerInfo.form.reset();
      });
  }

}
