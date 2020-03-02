import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'listado',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'insertar',
    loadChildren: () => import('./formulario/insertar/insertar.module').then( m => m.InsertarPageModule)
  },
  {
    path: 'eliminar',
    loadChildren: () => import('./formulario/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'actualizar',
    loadChildren: () => import('./formulario/actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
