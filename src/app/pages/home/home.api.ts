import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Job } from '../../models/job.model';

@Injectable({
  providedIn: 'root',
})
export class HomeApi {
  constructor(private http: HttpClient) {}

  getJobs(): Observable<any> {
    return this.http
      .get('https://jobs.github.com/positions.json?location=new+york')
      .pipe(
        map((jobs) => {
          return jobs;
        })
      );
  }

  getJobsByKeyword(term) {
    const params = new HttpParams();
    params.set('description', term);
    return this.http
      .get(`https://jobs.github.com/positions.json?description=${term}`)
      .pipe(
        map((jobs) => {
          return jobs;
        })
      );
  }
}
