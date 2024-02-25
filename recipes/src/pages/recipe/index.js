import {chickenInstructions} from './Chicken';
import { guacInstructions } from './Guacamole';
import { cookieInstructions } from './ChocoChip';
import { dumplingsInstructions } from './Dumplings';
import { jambalayaInstructions } from './Jambalaya';
import { meatpieInstructions } from './NigerianMeatPie';
import { phoInstructions } from './Pho';
import { pastaInstructions } from './PastaPesto';


export {default as NigerianMeatPie} from './NigerianMeatPie';
export {default as Chicken} from './Chicken';
export {default as Dumplings} from './Dumplings';
export {default as Jambalaya} from './Jambalaya';
export {default as Guacamole} from './Guacamole';
export {default as PastaPesto} from './PastaPesto';
export {default as ChocoChip} from './ChocoChip';
export {default as Pho} from './Pho';

export const recipeInstructions = [chickenInstructions, guacInstructions,pastaInstructions,meatpieInstructions,cookieInstructions,jambalayaInstructions,dumplingsInstructions,phoInstructions]