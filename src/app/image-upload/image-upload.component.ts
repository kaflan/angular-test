import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {FileUploader} from 'ng2-file-upload';

const URL = '';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ImageUploadComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver = false;
  public filePreviewPath: SafeUrl;
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  constructor(private sanitizer: DomSanitizer) {
    this.uploader.setOptions({allowedMimeType: ['image/jpeg', 'image/png']});
  }

  ngOnInit() {
  }
  onClickMe($event) {
    console.log('click', this.uploader.queue);
  }

}
