import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService, private title: Title) {
    this.title.setTitle('Inicio');

    this.homeService.getApiService();
  }

  ngOnInit(): void {}
}
