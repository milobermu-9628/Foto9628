import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Abbout } from './page/abbout/abbout';
import { Products } from './page/products/products';
import { Contact } from './page/contact/contact';

export const routes: Routes = [ 
{path: '', component:Home},
{path: 'about',component:Abbout},
{path: 'products',component:Products},
{path: 'contact',component:Contact},
{path: '**', redirectTo:''}
];