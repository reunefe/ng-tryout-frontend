import { Component, OnInit, ViewChild } from '@angular/core';
import { OwnerInfoComponent } from '../owner-info/owner-info.component';
import { OwnerService } from '../../../services/owner.service';
import { FileUploader } from 'ng2-file-upload';
import { Address } from '../../../models/address.model';
import { BaseDialogComponent } from '../../base-dialog/base-dialog.component';

@Component({
  selector: 'app-owner-registration',
  templateUrl: './owner-registration.component.html',
  styleUrls: ['./owner-registration.component.css']
})
export class OwnerRegistrationComponent implements OnInit {
  @ViewChild('ownerInfo') ownerInfo: OwnerInfoComponent;
  @ViewChild('dialog') dialog: BaseDialogComponent;
  uploader: FileUploader;
  progress: number;
  error: string;

  constructor(private ownerService: OwnerService) {
  }

  ngOnInit() {
    this.uploader = new FileUploader({
      url: this.ownerService.getEndpoint()
    });
  }

  registerOwner() {
    this.progress = 0;
    this.error = undefined;

    if (this.uploader.queue.length === 0) {
      this.uploader.addToQueue([new File([''], '')]);
    }
    this.registerWithAvatar();
  }

  registerWithAvatar() {
    this.uploader.queue.forEach(item => {
      item.withCredentials = false;
    });

    this.uploader.onBuildItemForm = (fileItem, form) => {
      let owner = this.ownerInfo.getOwner();
      this.buildFormItem(owner, form);
      return {fileItem, form};
    };

    this.uploader.onProgressItem = (fileItem, progress): any => {
      this.progress = progress;
    };

    this.uploader.onSuccessItem = (fileItem, progress): any => {
      this.registrationSuccess();
    };

    this.uploader.onErrorItem = (fileItem, response): any => {
      this.progress = 0;
      if (response) {
        let json = JSON.parse(response);
        this.error = json && json.data && json.data.error;
      } else {
        this.error = 'Something went wrong!';
      }
    };

    this.uploader.uploadAll();
  }

  registrationSuccess() {
    this.progress = 100;
    this.ownerInfo.form.reset();
    this.dialog.closeDialog();
    this.ownerService.getOwners();
  }

  buildFormItem(owner, form): any {
    Object.keys(owner).forEach((key: string) => {
      let value = owner[key];
      let property: string = this.getPropertyForKey(key);
      if (value !== null && value !== undefined) {
        if (value instanceof Address) {
          Object.keys(value).forEach((addressKey: string) => {
            form.append(`${property}[${property}]`, value[addressKey]);
          });
        } else {
          form.append(property, value);
        }
      }
    });
    return form;
  }

  getPropertyForKey(key: string): string {
    switch (key) {
      case 'firstName':
        return 'voornaam';
      case 'lastName':
        return 'familienaam';
      case 'address':
        return 'adres';

      case 'street':
        return 'straat';
      case 'houseNr':
        return 'nummer';
      case 'zipCode':
        return 'postcode';
      case 'city':
        return 'gemeente';

      case 'phoneNr':
        return 'telefoonnummer';
      case 'emergencyNr':
        return 'noodnummer';
      case 'picture':
        return 'foto';

      default:
        return '';
    }
  }
}
