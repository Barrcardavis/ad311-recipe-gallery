export default function RecipeGallery() {
  // ⭐ NORMAL TEST CASES (use these at the start of your video)
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
      image: "https://picsum.photos/300?1"
    },
    {
      id: 2,
      title: "Chicken Stir Fry",
      ingredients: ["Chicken", "Vegetables", "Soy Sauce"],
      image: "https://picsum.photos/300?2"
    },
    {
      id: 3,
      title: "Avocado Toast",
      ingredients: ["Bread", "Avocado", "Salt", "Pepper"],
      image: "https://picsum.photos/300?3"
    }
  ];

  return (
    <div className="gallery">
      {recipes.map(recipe => (
        <div className="card" key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <ul>
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
