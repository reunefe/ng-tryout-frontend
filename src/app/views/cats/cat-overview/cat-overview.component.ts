import { Component, OnInit } from '@angular/core';
import { CatService } from '../../../services/cat.service';
import { Cat } from '../../../models/cat.model';

@Component({
  selector: 'app-cat-overview',
  templateUrl: './cat-overview.component.html',
  styleUrls: ['./cat-overview.component.css']
})
export class CatOverviewComponent implements OnInit {
  catList: Cat[];

  constructor(private catService: CatService) {
  }

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.catService.getCats()
      .subscribe(data => this.catList = data);
  }

}
