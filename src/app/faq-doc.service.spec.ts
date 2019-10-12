import { TestBed } from '@angular/core/testing';

import { FaqDocService } from './faq-doc.service';

describe('FaqDocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaqDocService = TestBed.get(FaqDocService);
    expect(service).toBeTruthy();
  });
});
