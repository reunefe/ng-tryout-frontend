import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MdButton } from '@angular/material';

@Component({
  selector: 'app-base-dialog',
  templateUrl: './base-dialog.component.html',
  styleUrls: ['./base-dialog.component.css']
})
export class BaseDialogComponent implements OnInit {
  @ViewChild('closeButton') closeButton: MdButton;
  @Input() title: string;
  @Input() progress: number;
  @Input() error: string;

  constructor() {
  }

  ngOnInit() {
  }

  closeDialog() {
    this.closeButton._elementRef.nativeElement.click();
  }

}
