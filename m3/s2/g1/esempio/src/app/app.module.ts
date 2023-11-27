import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimoesempioComponent } from './primoesempio/primoesempio.component';
import { SecondoesempioComponent } from './secondoesempio/secondoesempio.component';
import { TerzoesempioComponent } from './terzoesempio/terzoesempio.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoesempioComponent,
    SecondoesempioComponent,
    TerzoesempioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
