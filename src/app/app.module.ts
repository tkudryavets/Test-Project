import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageWrapperModule } from './entities/components/page-wrapper/page-wrapper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
