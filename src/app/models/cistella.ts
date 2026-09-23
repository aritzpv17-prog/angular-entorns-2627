import { patata } from './patata';

export class Cistella {
    nom: string;
    patates: patata[];

    constructor(nom: string) {
        this.nom = nom;
        this.patates = [];
    }

    afegirPatata(patata: patata): void {
        this.patates.push(patata);
    }

    eliminarPatata(id: number): boolean {
        const posicio = this.patates.findIndex(patata => patata.id === id);

        if (posicio !== -1) {
            this.patates.splice(posicio, 1);
            return true;
        }

        return false;
    }

    get quantitat(): number {
        return this.patates.length;
    }
}
