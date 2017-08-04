import { Component, OnInit } from '@angular/core';
import { Owner } from '../../../models/owner.model';
import { OwnerService } from '../../../services/owner.service';

@Component({
  selector: 'app-owner-overview',
  templateUrl: './owner-overview.component.html',
  styleUrls: ['./owner-overview.component.css']
})
export class OwnerOverviewComponent implements OnInit {
  ownerList: Owner[];
  loading: boolean;

  constructor(private ownerService: OwnerService) {
  }

  ngOnInit() {
    this.getOwners();
  }

  getOwners(): void {
    this.loading = !this.ownerList || this.ownerList.length === 0;
    this.ownerService.getOwners()
      .subscribe(data => {
        this.loading = false;
        this.ownerList = data;
      });
  }

}
