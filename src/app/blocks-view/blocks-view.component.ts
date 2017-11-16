import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SaveToStorageService} from '../services/storage/save-to-storage.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-blocks-view',
  templateUrl: './blocks-view.component.html',
  styleUrls: ['./blocks-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlocksViewComponent implements OnInit {
  private images;
  constructor(private saveToStorage: SaveToStorageService) { }

  ngOnInit() {
    this.saveToStorage.getCollectionFromStorage('images').subscribe((images) => {
      this.images = images;
    }, error => {
       console.log(error, 'err');
    });
  }
  removeImage (id) {
    console.log('remove', id);
    this.saveToStorage.removeItemInCollection('images', id );
  }
}
