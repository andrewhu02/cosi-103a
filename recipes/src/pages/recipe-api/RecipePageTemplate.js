// takes a correctly formatted recipe object
// and returns a recipe page
import { Accordion, Stack, Card } from "react-bootstrap"
// TODO: image formatting
export default function RecipePage({recipe}) {
    
    return (
        <Card>
            <h1>{recipe.title}</h1>
            <img src={recipe.imageSrc} className="center scaled-image padded-image" />
            <p>{recipe.description}</p>
        <Accordion>
        <Accordion.Header>Ingredients</Accordion.Header>
         <Accordion.Body>
         <ul>
            {recipe.ingredients.map((ingredient) => (
                
                <li><Stack direction="horizontal"><p>{ingredient}</p>
                    <p>Nutritional facts</p>
                </Stack></li>
            ))}
            </ul>
        </Accordion.Body>
        </Accordion>
        <Accordion>
        <Accordion.Header>Instructions</Accordion.Header>
         <Accordion.Body>
            <ol>
                {recipe.cookingInstructions.map((step) => (
                    <li>{step}</li>
                ))}
            </ol>
            </Accordion.Body>
        </Accordion>
        </Card>
    )
}