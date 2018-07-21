// create two instances

// call fight function

import Fighter from "./fighter";
import fight from "./fight";
import ImprovedFighter from "./improvedFighter";

let fighter = new Fighter("X", 1, 1000);
let improvedFighter = new ImprovedFighter("Y", 1, 1000);

fight(fighter, improvedFighter, 10, 11, 12, 13);
