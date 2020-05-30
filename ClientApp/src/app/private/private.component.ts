import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
})
export class PrivateComponent implements OnInit {
  response: string;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  callPrivate() {
    this.apiService.getPrivate().subscribe(
      (res) => {
        this.response = res;
      },
      (err) => {
        this.response = err.message;
      }
    );
  }
}
