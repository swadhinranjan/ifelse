import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-total-balance',
  templateUrl: './total-balance.component.html',
  styleUrls: ['./total-balance.component.scss']
})
export class TotalBalanceComponent implements OnInit {

  totalBalanceData:any = {};

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(res => {
      this.totalBalanceData = res?.balance;
    })
  }

}
