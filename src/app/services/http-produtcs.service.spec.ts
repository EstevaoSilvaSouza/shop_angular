import { TestBed } from '@angular/core/testing';

import { HttpProdutcsService } from './http-produtcs.service';

describe('HttpProdutcsService', () => {
  let service: HttpProdutcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpProdutcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
