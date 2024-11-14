// update-nutritional.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Nutritional } from '../model/nutritional.model';

@Component({
  selector: 'app-update-nutritional',
  templateUrl: './update-nutritional.component.html',
  styles: []
})
export class UpdateNutritionalComponent {
  @Input() nutritional!: Nutritional;
  @Input() ajout!: boolean;
  @Output() nutritionalUpdated = new EventEmitter<Nutritional>();

  saveNutritional() {
    this.nutritionalUpdated.emit(this.nutritional);
  }
}
