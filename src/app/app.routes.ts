import { Routes } from '@angular/router';
import { SecretsComponent } from '../secrets/secrets.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [

    {path:'',component:HomeComponent},
    {path:'secrets',component:SecretsComponent}
];
