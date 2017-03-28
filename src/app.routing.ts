/**
 * Created by mariumaskri on 2017-03-26.
 */
import { Routes, RouterModule} from '@angular/router';

// Import our components
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./app/Components/home/home.component";
const appRoutes: Routes = [
  // Add the redirect
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
   }
];
export const appRoutingProviders: any[] = [
];
// Here we are exporting our routes
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
