export type RecipeDetail = {
  vegetarian:               boolean;
  vegan:                    boolean;
  glutenFree:               boolean;
  dairyFree:                boolean;
  veryHealthy:              boolean;
  cheap:                    boolean;
  veryPopular:              boolean;
  sustainable:              boolean;
  lowFodmap:                boolean;
  weightWatcherSmartPoints: number;
  gaps:                     string;
  preparationMinutes:       number;
  cookingMinutes:           number;
  aggregateLikes:           number;
  healthScore:              number;
  creditsText:              string;
  sourceName:               string;
  pricePerServing:          number;
  extendedIngredients:      ExtendedIngredient[];
  id:                       number;
  title:                    string;
  readyInMinutes:           number;
  servings:                 number;
  sourceUrl:                string;
  image:                    string;
  imageType:                string;
  summary:                  string;
  cuisines:                 string[];
  dishTypes:                string[];
  diets:                    any[];
  occasions:                any[];
  winePairing:              WinePairing;
  instructions:             string;
  analyzedInstructions:     AnalyzedInstruction[];
  report:                   null;
  tips:                     Tips;
  openLicense:              number;
  suspiciousDataScore:      number;
  approved:                 number;
  unknownIngredients:       any[];
  userTags:                 any[];
  originalId:               null;
  spoonacularScore:         number;
  spoonacularSourceUrl:     string;
  license?:                 string;
}

export type AnalyzedInstruction = {
  name:  string;
  steps: Step[];
}

export type Step = {
  number:      number;
  step:        string;
  ingredients: Ent[];
  equipment:   Ent[];
  length:      Length;
}

export type Ent = {
  id:            number;
  name:          string;
  localizedName: string;
  image:         string;
}

export type Length = {
  number: number;
  unit:   string;
}

export type ExtendedIngredient = {
  id:           number;
  aisle:        string;
  image:        string;
  consistency:  Consistency;
  name:         string;
  nameClean:    string;
  original:     string;
  originalName: string;
  amount:       number;
  unit:         string;
  meta:         string[];
  measures:     Measures;
}

export type Consistency = "SOLID" | "LIQUID";

export type Measures = {
  us:     Metric;
  metric: Metric;
}

export type Metric = {
  amount:    number;
  unitShort: string;
  unitLong:  string;
}

export type Tips = {
  health:  string[];
  price:   string[];
  cooking: string[];
  green:   string[];
}

export type WinePairing = {
  pairedWines?:    any[];
  pairingText?:    string;
  productMatches?: any[];
}
