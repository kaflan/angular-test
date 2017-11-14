import {Component, OnInit, ViewEncapsulation, ElementRef} from '@angular/core';
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
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor(private eleRef: ElementRef) {
  }

  ngOnInit() {
  }
  onClickMe($event) {
    this.eleRef.nativeElement.querySelector('#select').dispatchEvent(new Event('click'));
    console.log('click');
  }
  Onclik($event) {
    // debugger
    console.log('click', $event);
  }

}
