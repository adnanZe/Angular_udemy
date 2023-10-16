import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { test10Guard } from './test10.guard';

describe('test10Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => test10Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
