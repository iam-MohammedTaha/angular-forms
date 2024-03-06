import { Routes } from '@angular/router';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { LandingComponent } from './forms/landing/landing.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingComponent,
    },
    {
        path: 'template-form',
        component:TemplateFormComponent
    },
    {
        path: 'reactive-form',
        component:ReactiveFormComponent
    }
];
