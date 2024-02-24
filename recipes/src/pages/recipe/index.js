export {default as NigerianMeatPie} from './NigerianMeatPie';
export {default as Chicken} from './Chicken';
export {default as Dumplings} from './Dumplings';
export {default as Jambalaya} from './Jambalaya';
export {default as Guacamole} from './Guacamole';
export {default as PastaPesto} from './PastaPesto';
export {default as ChocoChip} from './ChocoChip';
export {default as Pho} from './Pho';
const chickenInstruction = 
    [{
        title: 'Chicken',
        desc: 'Cut the chicken beforehand to cook it more evenly and avoid staining the cutting board',
        num: 1
    },
    {
        title: 'Chicken',
        desc: 'In a bowl, add the olive oil, lemon juice, vinegar, garlic cloves, all the spices, and the salt and pepper for a chicken marinade.',
        num: 2
    },
    {
        title: 'Chicken',
        desc: 'Stir until well mixed, then add chicken and toss to coat evenly. Cover the bowl and marinate for 1-2 hours or more.',
        num: 3
    },
    {
        title: 'Chicken',
        desc: 'Heat the vegetable oil in a large skillet on medium high until the oil pops, then add the chicken. Cook until golden brown and cooked through (about 5-6 minutes, or 3-4 if it has been cut already)',
        num: 4
    },
    {
        title: 'Chicken',
        desc: 'Cut the chicken now if necessary. Let the meat rest for 5-10 minutes, and begin prepping the rice.',
        num: 5
    },
    {
        title: 'Rice',
        desc: 'Add the butter to a large saucepan/pot over medium heat. Once melted, add the turmeric and cumin, and stir for 1 minutes or until spices are fragrant.',
        num: 6
    },
    {
        title: 'Rice',
        desc: 'Add the rice and stir for 4 minutes to toast it. Add the chicken stock and a pinch of salt and pepper to season. Stir and bring to a boil, then reduce heat to a simmer, cover and cook for 15 minutes.',
        num: 7
    },
    {
        title: 'Rice',
        desc: 'After the rice is cooked and the water is absorbed, remove pan from the heat and wait 10-15 minutes before disturbing. Fluff gently with a fork.',
        num: 8
    },
    {
        title: 'Rice',
        desc: 'Finally, plate the chicken on top of the rice, then top with parsley and tomato',
        num: 9
    }
];
const guacInstruction = [{
    title: 'Guacamole',
    desc: 'In a medium bowl, combine the onion and lime juice, and season with salt and pepper.',
    num: 1
},
{
    title: 'Guacamole',
    desc: 'Cut the hard stem end off of the jalapeño and discard, then slice the chile in half lengthwise',
    num: 2
},
{
    title: 'Guacamole',
    desc: 'Chop the jalapeño as finely as you can and add to the bowl with the onion and lime juice.',
    num: 3
},
{
    title: 'Guacamole',
    desc: 'Cut the avocados in half lengthwise and pull the halves apart. Use your hands to squeeze the avocado flesh out into the bowl with the other ingredients, or scoop it out with a spoon.',
    num: 4
},
{
    title: 'Guacamole',
    desc: 'Using a fork, gently mash the avocados against the side of the bowl until they are mashed to your desired consistency, then stir them into the other ingredients until well combined. Taste and add more salt if desired.',
    num: 5
}];
export const recipeInstructions = [chickenInstruction, guacInstruction]