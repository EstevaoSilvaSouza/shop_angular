import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { ProdutoComponent } from './components/pages/produto/produto.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'produto/:id', component: ProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
