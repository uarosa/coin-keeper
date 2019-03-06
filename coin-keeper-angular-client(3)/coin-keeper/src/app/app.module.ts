import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CalculatorComponent } from './shared/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CategoryPageComponent,
    HeaderComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
