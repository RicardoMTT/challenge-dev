import { HttpClient } from '@angular/common/http';
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
}
