import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentiComponent } from './componenti/componenti.component';
import { PagineComponent } from './pagine/pagine.component';
import { TodosComponent } from './Pagine/todos/todos.component';
import { CompletatiComponent } from './Pagine/completati/completati.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentiComponent,
    PagineComponent,
    TodosComponent,
    CompletatiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
