import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './enrrutamientos/inicio/inicio.component';
import { PrimeroComponent } from './enrrutamientos/primero/primero.component';
import { SegundoComponent } from './enrrutamientos/segundo/segundo.component';
import { NotFoundComponent } from './enrrutamientos/not-found/not-found.component';
import { HijoAComponent } from './enrrutamientos/hijo-a/hijo-a.component';
import { HijoBComponent } from './enrrutamientos/hijo-b/hijo-b.component';

export const routes: Routes = [


    { path: 'inicio', component: InicioComponent },
    {
        path: 'primero', component: PrimeroComponent,
        children: [
            {
                path: 'hijo-a', component:HijoAComponent
            },
            {
                path: 'hijo-b', component: HijoBComponent
            }

        ]
    },
    { path: 'segundo/:id/:cod', component: SegundoComponent },
    { path: '', redirectTo: "inicio", pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];
