import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './feature/pages/sign-in/sign-in.component';

const routes: Routes = [
  // 註冊頁面路由 http://localhost/sign-in
  { path: 'sign-in', component: SignInComponent },
  //沒定義的路由為 **
  { path: '**', redirectTo: 'sign-in' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
