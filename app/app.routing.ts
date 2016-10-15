/**
 * Created by dreamapple on 16/9/25.
 */

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'contact', pathMatch: 'full'},
    {path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule'},
    {path: 'heroes', loadChildren: 'app/heroes/hero.module#HeroModule'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);