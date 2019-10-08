import { TestBed } from '@angular/core/testing';

import { InformaitionService } from './informaition.service';

describe('InformaitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformaitionService = TestBed.get(InformaitionService);
    expect(service).toBeTruthy();
  });
});
