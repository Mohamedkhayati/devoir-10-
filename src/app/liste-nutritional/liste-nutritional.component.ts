// liste-nutritional.component.ts

import { Component, OnInit } from '@angular/core';
import { Nutritional } from './../model/nutritional.model';
import { SupplementService } from '../services/supplement.service';

@Component({
  selector: 'app-listenutritional',
  templateUrl: './liste-nutritional.component.html',
})
export class ListeNutritionalsComponent implements OnInit {
  nutritionals: Nutritional[] = [];
  ajout: boolean = true;
  updatedNutritional: Nutritional = { idNut: 0, nomNut: '' };

  constructor(private supplementService: SupplementService) {}

  ngOnInit(): void {
    this.chargerNutritional();
  }

  chargerNutritional(): void {
    this.nutritionals = this.supplementService.listeNutritionals();
  }

  ajouterNutritional(nouveauNutritional: Nutritional): void {
    this.supplementService.ajouterNutritional(nouveauNutritional);
    this.chargerNutritional();
  }

  nutritionalUpdated(nt: Nutritional): void {
    if (this.ajout) {
      this.ajouterNutritional(nt);
    } else {
      const index = this.nutritionals.findIndex(nutritional => nutritional.idNut === nt.idNut);
      if (index !== -1) {
        this.nutritionals[index] = nt;
      }
      this.ajout = true;
    }
    this.updatedNutritional = { idNut: 0, nomNut: '' };
  }

  updateNut(nt: Nutritional): void {
    this.updatedNutritional = { ...nt };
    this.ajout = false;
  }
}
