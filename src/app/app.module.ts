import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { userComponent } from './userDefined_Component/user.component';
import { TrialCli1Component } from './trial-cli1/trial-cli1.component'

@NgModule({
  declarations: [
    AppComponent,
    userComponent,
    TrialCli1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
