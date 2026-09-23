import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte'; //PER PODER USAR LA iterface DE TIPUS Producte s'ha d'importar
import { patata } from './models/patata';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');
    //OBJECTIU DE LA SESSIÓ 2: Veure la diferència entre JS i TS --> TS = JS + tipus.
    //ELS TIPUS no canvien com funciona el codi --> AJUDEN A DETECTAR ERRORS abans d'executar.
    // " undefined is not a function? " --> AIXÒ ÉS EL QUE VOLEM EVITAR!!!!!

    /*function saluda (nom) {
      return nom.toUpperCase();
    }

    saluda (40);
    --> Parameter 'nom' implicitly has an 'any' type
    */

   
    /*function saluda(nom:string) {
      return nom.toUpperCase();
    }

    saluda(40);

    --> Argument of type 'number' is not assignable to parameter of type 'string'.
    */

    //TIPUS BASICS
    nom: string = 'Angular';
    nom2: string = 'Laravel';
    versio : number = 20;
    actiu: boolean = true;

    //ARRAYS TIPATS
    colors : string[] = ['vermell', 'verd', 'blau'];
    frameworks: string[] = [this.nom, this.nom2];
    punts : number[] = [10, 15, 20];

    //TypeScrips infereix (adivina) el tipus automàticament
    ciutat = 'Lleida'; //string
    codiP = 25605; //number

    //objecte de tipus Producte

    producte: Producte = {
      id: 1, 
      nom : 'PC', 
      preu : 999,
      disponible : true
    };

    patates: patata[] = [
      { id: 1, nom: 'Patata blanca', autor: 'Agria', pagines: 120, disponible: true },
      { id: 2, nom: 'Patata vermella', autor: 'Red Pontiac', pagines: 95, disponible: true },
      { id: 3, nom: 'Patata dolça', autor: 'Sweet potato', pagines: 80, disponible: false },
      { id: 4, nom: 'Patata nova', autor: 'Kennebec', pagines: 110, disponible: true },
      { id: 5, nom: 'Patata petita', autor: 'Monalisa', pagines: 70, disponible: false, descripcio: 'Ideal per cuinar al forn' }
    ];

    getActius(): patata[] {
      return this.patates.filter(patata => patata.disponible);
    }

    findById(id: number): patata | undefined {
      return this.patates.find(patata => patata.id === id);
    }

    formatarElement(element: patata): string {
      return `${element.nom} - ${element.autor} - ${element.pagines} pagines`;
    }

    
}
