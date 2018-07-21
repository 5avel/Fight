// Create class ImprovedFighter

import Fighter from "./fighter";

export default class ImprovedFighter extends Fighter{
    constructor(name, power = 1, health = 100) {
        super(name, power, health);
    }

    doubleHit(enemy, point){
        super.hit(enemy, point*2);
    }
}