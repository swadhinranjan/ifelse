import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FirstColumnComponent } from './first-column/first-column.component';
import { TotalBalanceComponent } from './total-balance/total-balance.component';
import { StatisticsGraphComponent } from './statistics-graph/statistics-graph.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ApiServiceService } from './service/api-service.service';
import { AgChartsAngularModule } from 'ag-charts-angular';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FirstColumnComponent,
    TotalBalanceComponent,
    StatisticsGraphComponent,
    TransactionHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgChartsAngularModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
