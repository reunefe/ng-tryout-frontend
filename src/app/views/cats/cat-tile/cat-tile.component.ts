import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Cat } from '../../../models/cat.model';
import { CatService } from '../../../services/cat.service';

@Component({
  selector: 'app-cat-tile',
  inputs: ['cat'],
  templateUrl: './cat-tile.component.html',
  styleUrls: ['./cat-tile.component.css']
})
export class CatTileComponent implements OnInit {
  @Input() cat: Cat;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  deleting: boolean;

  constructor(public sanitizer: DomSanitizer, private catService: CatService) {
  }

  ngOnInit() {
  }

  removeCat(): void {
    this.deleting = true;
    this.catService.deleteCat(this.cat.id)
      .subscribe(() => {
        this.deleting = false;
        this.onDelete.emit();
      });
  }

}
