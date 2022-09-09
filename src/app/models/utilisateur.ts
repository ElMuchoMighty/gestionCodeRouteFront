import { Autoecole } from "./autoecole";
import { Cours } from "./cours";
import { Favoris } from "./favoris";
import { Permisdeconduire } from "./permisdeconduire";
import { Rapport } from "./rapport";
import { Role } from "./role";
import { Test } from "./test";

export class Utilisateur {
    idUtilisateur!:number;
    nomUtilisateur!:string;
    prenomUtilisateur!:string;
    username!:string;
    password!:string;
    dateNaissanceUtilisateur!:Date;
    emailUtilisateur!:string;
    telUtilisateur!:number;
    roles!:Role[];
    tests!:Test[];
    cours!:Cours[];
    rapports!:Rapport[];
    favoris!:Favoris[];
    permisdeconduires!:Permisdeconduire[];
    autoecole!:Autoecole;
}
