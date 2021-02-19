import { TestBed } from '@angular/core/testing';

import { WeatherupdateService } from './weatherupdate.service';

describe('WeatherupdateService', () => {
  let service: WeatherupdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherupdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
