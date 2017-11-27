import { TestBed, inject } from '@angular/core/testing';

import { GithubProjectsService } from './github-projects.service';

describe('GithubProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubProjectsService]
    });
  });

  it('should be created', inject([GithubProjectsService], (service: GithubProjectsService) => {
    expect(service).toBeTruthy();
  }));
});
