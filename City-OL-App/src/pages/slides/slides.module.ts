import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidesPage } from './slides';
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    SlidesPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidesPage),
  ],
})
export class SlidesPageModule {}
