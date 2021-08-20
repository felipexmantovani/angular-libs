import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibAModule } from '@lib-a';
import { LibBModule } from '@lib-b';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibAModule,
    LibBModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
