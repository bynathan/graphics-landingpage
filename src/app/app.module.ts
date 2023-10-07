import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CalculateComponent } from './pages/calculate/calculate.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyFormatDirective } from './currency-format.directive';
import { EmailFormatDirective } from './email-format.directive';
import { PhoneFormatDirective } from './phone-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculateComponent,
    FooterComponent,
    HeaderComponent,
    CurrencyFormatDirective,
    EmailFormatDirective,
    PhoneFormatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
