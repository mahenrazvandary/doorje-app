import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  apiResponse!: Observable<string>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiResponse = this.apiService.getProtectedApiResponse();
  }

}
