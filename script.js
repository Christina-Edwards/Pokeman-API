// Accessing a level 1 property
const name = data.name;
const weight = data.weight;

// Accessing an object within the response
const sprites = data.sprites;

// Accessing a specific key in the object
const frontImage = data.sprites.front_default;

// Accessing an array within the response
const abilitiesArray = data.abilities;

// Accessing the first item of an array
const firstAbility = data.abilities[0];

// Accessing a key of a specific item in an array
const firstAbilityName = data.abilities[0].ability.name;
