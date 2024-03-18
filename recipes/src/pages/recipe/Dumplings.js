import dumplings from '../../img/food/soup_dumplings.jpg';
import '../../App.css';
import React from 'react';
import RecipeStep from '../recipe-api/RecipeStep';

export const dumplingsInstructions = [
  {
    title: 'Prepare Aspic',
    desc: 'In a small pot, add pork skin/bones and cover with cold water. Bring to a rolling boil, then drain and rinse the bones and skin to remove impurities.',
    num: 1,
  },
  {
    title: 'Cook Aspic',
    desc: 'Rinse the pot and re-add ingredients, then add 4 cups of water along with the ginger, scallion, and wine. Bring to a boil and reduce the heat to low, then cover and simmer for 2 hours.',
    num: 2,
  },
  {
    title: 'Strain and Refrigerate',
    desc: 'Turn off the heat, allow the soup to cool, and strain the liquid into a bowl. Store or eat the leftover ingredients. Once the liquid is completely cooled, cover and refrigerate overnight to make an aspic.',
    num: 3,
  },
  {
    title: 'Prepare Dough',
    desc: 'In a mixing bowl, add the flour and warm water 1 tablespoon at a time. Work and knead the dough for 15-20 minutes. The dough should be very soft and smooth. Cover with a cloth and let it rest for 30 minutes.',
    num: 4,
  },
  {
    title: 'Assemble Dumplings',
    desc: 'Lightly dust a clean work surface with flour and roll the dough into a long cylinder/cigar, about an inch in diameter. Cut the dough into small equal pieces weighing about 11 grams each. Roll out each piece into a round disc about 3 – 3 ¼ inches in diameter.',
    num: 5,
  },
  {
    title: 'Prepare Filling',
    desc: 'Take your ground pork and put it in the food processor. Pulse for 30-60 seconds until the pork resembles paste. In a mixing bowl, add the pork and all the rest of the ingredients except the aspic. Whip ingredients together with chopsticks thoroughly for 2 minutes, until everything is well combined into a light paste.',
    num: 6,
  },
  {
    title: 'Add Aspic to Filling',
    desc: 'Gently fold in the aspic without overmixing. Cover and refrigerate until ready. If you\'re ready now, put the bowl in the freezer for 15 minutes to make the filling firmer and easier to work with.',
    num: 7,
  },
  {
    title: 'Shape Dumplings',
    desc: 'Lightly dust a clean work surface with flour. Take each round disc of dough and add about 1 tablespoon of filling to the center. Pleat the edges together to form a dumpling. Make sure to seal the edges well.',
    num: 8,
  },
  {
    title: 'Steam Dumplings',
    desc: 'Place the dumplings in a bamboo steamer lined with a cheesecloth. Fill the lower part of a metal steamer pot with water and bring it to a boil. Put the bamboo steamer in the top part, cover with the bamboo steamer lid, and steam over high heat for 8 minutes.',
    num: 9,
  },
  {
    title: 'Serve',
    desc: 'To eat, place the dumpling in a soup spoon and handle with chopsticks in the other hand. Enjoy!',
    num: 10,
  },
];

const Dumplings = () => {
  return (
    <div>
      <h1>Soup Dumplings</h1>
      <div className="container">
        <div className="upper-column1">
          <h5 className="subheader">Xiao Long Bao - Soup Dumplings</h5>
          <p className="recipe-description">Xiao Long Bao, also known as soup dumplings, is a delectable Chinese dim sum dish renowned for its delicate and savory appeal. These small, steamed dumplings originate from the Jiangnan region of China and are particularly associated with Shanghai.</p>
          <p className="recipe-description">The magic of Xiao Long Bao lies within its thin, translucent dough that encases a flavorful mixture of minced pork, aromatics, and a rich, savory broth. What sets these dumplings apart is the unique method of incorporating a gelatinized meat broth into the filling, which turns into a luscious, savory soup during the steaming process.</p>
          <p className="recipe-description">Traditionally served with a side of black vinegar and thin julienned ginger, Xiao Long Bao is not just a dish; it's an experience. The careful balance of flavors, the rich broth surprise, and the artful craftsmanship involved in creating each dumpling make Xiao Long Bao a cherished and globally celebrated culinary delight.</p>
        </div>
        <div className="upper-column2">
          <img src={dumplings} alt="Sample Recipe" className="center scaled-image padded-image" />
        </div>
      </div>
      <div className="container">
        <div className="column1">
          <h2 className="subheader">Ingredients</h2>
          <h4>Aspic Ingredients</h4>
          <ul>
            <li>1/2 lb pork skin, cut into 1" strips</li>
            <li>1 lb pork neck bones, with meat still on</li>
            <li>2 slices ginger</li>
            <li>1 scallion, cut into 3 pieces</li>
            <li>1 tablespoon shaoxing cooking wine</li>
          </ul>
          <h4>Dough Ingredients</h4>
          <ul>
            <li>1 cup all-purpose flour</li>
            <li>6 tbsp warm water</li>
          </ul>
          <h4>Filling</h4>
          <ul>
            <li>1 lb ground pork (70% lean, 30% fat)</li>
            <li>2 tablespoons shaoxing cooking wine</li>
            <li>3/4 tsp salt</li>
            <li>1/2 tsp sesame oil</li>
            <li>3/4 tsp sugar</li>
            <li>3 tsp light soy sauce</li>
            <li>3 tablespoons water</li>
            <li>Pinch of ground white pepper</li>
            <li>1 tablespoon minced ginger</li>
            <li>1 cup of aspic, divided into 1/2" pieces</li>
          </ul>
        </div>
        <div className="column2">
          <h2>Cooking Instructions</h2>
          {dumplingsInstructions.map((step) => (
            <RecipeStep key={step.num} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dumplings;
