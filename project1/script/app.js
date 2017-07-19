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
  let turn=0;
  class charachterClass{
    constructor(name, hp, spellResist, ac){
      this.name=name;
      this.hp=hp;
      this.spellResist=spellResist;
      this.ac=ac;
      this.weaponAttack=0;
      this.weaponDmg=0;
    }//close constructor
    meleeAttack(){
      let attack =0+this.weaponAttack;
      let damage=0+this.weaponDmg;
      let dmgDoneToMonster=0;
      for (let i=0; i<2; i++){//loops through twice because the rogue can swing twice
        damage=0;//the damage needs to be reset to 0 for each swing
        attack=Math.floor(Math.random()*20)+1;
        if(attack>=monster1.ac){
          damage=Math.floor(Math.random()*4)+1
          if(attack>=18){//the rogue can score a critical hit if the attack is 18 or higher. This applies to each attack
            damage*=2;//the damage multiplier if a critical hit
            console.log("You scored a critical hit! You damage the monster for "+damage);
            dmgDoneToMonster=dmgDoneToMonster+damage;
            console.log(damage+" damage to monster on this swing");
          }else{
              console.log("You missed your chance at a critical hit!");
              console.log("Rogue hit the minotaur for "+damage);
              dmgDoneToMonster=dmgDoneToMonster+damage;
              console.log(damage+" damage to monster on this swing");
          }//close nested else
        }else{
          console.log("Rogue missed");
        }//close else
      }//close for loop
      monster1.hp-=dmgDoneToMonster;
      console.log(dmgDoneToMonster+" Total damage to monster this round");
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
      let attack=0;
      this.damage=0;
      this.damage=Math.floor(Math.random()*4)+1
      attack=Math.floor(Math.random()*20)+1;
      if(attack>=rogue.ac){
        console.log("The minotaur hit the rogue for "+ this.damage);
        rogue.hp-=this.damage;
      }else {
        console.log("The minotaur missed the rogue");
      }//close else
    }//close attack
  }//close monster class
  const rogue = new charachterClass('Galladin', 25, 10, 8);
  const monster1 = new monster ('minotaur', 5, 4, 10, 5, 2, 2);
  const battle=()=>{
    while(rogue.hp>0 && monster1.hp>0){
        rogue.meleeAttack();
        console.log("The minotaur has "+monster1.hp+" hit points left");
        monster1.attack();
        console.log("You have "+rogue.hp+" hit points left");
    }//close while loop
    console.log("Battle ended");
  }//close battle
  battle();
  const checkBattleWin=()=>{
    if(rogue.hp>0&&monster1.hp<=0){
      console.log("You have won the fight. What would you like to do next?");
      gameSequence();
    }else{
      console.log("You have perished at the hands of the evil monster. You will respawn back at the beginning area.");
      respawn();
    }//close else
  }//close checkBattleWin
  const gameSequence=()=>{
    const movement=()=>{
      console.log("You have movement points left");
    }
    //encounter
    //combat
    //loot
    turn++;
  }//close gameSequence
  class rooms{

  }
}//close dungeonGame
dungeonGame();
//items to add
//armor - leather adds 1 to ac
//armor - steel adds 2 to ac but -1 movement
//helm - adds 1 to ac
//The executioner axe - adds 2 damage and attack and 1 to rit range
//The Barber dagger - adds 2 damange and attack and 1 poison each round on one attack
//Earthshatter mace - adds 2 damage and attack and adds 1 ac
//Pantry protectors boots - adds 1 ac and 1 movement
//Skycutter sword - adds 2 damage and 1 to passive
//Mirrorball - adds 1 to spell damage and 2 to ac
//kithen defender - adds 2 spellResist
//raven-sword box - adds 1 bow and 2 sword damage and attack
//gazing demise - upgrades skeleton damage to 1-8 and ac of 9
//vigilance sword-dagger - adds 2 damage and -1 target ac
//quick draw belt - adds 3 engineering kits
//40 items or traps
  //4 strength potions -- adds 1 more damage roll to each swing
  //4 defense potions -- adds 4 ac for 1 combat
  //5 potions of healing -- restores hp to full can be used anytime
  //5 potions of restore -- restores special can be used anytime
  //2 adventurer spirits -- helps you search for treasure chest roll 1d4 50% chance to find
  //2 alchemists -- will sell you potions up to 2 for 1000gold each or 3000gold for a special restore
  //2 falling rocks trap -- does 10 damage
  //2 poison gas trap -- does 4 damage
  //2 acid spray trap -- does 4 damage
  //2 deadly blades traps -- does 8 damage
  //2 flame vent traps -- does 6 damage
  //6 random treasures from your level
  //2 dwarven smiths -- will forge ultimate item if not full restore
  //2 death -- death will take $4K or your life!
//monsters
  //level 1 -
    //Goblin - 3 special attack, 4 ac, 2hp, 5 iceResist, 2 fireResist, 6 lightningResist
    //dire rat - 5 speAttack, 4 ac, 3hp, 6 iceResist, 2 fireResist, 6 lightningResist
    //kobold - 4 special, 5ac, 3hp, 6 iceResist, 3 fireResist, 3 lightningResist
    //skeleton - 5 special, 4 ac, 3 hp, 6 iceResist, 2 fireResist, 2 lightningResist
    //minotaur - 5 special, 4ac, 2 hp, 5 iceResist, 2 fireResist, 2 lightningResist
  //Level 2 -
    //Ghoul - 5 special, 6 ac, 4 hp, 6 iceResist, 3 fireResist, 3 lightningResist
    //Orc - 6 special, 6 ac, 4 hp, 5 iceResist, 3 fireResist, 4 lightningResist
    //Gnoll - 8 special, 7 ac, 5 hp, 6 iceResist, 5 fireResist, 4 lightningResist
    //Giant Lizard - 5 special, 4 ac, 2 hp, 5 iceResist, 2 fireResist, 2 lightningResist
    //hobgoblin - 4 special, 5 ac, 3hp, 6 iceResist, 3 fireResist, 3 lightningResist
    //cage trap - gain 1 treasure but lose a turn - 1-3 looses 1 turn, 4-6 looses 2 turns.
  //Level 3 -
    //Zombie - 11 special, 10 ac, 8 hp, 8 iceResist, 3 fireResist, 99 lightningResist
    //Lizardfolk - 10 special, 8 ac, 6 hp, 9 iceResist, 6 fireResist, 5 lightningResist
    //Slide trap - gain 1 treasure and move to level 4 chamber
    //Ogre - 8 special, 9 ac, 6 hp, 8 iceResist, 4 fireResist, 5 lightningResist
    //Gargoyle - 7 special, 6 ac, 5 hp, 6 iceResist, 99 fireResist, 4 lightningResist
    //Evil Cleric - 10 special, 9 ac, 7 hp, 8 iceResist, 7 fireResist, 7 lightningResist
    //Werewolf - 9 special, 9 ac, 7hp, 7 iceResist, 8 fireResist, 9 lightningResist
    //Evil Rogue - 10 special, 9 ac, 7 hp, 8 iceResist, 7 fireResist, 7 lightningResist
    //Giant spider - 6 special, 6 ac, 4hp, 5 iceResist, 3 fireResist, 4 lightningResist
  // Level 4 -
    //Green Slime - 12 special, 11 ac, 10 hp, 11 iceResist, 6 fireResist, 99 lightningResist
    //Mummy - 11 special, 10 ac, 8 hp, 8 iceResist, 3 fireResist, 99 lightningResist
    //Drow - 10 special, 9 ac, 7 hp, 8 iceResist, 7 fireResist, 7 lightningResist
    //Troll - 9 special, 10 ac, 8 hp, 8 iceResist, 7 fireResist, 99 lightningResist
    //OWlbear - 10 special, 8 ac, 6 hp, 9 iceResist, 6 fireResist, 5 lightningResist
    //Duergar - 9 special, 9 ac, 7hp, 7 iceResist, 8 fireResist, 9 lightningResist
    //Hill Giant - 10 special, 11 ac, 9hp, 10 iceResist, 6 fireResist, 9 lightningResist
    //Cage trap - gain 1 treasure but lose a turn - 1-3 looses 1 turn, 4-6 looses 2 turns.
  //Level 5 -
    //Slide trap - gain 1 treasure and move to level 6 chamber
    //Gelatinous Cube - 12 special, 11 ac, 10 hp, 11 iceResist 99 fireResist, 6 lightningResist
    //Witch - 11 special, 11 ac, 9 hp, 5 iceResist, 10 fireResist, 10 lightningResist
    //Drider - 9 special, 10 ac, 8 hp, 8 iceResist, 7 fireResist, 99 lightningResist
    //Fire Giant - 10 special, 11 ac, 9 hp, 10 iceResist, 99 fireResist, 9 lightningResist
    //Black pudding - 99 special, 12 ac, 12 hp, 12 iceResist, 5 fireResist, 99 lightningResist
    //Vampire - 12 special, 10 ac, 8 hp, 9 iceResist, 10 fireResist, 10 lightningResist
    //Mind Flayer - 12 special, 10 ac, 8 hp, 9 iceResist, 10 fireResist, 10 lightningResist
  //Level 6 -
    //Blue Dragon - 99 special, 12 ac, 10 hp, 12 iceResist, 7 fireResist, 99 lightningResist
    //Evil Wizard - 99 special, 12 ac, 11 hp, 7 iceResist, 11 fireResist, 11 lightningResist
    //Black Dragon - 99 special, 12 ac, 10 hp, 12 iceResist, 7 fireResist, 99 lightningResist
    //Red Dragon - 99 special, 14 ac, 11 hp, 12 iceResist, 99 fireResist, 8 lightningResist
    //Purple Worm - 12 special, 11 ac, 10 hp, 12 iceResist, 8 fireResist, 6 lightningResist
    //Carrion Crawler - 12 special, 11 ac, 10 hp, 12 iceResist, 8 fireResist, 6 lightningResist
    //Dracolich - 99 special, 12 ac, 10 hp, 12 iceResist, 5 fireResist, 99 lightningResist

//Treasures
  //Level 1 -
    //2 sacks of gold worth 250
    //2 sacks of gold worth 500
    //magic sword - roll 2d6, 2-11 gives a +1 to attack and damage, 12 gives +2 worth 500
    //Secret Key - can move through Secret Door freeley worth 500
    //2 sacks of gold worth 750
    //1 sack of gold worth 1000
  //Level 2 -
    //Secret Door key - can move through secret door freeley worth 500
    //1 sack of gold worth 500
    //2 sacks of gold worth 1000
    //magic sword - roll 2d6, 2-9 gives +1, 10-12 gives +2
    //2 silver cups worth 1000
    //1 silver ring worth 2000
  //Level 3 -
    //1 Secred Door Card - can move through secret doors freely worth 500
    //ESP Medallion - can check monsters before fighting them
    //1 sack of gold worth 750
    //2 sacks of gold worth 1000
    //3 Silver cups worth 1000
    //3 Silver Rings worth 2000
    //3 gold cups worth 2500
    //2 gold rings worth 3000
  //Level 4 -
    //Secret Door Card - Can move freely past secret doors worth 500
    //2 Magic swords - roll 2d6, 2-8 gives +1, 9-12 gives +2
    //Crystal Ball - Can check a monster or treasure Card
    //1 sack of gold for 1000
    //1 silver cup worth 1000
    //2 silver rings worth 2000
    //2 gold cups worth 2500
    //2 gold rings worth 3000
    //2 Silver Coffers worth 4000
    //1 Huge Emerald worth 5000
    //2 Jade Idols worth 5000
    //1 Huge Sapphire worth 6000
  //Level 5 -
    //ESP Medallion - can check monster before fighting
    //1 Silver ring worth 2000
    //2 gold cups worth 2500
    //2 gold rings worth 3000
    //2 Silver Coffers worth 4000
    //2 Huge Emeralds worth 5000
    //2 Jade Idolsworth 5000
    //2 Huge Sapphires worth 6000
    //1 Silver Necklace worth 7000
    //1 Huge Ruby worth 8000
  //Levle 6 -
    //Magic Sword - Roll 2d6, 2-6 gives +1, 7-12 gives +2
    //Crystal Ball - can check monster and treasure
    //1 Silver Coffer worth 4000
    //2 Jade Idols worth 5000
    //2 Huge Emeralds worth 5000
    //1 Huge Sapphire worth 6000
    //1 Silver Necklace worth 7000
    //1Huge Ruby worth 8000
    //1 Gold Necklace worth 9000
    //1 Huge Diamond worth 10000
//Pets
  //Cougar - 12 hp, 10 ac, 1-8 damage, 10 spellResist
  //Pet Dragon - 15 hp, 12 ac, fireSpell, 12 spellResist
  //Skeleton Servant - 10 hp, 8 ac, 1-6 damage, 8 spellResist
//Advanced potions -
  //2 Potions of Regen - Restores all hp and abilities
  //2 Potions of seeing - Choose 1 from 3 treasures
  //2 Potions of Monster - Get 1 random monster as a Pet
  //2 Potions of Dragon - Gain a random Dragon Pet for 1 fight
  //Potion of Weaken - Reduce Monster by 1 level
  //Potion of Acid - Does 3 damage each round
  //Potion of teleport - can go back to start immediately
  //Potion of Speed - Move 3 times normal for 1 round
//Character Classes to add
  //Ranger - 25 hp, 8 ac, 10 spellResist, 1-6 damage, secret 1-3, crit 18-20: Ability 1 - Bear Trap - Trap Target and Fire 3 Range Attacks (Ignore AC): Ability 2 - Spirit Cat Companion - Cougar helps in battle and heals Ranger for 7 hp on arrival: Passive Ability - Bow Ranged Attack 1-4 before battle starts

  //Mage - 25 hp, 6 ac, 12 spellResist, see Passive ability for damage, 1-3 secret, crit 20: Ability 1 - Fireball does 6 damage if spellResist is broken then deal 2 burn damage each round (does not stack). No ac to break: Ability 2 - Lightning bolt does 7 damage if spellResist is broken then mage gets an improved crit buff of 13-17 for the battle: Ability 3 - Ice Blast does 5 damage if spellResist is broken then slow the target halving their damage to the mage: Ability 4 - Earth Armor the mage gets 2 ac and heals for 4 hp: Passive Ability - Magic Missile 1 damage if ac broken then add 1-4 damage

  //Necromancer - 20hp, 6 ac, 12 spellResist, 1-4 damage, secret 1-2, crit 20: Ability 1 - Poison Gas deals 3 damage now and 3 on targets turn: Ability 2 - Life Drain deals 5 damage and heals Necromance or pet for 5: Ability 3 - Corpse Explosion pet explodes for 5 damage if ac is broken deal another 3 damage: Passive Ability - Raise skeleton and life link, can take 1 turn to raise skeleton. Can split damage taken between skeleton and Necromance by 1/2

  //Palladin 30 hp, 10 ac, 8 spellResist, 1-8 damage, secret 1-2, crit 19-20: Ability 1 - Heal Palladin heals for 20 hp: Ability 2 - Shield Slam hit for 6 damage if ac is broken the target is stunned: Passive Abiliy - Thorns Aura deal 2 damage when damaged

  //Warrior 30 hp, 9 ac, 9 spellResist, 1-10 damage, secret 1-2, crit 19-20: Ability 1 - Double swing add 5 damage to attack after initial damage done: Ability 2 - Challenging Presence - Indimidating debuff reduces target ac by 1/2: Passive Ability - Life Steal - heal 1 hp for each successful hit which also works on double strike

  //Shadow Dancer 25 hp, 8 ac, 10 spellResist, 1-8 damage, secret 1-3, crit 18-20: Ability 1 - Phantasm Mind Control - Target hits itself with its own damage to a min of 4 and ignores ac: Ability 2 - Clone - When about to take damage ignore and reflect 2 damage: Ability 3 - Shatter Sword - Shadowdancers sword now explodes on hitfor +3 damage for remainder of combat: Passive Ability - Spell Siphon when a skill is used heal 2 hp

  //Engineer 25 hp, 9 ac, 9 spellResist, 1-6damage, secret 1-4, crit 17-20: Ability 1 - Gun Turret Kit - 5 damage and if break acadditional 2 damage: Ability 2 - Med Kit heal for 10: Ability 3 - Flame thrower Kit - Battle Buff +2 to his and damage: Passive Ability - Repair - use 1 turn to fix 2 kits or 1 if in combat

  //Lancer 25hp, 9 ac, 9 spellResist, 1-8 damage, secret 1-2, crit 18-20: Ability 1 - Jump attack - Pounce on target doing attack as damage a min of 4 ignoring target ac: Ability 2 - Sundering Strike - Piercing strike for 5 damage and removes 2 ac from target this attack ignores ac: Ability 3 - Counter - When damaged, counter hit 3 ignoring ac of target: Passive ability - Escape Death - If killed heal 8 hp once per fight

  //Rogue 25 hp, 8 ac, 10 spellResist, 1-4 damage X 2, secret 1-4, crit 18-20: Ability 1 in place of attack - Backstab - hit for 2d6 min 4 ignores ac: Ability 2 free action - Evasion - 50% dodge buff and heal rogue for 5: Passive Ability - Poison - After hit target takes 1 poison damage each round this is not for each attack


});
