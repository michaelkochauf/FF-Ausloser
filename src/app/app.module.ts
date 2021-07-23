import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { PositionComponent } from './position/position.component';
import { MainAusloserComponent } from './main-ausloser/main-ausloser.component';

@NgModule({
  declarations: [
    PositionComponent,
    MainAusloserComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainAusloserComponent],
  entryComponents: [MainAusloserComponent]
})
export class AppModule { 
  constructor(private injector:Injector){

  }
  ngDoBootstrap()
  {
    const table = createCustomElement(MainAusloserComponent, {injector: this.injector});
    customElements.define('app-component',table);
  }
}
