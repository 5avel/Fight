// Create class Fighter(name, power, health)


export default class Fighter{
    constructor(name, power = 1, health = 100){
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage){
        this.health -= damage;
        console.log(`Neme:${this.name}; Health:${this.health}`);
    }

    hit(enemy, point){
        if(enemy instanceof Fighter){
            enemy.setDamage(point*this.power);
        }
        else{
            // exeption
        }
    }

    knockout(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("time is over");
                resolve();
            }, 500);
        });
    }

}