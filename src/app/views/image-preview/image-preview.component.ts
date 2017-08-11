import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  @Input() uploader: FileUploader;
  preview: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
      this.uploader.onAfterAddingFile = (file) => {
      this.preview = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file._file)));
      this.uploader.queue.splice(0, this.uploader.queue.length - 1);
    };
  }

  selectImg() {
    this.fileInput.nativeElement.click();
  }

}
