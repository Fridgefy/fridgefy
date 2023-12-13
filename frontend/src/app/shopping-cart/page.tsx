"use client";

import { useState } from "react";
import { Icons } from "@/components/icons/Icons";
import SideBarListItem from "@/components/parts/SideBar/SideBarListItem";
import SideBarInput from "@/components/parts/SideBar/SideBarInput";
import RecipeAccordion from "@/components/parts/ShoppingList/RecipeAccordion";
import SideBarTitle from "@/components/parts/SideBar/SideBarTitle";

const tmpItems = [
  { name: "item-1" },
  { name: "item-2" },
  { name: "item-3" },
  { name: "item-4" },
  { name: "item-5" },
  { name: "item-6" },
  { name: "item-7" },
  { name: "item-8" },
  { name: "item-9" },
  { name: "item-10" },
  { name: "item-11" },
  { name: "item-12" },
  { name: "item-13" },
  { name: "item-14" },
  { name: "item-15" },
  { name: "item-16" },
];

const tmpBuyItems = [
  { name: "buy-1" },
  { name: "buy-2" },
  { name: "buy-3" },
  { name: "buy-4" },
  { name: "buy-5" },
  { name: "buy-6" },
  { name: "buy-7" },
  { name: "buy-8" },
  { name: "buy-9" },
  { name: "buy-10" },
];

const tempRecipes = [
  {
    id: 1,
    name: "Recipe 1",
    summary: `Julia Child's Ratatouille is a Mediterranean recipe that serves 6. This hor d'oeuvre has <b>199 calories</b>, <b>2g of protein</b>, and <b>17g of fat</b> per serving. For <b>92 cents per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista has 3 fans. Head to the store and pick up zucchini, garlic, bell peppers, and a few other things to make it today. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. With a spoonacular <b>score of 68%</b>, this dish is solid. <a href=\"https://spoonacular.com/recipes/julia-childs-ratatouille-1202455\">Julia Child's Ratatouille</a>, <a href=\"https://spoonacular.com/recipes/julia-childs-vichyssoise-648643\">Julia Child's Vichyssoise</a>, and <a href=\"https://spoonacular.com/recipes/julia-childs-eggplant-pizzas-1295381\">Julia Child's Eggplant Pizzas</a> are very similar to this recipe. `,
    image: "/images/placeholder.png",
    diets: "Vegan",
    intolerances: "Egg",
    instructions:
      "<ol><li>Prepare the crepes.</li><li>Place the shiitake mushrooms in a bowl. Cover them with water and let them soak for at least 1 hour.</li><li>Discard the stems and finely chop the mushrooms. Set aside.</li><li>Heat the oil in a skillet. Add the onion, garlic and bay leaves. Saute over low heat until the onions are translucent. Add the shiitake mushrooms, the fresh mushrooms, and the tarragon. Cook until the mushrooms are done.</li><li>Stir in the flour and mix well. Pour in the wine while continuing to stir.</li><li>Cook until the mixture thickens.</li><li>Add the tamari and cayenne to taste. Set the filling aside while you make the sauce.</li><li>Sauce: Dissolve the arrowroot or kudzu in the water.</li><li>Add the wine. Cook in small saucepan over high heat, stirring constantly, until the sauce thickens. This is not supposed to be very thick, so do not overcook it.</li><li>Add the tamari to taste and mix well.</li><li>To assemble: If the filling mixture has cooled down, heat it by returning the skillet to the stove and stirring the mixture over medium-high heat until it is hot.</li><li>Place about 1/4 cup of filling in the center of each crepe and roll up the crepes.</li><li>Place the crepes on individual serving plates. Pour some of the sauce over each crepe and serve.</li></ol>",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Prepare the crepes.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 2,
            step: "Place the shiitake mushrooms in a bowl. Cover them with water and let them soak for at least 1 hour.Discard the stems and finely chop the mushrooms. Set aside.",
            ingredients: [
              {
                id: 11238,
                name: "shiitake mushrooms",
                localizedName: "shiitake mushrooms",
                image: "shiitake-mushrooms.png",
              },
              {
                id: 11260,
                name: "mushrooms",
                localizedName: "mushrooms",
                image: "mushrooms.png",
              },
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image: "water.png",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
            length: {
              number: 60,
              unit: "minutes",
            },
          },
          {
            number: 3,
            step: "Heat the oil in a skillet.",
            ingredients: [
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png",
              },
            ],
          },
          {
            number: 4,
            step: "Add the onion, garlic and bay leaves.",
            ingredients: [
              {
                id: 2004,
                name: "bay leaves",
                localizedName: "bay leaves",
                image: "bay-leaves.jpg",
              },
              {
                id: 11215,
                name: "garlic",
                localizedName: "garlic",
                image: "garlic.png",
              },
              {
                id: 11282,
                name: "onion",
                localizedName: "onion",
                image: "brown-onion.png",
              },
            ],
            equipment: [],
          },
          {
            number: 10,
            step: "Add the tamari to taste and mix well.To assemble: If the filling mixture has cooled down, heat it by returning the skillet to the stove and stirring the mixture over medium-high heat until it is hot.",
            ingredients: [
              {
                id: 10116124,
                name: "tamari",
                localizedName: "tamari",
                image: "soy-sauce.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png",
              },
              {
                id: 404794,
                name: "stove",
                localizedName: "stove",
                image: "oven.jpg",
              },
            ],
          },
          {
            number: 11,
            step: "Place about 1/4 cup of filling in the center of each crepe and roll up the crepes.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
              {
                id: 0,
                name: "roll",
                localizedName: "roll",
                image: "dinner-yeast-rolls.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 12,
            step: "Place the crepes on individual serving plates.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 13,
            step: "Pour some of the sauce over each crepe and serve.",
            ingredients: [
              {
                id: 0,
                name: "sauce",
                localizedName: "sauce",
                image: "",
              },
            ],
            equipment: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Recipe 2",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/images/placeholder.png",
    diets: ["Vegan", "Ketogenic", "Gluten Free"],
    intolerances: ["Egg", "Peanut"],
    instructions:
      "<ol><li>Prepare the crepes.</li><li>Place the shiitake mushrooms in a bowl. Cover them with water and let them soak for at least 1 hour.</li><li>Discard the stems and finely chop the mushrooms. Set aside.</li><li>Heat the oil in a skillet. Add the onion, garlic and bay leaves. Saute over low heat until the onions are translucent. Add the shiitake mushrooms, the fresh mushrooms, and the tarragon. Cook until the mushrooms are done.</li><li>Stir in the flour and mix well. Pour in the wine while continuing to stir.</li><li>Cook until the mixture thickens.</li><li>Add the tamari and cayenne to taste. Set the filling aside while you make the sauce.</li><li>Sauce: Dissolve the arrowroot or kudzu in the water.</li><li>Add the wine. Cook in small saucepan over high heat, stirring constantly, until the sauce thickens. This is not supposed to be very thick, so do not overcook it.</li><li>Add the tamari to taste and mix well.</li><li>To assemble: If the filling mixture has cooled down, heat it by returning the skillet to the stove and stirring the mixture over medium-high heat until it is hot.</li><li>Place about 1/4 cup of filling in the center of each crepe and roll up the crepes.</li><li>Place the crepes on individual serving plates. Pour some of the sauce over each crepe and serve.</li></ol>",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Prepare the crepes.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 2,
            step: "Place the shiitake mushrooms in a bowl. Cover them with water and let them soak for at least 1 hour.Discard the stems and finely chop the mushrooms. Set aside.",
            ingredients: [
              {
                id: 11238,
                name: "shiitake mushrooms",
                localizedName: "shiitake mushrooms",
                image: "shiitake-mushrooms.png",
              },
              {
                id: 11260,
                name: "mushrooms",
                localizedName: "mushrooms",
                image: "mushrooms.png",
              },
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image: "water.png",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
            length: {
              number: 60,
              unit: "minutes",
            },
          },
          {
            number: 3,
            step: "Heat the oil in a skillet.",
            ingredients: [
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png",
              },
            ],
          },
          {
            number: 4,
            step: "Add the onion, garlic and bay leaves.",
            ingredients: [
              {
                id: 2004,
                name: "bay leaves",
                localizedName: "bay leaves",
                image: "bay-leaves.jpg",
              },
              {
                id: 11215,
                name: "garlic",
                localizedName: "garlic",
                image: "garlic.png",
              },
              {
                id: 11282,
                name: "onion",
                localizedName: "onion",
                image: "brown-onion.png",
              },
            ],
            equipment: [],
          },
          {
            number: 10,
            step: "Add the tamari to taste and mix well.To assemble: If the filling mixture has cooled down, heat it by returning the skillet to the stove and stirring the mixture over medium-high heat until it is hot.",
            ingredients: [
              {
                id: 10116124,
                name: "tamari",
                localizedName: "tamari",
                image: "soy-sauce.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png",
              },
              {
                id: 404794,
                name: "stove",
                localizedName: "stove",
                image: "oven.jpg",
              },
            ],
          },
          {
            number: 11,
            step: "Place about 1/4 cup of filling in the center of each crepe and roll up the crepes.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
              {
                id: 0,
                name: "roll",
                localizedName: "roll",
                image: "dinner-yeast-rolls.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 12,
            step: "Place the crepes on individual serving plates.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 13,
            step: "Pour some of the sauce over each crepe and serve.",
            ingredients: [
              {
                id: 0,
                name: "sauce",
                localizedName: "sauce",
                image: "",
              },
            ],
            equipment: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Recipe 3",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/images/placeholder.png",
    diets: ["Vegan", "Ketogenic", "Gluten Free"],
    intolerances: ["Egg", "Peanut"],
    instructions:
      "<ol><li>Prepare the crepes.</li><li>Place the shiitake mushrooms in a bowl. Cover them with water and let them soak for at least 1 hour.</li><li>Discard the stems and finely chop the mushrooms. Set aside.</li><li>Heat the oil in a skillet. Add the onion, garlic and bay leaves. Saute over low heat until the onions are translucent. Add the shiitake mushrooms, the fresh mushrooms, and the tarragon. Cook until the mushrooms are done.</li><li>Stir in the flour and mix well. Pour in the wine while continuing to stir.</li><li>Cook until the mixture thickens.</li><li>Add the tamari and cayenne to taste. Set the filling aside while you make the sauce.</li><li>Sauce: Dissolve the arrowroot or kudzu in the water.</li><li>Add the wine. Cook in small saucepan over high heat, stirring constantly, until the sauce thickens. This is not supposed to be very thick, so do not overcook it.</li><li>Add the tamari to taste and mix well.</li><li>To assemble: If the filling mixture has cooled down, heat it by returning the skillet to the stove and stirring the mixture over medium-high heat until it is hot.</li><li>Place about 1/4 cup of filling in the center of each crepe and roll up the crepes.</li><li>Place the crepes on individual serving plates. Pour some of the sauce over each crepe and serve.</li></ol>",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Prepare the crepes.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 2,
            step: "Place the shiitake mushrooms in a bowl. Cover them with water and let them soak for at least 1 hour.Discard the stems and finely chop the mushrooms. Set aside.",
            ingredients: [
              {
                id: 11238,
                name: "shiitake mushrooms",
                localizedName: "shiitake mushrooms",
                image: "shiitake-mushrooms.png",
              },
              {
                id: 11260,
                name: "mushrooms",
                localizedName: "mushrooms",
                image: "mushrooms.png",
              },
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image: "water.png",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
            length: {
              number: 60,
              unit: "minutes",
            },
          },
          {
            number: 3,
            step: "Heat the oil in a skillet.",
            ingredients: [
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png",
              },
            ],
          },
          {
            number: 4,
            step: "Add the onion, garlic and bay leaves.",
            ingredients: [
              {
                id: 2004,
                name: "bay leaves",
                localizedName: "bay leaves",
                image: "bay-leaves.jpg",
              },
              {
                id: 11215,
                name: "garlic",
                localizedName: "garlic",
                image: "garlic.png",
              },
              {
                id: 11282,
                name: "onion",
                localizedName: "onion",
                image: "brown-onion.png",
              },
            ],
            equipment: [],
          },
          {
            number: 10,
            step: "Add the tamari to taste and mix well.To assemble: If the filling mixture has cooled down, heat it by returning the skillet to the stove and stirring the mixture over medium-high heat until it is hot.",
            ingredients: [
              {
                id: 10116124,
                name: "tamari",
                localizedName: "tamari",
                image: "soy-sauce.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png",
              },
              {
                id: 404794,
                name: "stove",
                localizedName: "stove",
                image: "oven.jpg",
              },
            ],
          },
          {
            number: 11,
            step: "Place about 1/4 cup of filling in the center of each crepe and roll up the crepes.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
              {
                id: 0,
                name: "roll",
                localizedName: "roll",
                image: "dinner-yeast-rolls.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 12,
            step: "Place the crepes on individual serving plates.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 13,
            step: "Pour some of the sauce over each crepe and serve.",
            ingredients: [
              {
                id: 0,
                name: "sauce",
                localizedName: "sauce",
                image: "",
              },
            ],
            equipment: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Recipe 4",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/images/placeholder.png",
    diets: ["Vegan", "Ketogenic", "Gluten Free"],
    intolerances: ["Egg", "Peanut"],
    instructions:
      "<ol><li>Prepare the crepes.</li><li>Place the shiitake mushrooms in a bowl. Cover them with water and let them soak for at least 1 hour.</li><li>Discard the stems and finely chop the mushrooms. Set aside.</li><li>Heat the oil in a skillet. Add the onion, garlic and bay leaves. Saute over low heat until the onions are translucent. Add the shiitake mushrooms, the fresh mushrooms, and the tarragon. Cook until the mushrooms are done.</li><li>Stir in the flour and mix well. Pour in the wine while continuing to stir.</li><li>Cook until the mixture thickens.</li><li>Add the tamari and cayenne to taste. Set the filling aside while you make the sauce.</li><li>Sauce: Dissolve the arrowroot or kudzu in the water.</li><li>Add the wine. Cook in small saucepan over high heat, stirring constantly, until the sauce thickens. This is not supposed to be very thick, so do not overcook it.</li><li>Add the tamari to taste and mix well.</li><li>To assemble: If the filling mixture has cooled down, heat it by returning the skillet to the stove and stirring the mixture over medium-high heat until it is hot.</li><li>Place about 1/4 cup of filling in the center of each crepe and roll up the crepes.</li><li>Place the crepes on individual serving plates. Pour some of the sauce over each crepe and serve.</li></ol>",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Prepare the crepes.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 2,
            step: "Place the shiitake mushrooms in a bowl. Cover them with water and let them soak for at least 1 hour.Discard the stems and finely chop the mushrooms. Set aside.",
            ingredients: [
              {
                id: 11238,
                name: "shiitake mushrooms",
                localizedName: "shiitake mushrooms",
                image: "shiitake-mushrooms.png",
              },
              {
                id: 11260,
                name: "mushrooms",
                localizedName: "mushrooms",
                image: "mushrooms.png",
              },
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image: "water.png",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
            length: {
              number: 60,
              unit: "minutes",
            },
          },
          {
            number: 3,
            step: "Heat the oil in a skillet.",
            ingredients: [
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png",
              },
            ],
          },
          {
            number: 4,
            step: "Add the onion, garlic and bay leaves.",
            ingredients: [
              {
                id: 2004,
                name: "bay leaves",
                localizedName: "bay leaves",
                image: "bay-leaves.jpg",
              },
              {
                id: 11215,
                name: "garlic",
                localizedName: "garlic",
                image: "garlic.png",
              },
              {
                id: 11282,
                name: "onion",
                localizedName: "onion",
                image: "brown-onion.png",
              },
            ],
            equipment: [],
          },
          {
            number: 10,
            step: "Add the tamari to taste and mix well.To assemble: If the filling mixture has cooled down, heat it by returning the skillet to the stove and stirring the mixture over medium-high heat until it is hot.",
            ingredients: [
              {
                id: 10116124,
                name: "tamari",
                localizedName: "tamari",
                image: "soy-sauce.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png",
              },
              {
                id: 404794,
                name: "stove",
                localizedName: "stove",
                image: "oven.jpg",
              },
            ],
          },
          {
            number: 11,
            step: "Place about 1/4 cup of filling in the center of each crepe and roll up the crepes.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
              {
                id: 0,
                name: "roll",
                localizedName: "roll",
                image: "dinner-yeast-rolls.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 12,
            step: "Place the crepes on individual serving plates.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 13,
            step: "Pour some of the sauce over each crepe and serve.",
            ingredients: [
              {
                id: 0,
                name: "sauce",
                localizedName: "sauce",
                image: "",
              },
            ],
            equipment: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Recipe 5",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/images/placeholder.png",
    diets: ["Vegan", "Ketogenic", "Gluten Free"],
    intolerances: ["Egg", "Peanut"],
    instructions:
      "<ol><li>Prepare the crepes.</li><li>Place the shiitake mushrooms in a bowl. Cover them with water and let them soak for at least 1 hour.</li><li>Discard the stems and finely chop the mushrooms. Set aside.</li><li>Heat the oil in a skillet. Add the onion, garlic and bay leaves. Saute over low heat until the onions are translucent. Add the shiitake mushrooms, the fresh mushrooms, and the tarragon. Cook until the mushrooms are done.</li><li>Stir in the flour and mix well. Pour in the wine while continuing to stir.</li><li>Cook until the mixture thickens.</li><li>Add the tamari and cayenne to taste. Set the filling aside while you make the sauce.</li><li>Sauce: Dissolve the arrowroot or kudzu in the water.</li><li>Add the wine. Cook in small saucepan over high heat, stirring constantly, until the sauce thickens. This is not supposed to be very thick, so do not overcook it.</li><li>Add the tamari to taste and mix well.</li><li>To assemble: If the filling mixture has cooled down, heat it by returning the skillet to the stove and stirring the mixture over medium-high heat until it is hot.</li><li>Place about 1/4 cup of filling in the center of each crepe and roll up the crepes.</li><li>Place the crepes on individual serving plates. Pour some of the sauce over each crepe and serve.</li></ol>",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Prepare the crepes.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 2,
            step: "Place the shiitake mushrooms in a bowl. Cover them with water and let them soak for at least 1 hour.Discard the stems and finely chop the mushrooms. Set aside.",
            ingredients: [
              {
                id: 11238,
                name: "shiitake mushrooms",
                localizedName: "shiitake mushrooms",
                image: "shiitake-mushrooms.png",
              },
              {
                id: 11260,
                name: "mushrooms",
                localizedName: "mushrooms",
                image: "mushrooms.png",
              },
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image: "water.png",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
            length: {
              number: 60,
              unit: "minutes",
            },
          },
          {
            number: 3,
            step: "Heat the oil in a skillet.",
            ingredients: [
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png",
              },
            ],
          },
          {
            number: 4,
            step: "Add the onion, garlic and bay leaves.",
            ingredients: [
              {
                id: 2004,
                name: "bay leaves",
                localizedName: "bay leaves",
                image: "bay-leaves.jpg",
              },
              {
                id: 11215,
                name: "garlic",
                localizedName: "garlic",
                image: "garlic.png",
              },
              {
                id: 11282,
                name: "onion",
                localizedName: "onion",
                image: "brown-onion.png",
              },
            ],
            equipment: [],
          },
          {
            number: 10,
            step: "Add the tamari to taste and mix well.To assemble: If the filling mixture has cooled down, heat it by returning the skillet to the stove and stirring the mixture over medium-high heat until it is hot.",
            ingredients: [
              {
                id: 10116124,
                name: "tamari",
                localizedName: "tamari",
                image: "soy-sauce.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png",
              },
              {
                id: 404794,
                name: "stove",
                localizedName: "stove",
                image: "oven.jpg",
              },
            ],
          },
          {
            number: 11,
            step: "Place about 1/4 cup of filling in the center of each crepe and roll up the crepes.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
              {
                id: 0,
                name: "roll",
                localizedName: "roll",
                image: "dinner-yeast-rolls.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 12,
            step: "Place the crepes on individual serving plates.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 13,
            step: "Pour some of the sauce over each crepe and serve.",
            ingredients: [
              {
                id: 0,
                name: "sauce",
                localizedName: "sauce",
                image: "",
              },
            ],
            equipment: [],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Recipe 6",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/images/placeholder.png",
    diets: ["Vegan", "Ketogenic", "Gluten Free"],
    intolerances: ["Egg", "Peanut"],
    instructions:
      "<ol><li>Prepare the crepes.</li><li>Place the shiitake mushrooms in a bowl. Cover them with water and let them soak for at least 1 hour.</li><li>Discard the stems and finely chop the mushrooms. Set aside.</li><li>Heat the oil in a skillet. Add the onion, garlic and bay leaves. Saute over low heat until the onions are translucent. Add the shiitake mushrooms, the fresh mushrooms, and the tarragon. Cook until the mushrooms are done.</li><li>Stir in the flour and mix well. Pour in the wine while continuing to stir.</li><li>Cook until the mixture thickens.</li><li>Add the tamari and cayenne to taste. Set the filling aside while you make the sauce.</li><li>Sauce: Dissolve the arrowroot or kudzu in the water.</li><li>Add the wine. Cook in small saucepan over high heat, stirring constantly, until the sauce thickens. This is not supposed to be very thick, so do not overcook it.</li><li>Add the tamari to taste and mix well.</li><li>To assemble: If the filling mixture has cooled down, heat it by returning the skillet to the stove and stirring the mixture over medium-high heat until it is hot.</li><li>Place about 1/4 cup of filling in the center of each crepe and roll up the crepes.</li><li>Place the crepes on individual serving plates. Pour some of the sauce over each crepe and serve.</li></ol>",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Prepare the crepes.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 2,
            step: "Place the shiitake mushrooms in a bowl. Cover them with water and let them soak for at least 1 hour.Discard the stems and finely chop the mushrooms. Set aside.",
            ingredients: [
              {
                id: 11238,
                name: "shiitake mushrooms",
                localizedName: "shiitake mushrooms",
                image: "shiitake-mushrooms.png",
              },
              {
                id: 11260,
                name: "mushrooms",
                localizedName: "mushrooms",
                image: "mushrooms.png",
              },
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image: "water.png",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
            length: {
              number: 60,
              unit: "minutes",
            },
          },
          {
            number: 3,
            step: "Heat the oil in a skillet.",
            ingredients: [
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png",
              },
            ],
          },
          {
            number: 4,
            step: "Add the onion, garlic and bay leaves.",
            ingredients: [
              {
                id: 2004,
                name: "bay leaves",
                localizedName: "bay leaves",
                image: "bay-leaves.jpg",
              },
              {
                id: 11215,
                name: "garlic",
                localizedName: "garlic",
                image: "garlic.png",
              },
              {
                id: 11282,
                name: "onion",
                localizedName: "onion",
                image: "brown-onion.png",
              },
            ],
            equipment: [],
          },
          {
            number: 5,
            step: "Add the tamari to taste and mix well.To assemble: If the filling mixture has cooled down, heat it by returning the skillet to the stove and stirring the mixture over medium-high heat until it is hot.",
            ingredients: [
              {
                id: 10116124,
                name: "tamari",
                localizedName: "tamari",
                image: "soy-sauce.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png",
              },
              {
                id: 404794,
                name: "stove",
                localizedName: "stove",
                image: "oven.jpg",
              },
            ],
          },
          {
            number: 6,
            step: "Place about 1/4 cup of filling in the center of each crepe and roll up the crepes.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
              {
                id: 0,
                name: "roll",
                localizedName: "roll",
                image: "dinner-yeast-rolls.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 7,
            step: "Place the crepes on individual serving plates.",
            ingredients: [
              {
                id: 93732,
                name: "crepes",
                localizedName: "crepes",
                image: "crepes-isolated.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 8,
            step: "Pour some of the sauce over each crepe and serve.",
            ingredients: [
              {
                id: 0,
                name: "sauce",
                localizedName: "sauce",
                image: "",
              },
            ],
            equipment: [],
          },
        ],
      },
    ],
  },
];

export default function ShoppingCart() {
  const [fridgeItems, setFridgeItems] =
    useState<(typeof tmpItems)[number][]>(tmpItems);
  const [ingredients, setIngredients] =
    useState<(typeof tmpBuyItems)[number][]>(tmpBuyItems);
  const [recipes, setRecipes] =
    useState<(typeof tempRecipes)[number][]>(tempRecipes);

  // TODO: temporary workaround
  const handleFridgeItemOnClick = (name: string) => {
    const item = fridgeItems.find((item) => item.name === name);
    if (!item) return;

    const newFridgeItems = fridgeItems.filter((item) => item.name !== name);
    const newIngredients = [...ingredients, item];
    setFridgeItems(newFridgeItems);
    setIngredients(newIngredients);
  };

  // TODO: temporary workaround
  const handleIngredientOnClick = (name: string) => {
    const item = ingredients.find((item) => item.name === name);
    if (!item) return;

    const newFridgeItems = [...fridgeItems, item];
    const newIngredients = ingredients.filter((item) => item.name !== name);
    setFridgeItems(newFridgeItems);
    setIngredients(newIngredients);
  };

  // TODO: temporary workaround
  const removeRecipe = (id: number) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
    // TODO: remove ingredients that belongs to the recipe(should be related with id?)
  };

  // TODO: temporary workaround
  const addToFridge = (name: string) => {
    setFridgeItems([...fridgeItems, { name }]);
    setIngredients(
      ingredients.filter((ingredient) => ingredient.name !== name)
    );
  };
  const extractInstructions = (analyzedInstructions: any[]) => {
    return analyzedInstructions.flatMap((instruction) =>
      instruction.steps.map((step: { number: number; step: string }) => ({
        number: step.number,
        step: step.step,
      }))
    );
  };

  return (
    <div className="w-full h-[calc(100vh-4rem)] flex overflow-y-hidden">
      {/* left sidebar */}
      <div className="w-1/4 flex flex-col items-center border-r bg-popover p-4 overflow-y-auto">
        <SideBarTitle title="My Fridge" />
        <SideBarInput />
        <ul className="w-full p-6">
          {fridgeItems.map((item) => (
            <SideBarListItem
              key={item.name}
              label={item.name}
              buttonLabel={
                <Icons.plus className="w-4 h-4 text-black" strokeWidth={4} />
              }
              buttonOnClick={() => handleFridgeItemOnClick(item.name)}
            />
          ))}
        </ul>
      </div>

      {/* main contents */}
      <div className="w-1/2 px-8 py-12 overflow-y-auto">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          {recipes.map((recipe) => (
            <RecipeAccordion
              key={recipe.name}
              title={recipe.name}
              summary={recipe.summary}
              imageUrl={recipe.image}
              diets={recipe.diets}
              intolerance={recipe.intolerances}
              steps={recipe.analyzedInstructions[0].steps}
              handleDelete={() => removeRecipe(recipe.id)}
            />
          ))}
        </div>
      </div>

      {/* right sidebar */}
      <div className="w-1/4 flex flex-col items-center border-l bg-popover p-4 overflow-y-auto">
        <SideBarTitle title="Items to Buy" />
        <ul className="w-full p-6">
          {ingredients.map((item) => (
            <SideBarListItem
              key={item.name}
              label={item.name}
              buttonLabel={
                <Icons.plus className="w-4 h-4 text-black" strokeWidth={4} />
              }
              buttonOnClick={() => handleIngredientOnClick(item.name)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
