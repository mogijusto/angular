import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './component/chart.component';

import { HttpClientModule } from '@angular/common/http';
import { TesteService } from './teste.service';
import { MainComponent } from './main/main.component';
import { Ng5SliderModule } from 'ng5-slider';
import { FiltroComponent } from './filtro/filtro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CargoComponent } from './component/cargo/cargo.component';
import { InfoEmpregadoComponent } from './info-empregado/info-empregado.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ChartComponent,
    MainComponent,
    FiltroComponent,
    CargoComponent,
    InfoEmpregadoComponent,
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng5SliderModule,
    ChartsModule,
    FontAwesomeModule
  ],
  providers: [
    TesteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
