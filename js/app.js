class Pokemon {


    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky() {
        let randomLuck = Math.random();
        return randomLuck < this.luck; // true si c'est vrai

    }

    attackPokemon(adversaire) {
        console.log(this.name + " inflige " + (this.attack - adversaire.defense) + " dégats à " + adversaire.name);
        adversaire.hp -= (this.attack - adversaire.defense);
        console.log(adversaire.name + " a maintenant " + adversaire.hp + " points de vie ! ");
    }

}

let pikaPika = new Pokemon("Pikatchu", 20, 8, 35, 0.4);
let drako = new Pokemon("Drakaufeu", 24, 6, 25, 0.6);


while (pikaPika.hp > 0 && drako.hp > 0) {

    if(pikaPika.isLucky()) {
        pikaPika.attackPokemon(drako);
    } else {
        console.log(">>>>>> Attaque ratée de la part de " + pikaPika.name);
    }

    if (drako.hp > 0 && drako.isLucky()) {
        drako.attackPokemon(pikaPika);
    } else {
        console.log(">>>>>> Attaque ratée de la part de " + drako.name);
    }

}

if(pikaPika.hp > 0) {
    console.log("PIKAAATTTCHHHHUUUUUUUUUUUUU vainceur !");
} else {
    console.log("DRAKKKKOOOOOOFEEEEUUUU vainceur !");
}