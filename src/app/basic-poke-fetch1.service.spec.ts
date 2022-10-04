import { TestBed } from '@angular/core/testing';

import { BasicPokeFetch1Service } from './basic-poke-fetch1.service';

describe('BasicPokeFetch1Service', () => {
  let service: BasicPokeFetch1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicPokeFetch1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
