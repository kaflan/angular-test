import { TestBed, inject } from '@angular/core/testing';

import { SaveToStorageService } from './save-to-storage.service';

describe('SaveToStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveToStorageService]
    });
  });

  it('should be created', inject([SaveToStorageService], (service: SaveToStorageService) => {
    expect(service).toBeTruthy();
  }));
});
