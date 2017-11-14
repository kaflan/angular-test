import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SaveToStorageService} from '../services/storage/save-to-storage.service';

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
    this.images = this.saveToStorage.getCollectionFromStorage('images');
  }
}
