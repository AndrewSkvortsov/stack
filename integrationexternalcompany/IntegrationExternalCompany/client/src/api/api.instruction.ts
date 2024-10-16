import { Instruction } from "../components/shared/models/instruction.model";

export const getInstriction = async (company: string) =>
    (await (await fetch('/instruction/' + company)).json() as Instruction); 


