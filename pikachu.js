// Sample response assumed to be stored in `data`
const name = data.name;                      // Level 1 property
const weight = data.weight;

const sprites = data.sprites;               // Object within response
const frontImage = data.sprites.front_default; // Specific key in object

const abilitiesArray = data.abilities;      // Array within response
const firstAbility = data.abilities[0];     // First item of array
const firstAbilityName = data.abilities[0].ability.name; // Key of specific item
