import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { JobQuery } from 'src/app/stores/job/job.query';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobsComponent implements OnInit {
  constructor(public jobQuery: JobQuery) {}

  ngOnInit(): void {}
}
