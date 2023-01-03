import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageWrapperModule } from './shared/components/page-wrapper/page-wrapper.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavPanelModule } from './shared/components/nav-panel/nav-panel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageWrapperModule,
    NoopAnimationsModule,
    NavPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
