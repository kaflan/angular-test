import {Component, OnInit, ViewEncapsulation, ElementRef} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {FileUploader} from 'ng2-file-upload';
import {HelperService} from '../services/Helpers/helper.service';
import {SaveToStorageService} from '../services/storage/save-to-storage.service';

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

  constructor(
    private sanitizer: DomSanitizer,
    private helpers: HelperService,
    private saveToStorage: SaveToStorageService,
    private el: ElementRef
  ) {
    this.uploader.setOptions({allowedMimeType: ['image/jpeg', 'image/png']});
  }

  ngOnInit() {
  }

  SaveAll($event) {
    const pictures = this.uploader.queue.map((item, index) => {
      //
      const id = this.helpers.randId();
      const checksum = this.helpers.hash(item.file.name);
      const file = this.uploader.queue[index]._file;
      const fileSize =  item.file.size;
      const name = item.file.name;
      this.readFile(file, id, name, checksum, fileSize);
    });
    this.uploader.clearQueue();
  }
  readFile(excelFile, id, name, ckecksum, fileSize) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const data = event.target.result;
        this.saveToStorage.updateItemInCollection('images', { id, name, ckecksum, fileSize, data });
      };
      reader.readAsDataURL(excelFile);
  }
}
