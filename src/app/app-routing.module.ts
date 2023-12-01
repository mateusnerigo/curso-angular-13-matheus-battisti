import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponentComponent } from './components/test-component/test-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ConditionalComponent } from './components/conditional/conditional.component';
import { EventsComponent } from './components/events/events.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { TwoWayDtBindingComponent } from './components/two-way-dt-binding/two-way-dt-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
    { path: '', component: TestComponentComponent, },
    { path: 'directives', component: DirectivesComponent, },
    { path: 'conditional', component: ConditionalComponent, },
    { path: 'events', component: EventsComponent, },
    { path: 'emitter', component: EmitterComponent, },
    { path: 'twoWayDataBinging', component: TwoWayDtBindingComponent, },
    { path: 'list', component: ListRenderComponent, },
    { path: 'list/:id', component: ItemDetailComponent },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
