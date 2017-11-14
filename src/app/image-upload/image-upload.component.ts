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
  public images = [];
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
      const id = this.helpers.randId()
      const propmise = this.readFile(this.uploader.queue[index]._file, id);
      return {
        id,
        fileSize: item.file.size,
        name: item.file.name,
        data: this.readFile(this.uploader.queue[index]._file, id),
        checksum: this.helpers.hash(item.file.name)
      };
    });
    this.saveToStorage.saveColectionToStorage('images', pictures);
    this.uploader.clearQueue();
  }
  readFile(excelFile, id) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const data = event.target.result;
        this.images.push({id, data});
      };
      reader.readAsDataURL(excelFile);
  }
}
