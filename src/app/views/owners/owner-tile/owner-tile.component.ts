import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Owner } from '../../../models/owner.model';
import { OwnerService } from '../../../services/owner.service';

@Component({
  selector: 'app-owner-tile',
  inputs: ['owner'],
  templateUrl: './owner-tile.component.html',
  styleUrls: ['./owner-tile.component.css']
})
export class OwnerTileComponent implements OnInit {
  @Input() owner: Owner;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  avatar: any;
  deleting: boolean;

  constructor(public sanitizer: DomSanitizer, private ownerService: OwnerService) {
  }

  ngOnInit() {
    if (this.owner.picture) {
      this.avatar = this.sanitizer.bypassSecurityTrustUrl(this.owner.picture);
    } else {
      this.avatar = '../../../assets/NoAvatar.jpg';
    }
  }

  removeOwner(): void {
    this.deleting = true;
    this.ownerService.deleteOwner(this.owner.id)
      .subscribe(() => {
        this.deleting = false;
        this.onDelete.emit();
      });
  }

}
