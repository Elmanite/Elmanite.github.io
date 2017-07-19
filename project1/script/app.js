$(()=>{
//This game will start as a text based game that updates text on the DOM based on player selections in the DOM using choice buttons
//First I need to create a few character classes. To test the game I will start with just the Rogue and give it some stats
//Next I need to create a class of "ROOMS" the character can enter. The rooms will be so many movement points away from the character. Each room will have a special ability the character can use such as healing, searching for supplies etc.
//Next I need to creat classes of Monsters the player can encounter. The monsters need a special attack that will be used every other combat round on the character.
//Next build a combat system that goes in rounds and stops after each round giving the player a choice of regular attack, special ability attack or run away.
//Next build the sequence of play into the game. 1-Move, 2-Encounter, 3-Combat, 4-Loot.
//The end game should be checking the amount of loot based on the amount of other characters.
// monster damage is based on level. Level 1 = 1-4, Level 2=1-6, Level 3=1-8, Level 4=1-10, Level 5=1-12, level 6=1-14
const dungeonGame=()=>{
  let dmgDoneToPlayer=0;
  let dmgDoneToMonster=0;
  let attack=0;
  class $class{
    constructor(name, hp, spellResist, ac){
      this.name=name;
      this.hp=hp;
      this.spellResist=spellResist;
      this.ac=ac;
      this.damage=0;
      this.dmgDoneToMonster=0;
      this.strikes=2;
    }//close constructor
    meleeAttack(){
      this.damage=0;
      this.dmgDoneToMonster=0;
      for (let i=0; i<2; i++){
        this.damage=Math.floor(Math.random()*4)+1
        this.attack=Math.floor(Math.random()*20)+1;
        if(this.attack>=minotaur.ac){
          console.log("Rogue hit the minotaur for "+this.damage);
          if(this.attack>=18){
            this.damage*=2;
            console.log("You scored a critical hit! You damage the monster for "+this.damage);
          }else{
              console.log("You missed your chance at a critical hit!");
          }//close else
        }else{
          console.log("Rogue missed");
        }
        this.dmgDoneToMonster=this.dmgDoneToMonster+this.damage;
        minotaur.hp-=this.dmgDoneToMonster;
        console.log(this.dmgDoneToMonster+" total damage to monster");
      }//close for loop
    }//close melee
    secretDoor(){
      this.secret=Math.floor(Math.random()*4)+1;
      if(this.secret<5){
        console.log("You opened the secret door");
      }else{
        console.log("You know there is a secret door around here somewhere");
      }
    }//close secretDoor
  }//close $class
  class monster{
    constructor(monname, speAttack, ac, hp, iceResist, fireResist, lightningResist){
      this.monname=monname;
      this.speAttack=speAttack;
      this.ac=ac;
      this.hp=hp;
      this.iceResist=iceResist;
      this.fireResist=fireResist;
      this.lightningResist=lightningResist;
      this.specHit=false;
      this.damage=0;
    }//close constructor
    attack(){
      this.damage=0;
      this.damage=Math.floor(Math.random()*4)+1
      attack=Math.floor(Math.random()*20)+1;
      if(attack>=rogue.ac){
        console.log("The minotaur hit the rogue for "+ this.damage);
        rogue.hp-=this.damage;
      }else {
        console.log("The minotaur missed the rogue");
      }
    }//close attack
  }//close monster class
  const rogue = new $class('Galladin', 25, 10, 8);
  const minotaur = new monster ('minotaur', 5, 4, 10, 5, 2, 2);
  console.log(minotaur);
  const battle=()=>{
    while(rogue.hp>=0 && minotaur.hp>=0){
        rogue.meleeAttack();
        minotaur.attack();
        console.log("You have "+rogue.hp+" hit points left");
        console.log("The minotaur has "+minotaur.hp+" hit points left");
    }//close while loop
    console.log("Battle ended");
  }//close battle
  battle();
}//close dungeonGame
dungeonGame();

});
