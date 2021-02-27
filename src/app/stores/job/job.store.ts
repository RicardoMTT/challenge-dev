import { StoreConfig, ID, Store, EntityStore } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { JobState } from './job.state';

export function createInitialState(): JobState {
  return {
    jobsFilteredID: [],
    jobsID: [],
    currentPage: 0,
    hasReachedLimit: false,
    pageSize: 1,
    pagesNumbers: 1,
  };
}
@StoreConfig({ name: 'job-page' })
@Injectable({ providedIn: 'root' })
export class JobsStore extends EntityStore<JobState> {
  constructor() {
    super(createInitialState());
  }
}
