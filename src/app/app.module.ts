import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { PositionComponent } from './position/position.component';
import { MainAusloserComponent } from './main-ausloser/main-ausloser.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    PositionComponent,
    MainAusloserComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
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
