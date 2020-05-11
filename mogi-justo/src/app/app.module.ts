import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ChartsModule } from 'ng2-charts';


import { HttpClientModule } from '@angular/common/http';
import { TesteService } from './teste.service';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    BarChartComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    TesteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
