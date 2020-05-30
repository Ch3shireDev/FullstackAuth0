import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
})
export class PublicComponent implements OnInit {
  response: string;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  callPublic() {
    this.apiService.getPublic().subscribe((res) => {
      this.response = res;
    });
  }
}
