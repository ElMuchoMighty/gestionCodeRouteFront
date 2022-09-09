import { Moniteur } from "./moniteur";
import { Rendezvous } from "./rendezvous";
import { Utilisateur } from "./utilisateur";

export class Autoecole {
    idAutoEcole!:number;
    adresseAutoEcole!:string;
    emailAutoEcole!:string;
    telephoneAutoEcole!:number;
    enseigneAutoEcole!:string;
    utilisateurAutoEcole!:Utilisateur[];
    moniteurAutoEcole!:Moniteur[];
    rendezVousAutoEcole!:Rendezvous[];
}
