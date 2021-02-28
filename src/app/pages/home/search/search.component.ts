import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private fb: FormBuilder, private homeService: HomeService) {
    this.searchForm = this.fb.group({
      keyword: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  searchJobs() {
    const { keyword } = this.searchForm.value;
    this.homeService.getJobsByKeyword(keyword);
  }
}
