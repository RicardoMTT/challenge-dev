import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Job } from 'src/app/models/job.model';
import { JobsStore } from 'src/app/stores/job/job.store';
import { HomeApi } from './home.api';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private api: HomeApi, private jobsStore: JobsStore) {}

  getApiService() {
    this.jobsStore.setLoading(true);
    this.api
      .getJobs()
      .pipe(
        tap((response: Job[]) => {
          console.log(response);
          // hasReachedLimit: newPagesIds.length === count,
          const newJobsId = response.map((elm) => elm.id);
          this.jobsStore.upsertMany(response);
          const numbersPage = Math.ceil(response.length / 5);
          this.jobsStore.update((state) => {
            return {
              ...state,
              currentPage: 1,
              pagesNumbers: numbersPage,
              hasReachedLimit: newJobsId.length === numbersPage,
              jobsID: newJobsId,
            };
          });
        }),
        tap((_) => this.jobsStore.setLoading(false))
      )
      .subscribe(console.log);
  }
}
