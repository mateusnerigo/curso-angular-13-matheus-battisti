import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ConditionalComponent } from './components/conditional/conditional.component';
import { EventsComponent } from './components/events/events.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EmmiterChangeNumberComponent } from './components/emmiter-change-number/emmiter-change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { TwoWayDtBindingComponent } from './components/two-way-dt-binding/two-way-dt-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    ConditionalComponent,
    EventsComponent,
    EmitterComponent,
    EmmiterChangeNumberComponent,
    ListRenderComponent,
    TwoWayDtBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
