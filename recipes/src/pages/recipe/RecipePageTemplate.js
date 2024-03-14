// takes a correctly formatted recipe object
// and returns a recipe page
// TODO: image formatting
export default function RecipePage({recipe}) {
    return (
        <div>
            <h1>{recipe.title}</h1>
            <img src={recipe.imageSrc} className="center scaled-image padded-image" />
            <p>{recipe.description}</p>
        </div>
        
    )
}