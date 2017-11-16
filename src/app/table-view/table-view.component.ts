import { Component, OnInit,  } from '@angular/core';
import {SaveToStorageService} from '../services/storage/save-to-storage.service';
import {ImageInterface} from '../models/image.interface';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  private image;
  private images: [ImageInterface];
  constructor(private save: SaveToStorageService) { }


  ngOnInit() {
    this.save.getCollectionFromStorage('images').subscribe((images: [ImageInterface]) => {
      this.images = images;
    }, error => {
      console.log(error, 'err');
    });
  }
  removeImage (id) {
    this.save.removeItemInCollection('images', id ).subscribe((images: [ImageInterface]) => {
      this.images = images;
    });
  }
  preview(image: any) {
    this.image = image.data;
  }

}
