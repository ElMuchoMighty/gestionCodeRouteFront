import { file_v1 } from "googleapis";
import { Reponse } from "./reponse";

export class Test {
    idTest!:number;
    image!:File;
    question!:string;
    codeBonneReponse!:number;
    timerRep!:number;
    reponses!:Reponse[];
}
