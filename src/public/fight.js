// create async function fight
import Fighter from "./fighter";
import ImprovedFighter from "./improvedFighter";

export default async function fight(fighter, improvedFighter, ...point){

    let isFight = true;
    let pointsCounter = point.length;
     while(isFight){
        if(pointsCounter <= 0)pointsCounter = point.length;
        pointsCounter--;
        
        if(fighter.health <= 0){
            await fighter.knockout()
                .then(()=> {isFight = false;})
                .catch(error=>{});
        }

        if(improvedFighter.health <= 0){
                await fighter.knockout()
                .then(()=> {isFight = false;})
                .catch(error=>{});
        }
        let thePoint = point[pointsCounter];
        fighter.hit(improvedFighter, thePoint);
        improvedFighter.doubleHit(fighter, thePoint);

    }

}