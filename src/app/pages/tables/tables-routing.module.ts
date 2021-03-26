import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './certificado/basic.component';
import { AccionComponente } from './accion/accion.component';

const routes: Routes = [
    {
        path: 'certificados',
        component: BasicComponent
    },
    
    {
        path: 'accion',
        component: AccionComponente
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule { }
