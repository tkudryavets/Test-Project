import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PageWrapperModule } from './shared/components/page-wrapper/page-wrapper.module';
import { NavPanelModule } from './shared/components/nav-panel/nav-panel.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageWrapperModule,
    NoopAnimationsModule,
    NavPanelModule,
    HttpClientModule,

    NgxsModule.forRoot([]), NgxsLoggerPluginModule.forRoot(), NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
