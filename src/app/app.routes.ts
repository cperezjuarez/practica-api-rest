import { Routes } from '@angular/router';
import { LlistaUsuaris } from './components/llista-usuaris/llista-usuaris';
import { LlistaPublicacions } from './components/llista-publicacions/llista-publicacions';

export const routes: Routes = [
    {path: '', redirectTo: '/usuaris', pathMatch: 'full'},
    {path: 'usuaris', component: LlistaUsuaris},
    {path: 'publicacions', component: LlistaPublicacions}
];