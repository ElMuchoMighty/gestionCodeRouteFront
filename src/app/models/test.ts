
import { ExamenBlanc } from "./examen-blanc";
import { ExamenFinal } from "./examen-final";
import { Reponse } from "./reponse";

export class Test {
    idTest!:number;
    image!:File;
    question!:string;
    codeBonneReponse!:number;
    timerRep!:number;
    examenBlanc!:ExamenBlanc[];
    examenFinal!:ExamenFinal[];
}
