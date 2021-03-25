import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './check/basic.component';
import { AdvancedtableComponent } from './advancedtable/advancedtable.component';

const routes: Routes = [
    {
        path: 'ruta',
        component: BasicComponent
    },
    {
        path: 'advanced',
        component: AdvancedtableComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule { }
