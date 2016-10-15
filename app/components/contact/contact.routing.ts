/**
 * Created by dreamapple on 16/9/25.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from "./contact.component";

export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: 'contact', component: ContactComponent}
]);