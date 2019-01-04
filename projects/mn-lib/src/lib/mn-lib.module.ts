import { NgModule } from '@angular/core';
import { MNLibComponent } from './mn-lib.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MNLibComponent,
    ColorPickerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MNLibComponent,
    ColorPickerComponent
  ]
})
export class MNLibModule { }
