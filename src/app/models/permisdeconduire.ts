import { Assuranceauto } from "./assuranceauto";
import { Moniteur } from "./moniteur";
import { Utilisateur } from "./utilisateur";
import { Vehicules } from "./vehicules";

export class Permisdeconduire {
    idPermis!:number;
    libPermis!:string;
    villePermis!:string;
    paysPermis!:string;
    assuranceauto!:Assuranceauto[];
    vehicules!:Vehicules[];
    moniteurs!:Moniteur[];
    utilisateur!:Utilisateur;
}
