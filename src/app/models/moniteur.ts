import { Permisdeconduire } from "./permisdeconduire";

export class Moniteur {
    idMoniteur!:number;
    nomMoniteur!:string;
    prenomMoniteur!:string;
    anneeMoniteur!:string;
    descriptionMoniteur!:string;
    telephoneMoniteur!:number;
    emailMoniteur!:string;
    permis!:Permisdeconduire[];

}
