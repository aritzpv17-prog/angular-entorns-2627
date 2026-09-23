//Una interficie defineix l'estructura d'un objecte

export interface patata {
    id: number;
    nom: string;
    autor: string;
    pagines: number;
    disponible: boolean;
    descripcio?: string;
}