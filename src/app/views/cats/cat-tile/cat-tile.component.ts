import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Cat } from '../../../models/cat.model';

@Component({
  selector: 'app-cat-tile',
  inputs: ['cat'],
  templateUrl: './cat-tile.component.html',
  styleUrls: ['./cat-tile.component.css']
})
export class CatTileComponent implements OnInit {
  @Input() cat: Cat;

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

}
