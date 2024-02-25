import {chickenInstructions} from './Chicken';
import { guacInstruction } from './Guacamole';
export {default as NigerianMeatPie} from './NigerianMeatPie';
export {default as Chicken} from './Chicken';
export {default as Dumplings} from './Dumplings';
export {default as Jambalaya} from './Jambalaya';
export {default as Guacamole} from './Guacamole';
export {default as PastaPesto} from './PastaPesto';
export {default as ChocoChip} from './ChocoChip';
export {default as Pho} from './Pho';


const pastaInstructions =[];
const meatpieInstructions=[];
const cookieInstructions=[];
const jambalayaInstructions=[]
const dumplingsInstruction=[];
const phoInstructions = [];

export const recipeInstructions = [chickenInstructions, guacInstruction,pastaInstructions,meatpieInstructions,cookieInstructions,jambalayaInstructions,dumplingsInstruction,phoInstructions]