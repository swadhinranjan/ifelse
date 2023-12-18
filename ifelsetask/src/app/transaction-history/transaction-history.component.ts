import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  transactions:any[] = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(res => {
      this.transactions = res?.transactions;
    })
  }

}
