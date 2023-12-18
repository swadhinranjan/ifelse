import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl = 'https://1.api.fy23ey06.careers.ifelsecloud.com/';

  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
