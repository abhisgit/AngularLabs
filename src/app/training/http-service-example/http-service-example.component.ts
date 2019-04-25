import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../../services/http-api.service';

@Component({
  selector: 'app-http-service-example',
  templateUrl: './http-service-example.component.html',
  styleUrls: ['./http-service-example.component.css']
})
export class HttpServiceExampleComponent implements OnInit {

  apiData: any;

  constructor(private _myHttpService: HttpApiService) { }

  ngOnInit() {
    this._myHttpService.getData().subscribe(data => this.apiData = data);
  }

}
