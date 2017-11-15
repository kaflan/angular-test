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
    new Observable(observer => observer.next(this.saveToStorage.getCollectionFromStorage('images'))).subscribe(
      (images) => {
        this.images = images;
      }
    );
  }
  removeImage (id) {
    console.log('remove', id);
  }
  onHovering() {
    console.log('hover');
  }
  onUnovering() {
    console.log('onUnovering');
  }
}
