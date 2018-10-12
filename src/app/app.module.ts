import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Name2Component } from './name2/name2.component';
import { NamesService } from './names.service';

@NgModule({
  declarations: [
    AppComponent,
    Name2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
