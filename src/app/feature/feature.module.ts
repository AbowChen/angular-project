import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './pages/sign-in/sign-in.component';
// material component
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule],
  exports: [],
  providers: [],
})
export class FeatureModule {}
