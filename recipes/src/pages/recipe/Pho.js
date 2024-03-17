import pho from '../../img/food/pho.jpg';
import '../../App.css';
import React from 'react';
import RecipeStep from '../recipe-api/RecipeStep';

export const phoInstructions = [
  {
    title: 'Preparation and Broth',
    desc: [
      'Gather all ingredients.',
    ],
    num: 1,
  },
  {
    title: '',
    desc: [
      'Preheat the oven to 425 degrees F (220 degrees C).',
    ],
    num: 2,
  },
  {
    title: '',
    desc: [
      'Place beef bones on a baking sheet and roast in the preheated oven until browned, about 1 hour.',
    ],
    num: 3,
  },
  {
    title: '',
    desc: [
      'Place onion halves on a second baking sheet and roast on another rack until blackened and soft, about 45 minutes.',
    ],
    num: 4,
  },
  {
    title: '',
    desc: [
      'Transfer beef bones and onion halves to a large stockpot. Add ginger, salt, star anise, fish sauce, and 4 quarts water; bring to a boil. Reduce heat to low and simmer for 6 to 10 hours.',
    ],
    num: 5,
  },
  {
    title: '',
    desc: [
      'Strain the broth into a saucepan and set aside.',
    ],
    num: 6,
  },
  {
    title: 'Preparing Rice Noodles',
    desc: [
      'Place rice noodles in a large bowl filled with room temperature water. Let soak for 1 hour. Drain.',
    ],
    num: 7,
  },
  {
    title: '',
    desc: [
      'When noodles have soaked for 1 hour, heat up the reserved broth by bringing it to a simmer.',
    ],
    num: 8,
  },
  {
    title: '',
    desc: [
      'Bring a large pot of water to a boil. Cook the noodles in the boiling water for 1 minute. Drain.',
    ],
    num: 9,
  },
  {
    title: 'Assembling and Serving',
    desc: [
      'Divide noodles among 4 serving bowls; top with sirloin, cilantro, and green onion.',
    ],
    num: 10,
  },
  {
    title: '',
    desc: [
      'Ladle hot broth over the top. Stir and let sit until beef is partially cooked and no longer pink, 1 to 2 minutes.',
    ],
    num: 11,
  },
  {
    title: '',
    desc: [
      'Serve with bean sprouts, Thai basil, lime wedges, hoisin sauce, and chile-garlic sauce on the side.',
    ],
    num: 12,
  },
];


const Pho = () => {
  return (
    <div>
      <h1>Pho</h1>
      <div className="container">
        <div className="upper-column1">
          <p className="recipe-description">Vietnamese pho is all about the broth! In this authentic recipe, beef bones, fish sauce, star anise, and ginger simmer for at least 6 hours, creating a complex, aromatic broth that may not be quick, but it's certainly delicious. The flavorful broth is ladled over rice noodles and thinly sliced beef and topped with fresh garnishes.</p>
          <h5 className="subheader">What is Pho?</h5>
          <p className="recipe-description">Pho is one of the most popular dishes in Vietnam, although there are a lot more to the cuisine of this beautiful South East Asian country than the famous banh mi, pho, or Vietnamese coffe. Pho is a soup consisting of bone broth, rice noodles, thinly-sliced meat (in this recipe, it's beef), and fresh garnishes.</p>
          <h5 className="subheader">Where did Pho originate from?</h5>
          <p className="recipe-description">As with many foods, the origins of pho are unknown. It is believed to have been created in northern Vietnam in the early 20th century. It gained popularity in many countries after the Vietnam War.</p>
        </div>
        <div className="upper-column2">
          <img src={pho} alt="Sample Recipe" className="center scaled-image padded-image" />
        </div>
      </div>
      <div className="container">
        <div className="column1">
          <h2 className="subheader">Ingredients</h2>
          <ul>
            <li>4 pounds beef soup bones (shank and knee)</li>
            <li>1 medium onion, unpeeled and cut in half</li>
            <li>5 slices fresh ginger</li>
            <li>1 tablespoon salt</li>
            <li>2 pods star anise</li>
            <li>2 ½ tablespoons fish sauce</li>
            <li>4 quarts water</li>
            <li>1 (8 ounce) package dried rice noodles</li>
            <li>1 ½ pounds beef top sirloin, thinly sliced</li>
            <li>½ cup chopped cilantro</li>
            <li>1 tablespoon chopped green onion</li>
            <li>1 ½ cups bean sprouts</li>
            <li>1 bunch Thai basil</li>
            <li>1 medium lime, cut into 4 wedges</li>
            <li>¼ cup hoisin sauce (Optional)</li>
            <li>¼ cup chile-garlic sauce (such as Sriracha) (Optional)</li>
          </ul>
        </div>
        <div className="column2">
          <h2 className="subheader">Cooking Instructions</h2>
          {phoInstructions.map((step) => (
            <RecipeStep key={step.num} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pho;
