export default class BattleHandler {
  enemies: Enemy[];
  players: Player[];

  constructor(enemies: Enemy[], players: Player[]) {
    this.enemies = enemies;
    this.players = players;
  }

  getAbility = (skillNum: number): ability => {
    if (skillNum === 1) {
      return {
        target: "enemy",
        damageType: "magical",
        ratio: 0.6,
        numHits: 1,
        damageORHeal: "damage",
        canCrit: false,
        bonusActions: [
          {
            target: "self",
            damageORHeal: "heal",
            damageSource: "old",
            ratio: 1,
            statusEffect: [],
          },
        ],
      };
    } else if (skillNum === 2) {
      return {
        target: "enemy",
        damageType: "physical",
        ratio: 1.5,
        numHits: 1,
        damageORHeal: "damage",
        canCrit: true,
        bonusActions: [],
      };
    } else if (skillNum === 3) {
      return {
        target: "enemy",
        damageType: "magical",
        ratio: 0.45,
        numHits: 1,
        damageORHeal: "damage",
        canCrit: false,
        bonusActions: [
          {
            target: "enemy",
            damageORHeal: "none",
            damageSource: "none",
            ratio: 1,
            statusEffect: [
              {
                type: "resistanceDownMinor",
                target: "enemy",
                duration: 4,
              },
              {
                type: "doom",
                target: "enemy",
                duration: 1,
              },
            ],
          },
        ],
      };
    } else {
      return {
        target: "enemy",
        damageType: "physical",
        ratio: 0.75,
        numHits: 1,
        damageORHeal: "damage",
        canCrit: false,
        bonusActions: [
          {
            target: "self",
            damageORHeal: "none",
            damageSource: "none",
            ratio: 1,
            statusEffect: [
              {
                type: "armorUpMinor",
                target: "self",
                duration: 4,
              },
            ],
          },
        ],
      };
    }
  };

  handlePlayerAction = (skillNum: number): any[] => {
    const ability: ability = this.getAbility(skillNum);
    var damage: number;
    var player: Player = this.players[0];
    var enemy: Enemy = this.enemies[0];

    if (ability.damageType === "physical") {
      const attack: number = player.attack * ability.ratio;
      damage = Math.pow(attack, 1.8) / Math.pow(enemy.defense, 0.5);
      damage = Math.round(damage);
    } else {
      const attack: number = player.magic * ability.ratio;
      damage = Math.pow(attack, 1.65) / Math.pow(enemy.resistance, 0.5);
      damage = Math.round(damage);
    }
    enemy.health -= damage;
    if (ability.bonusActions.length >= 1) {
      for (var i = 0; i < ability.bonusActions.length; i++) {
        const action: BonusAction = ability.bonusActions[i];
        let actionDamage: number;
        if (action.damageSource === "old") {
          actionDamage = damage * action.ratio;
        } else if (action.damageSource === "none") {
          actionDamage = 0;
        } else {
          actionDamage = 100;
        }
        if (action.target === "self") {
          if (action.damageORHeal === "heal") {
            player.health += actionDamage;
          } else {
            player.health -= actionDamage;
          }
        } else {
        }

        if (action.statusEffect.length >= 1) {
          for (var p = 0; p < action.statusEffect.length; p++) {
            let status: StatusEffect = action.statusEffect[p];
            this.handleStatusEffect(status);
          }
        }
      }
    }
    return [this.enemies, this.players];
  };

  handleEnemyAction = (): any[] => {
    var player: Player = this.players[0];
    var enemy: Enemy = this.enemies[0];

    const enemyAttack: number = enemy.attack * 1.5;
    var enemyDamage = Math.pow(enemyAttack, 2) / Math.pow(player.defense, 0.84);
    enemyDamage = Math.round(enemyDamage);
    player.health -= enemyDamage;

    return [this.enemies, this.players];
  };

  handleStatusEffect = (status: StatusEffect): void => {
    var player: Player = this.players[0];
    var enemy: Enemy = this.enemies[0];

    if (status.type === "resistanceDownMinor") {
      if (status.target === "enemy") {
        enemy.resistance = Math.round(enemy.resistance * 0.75);
      } else {
        player.resistance = Math.round(player.resistance * 0.75);
      }
    } else if (status.type === "doom") {
      const chance: number = Math.random();
      console.log(chance);
      if (chance <= 0.12) {
        if (status.target === "enemy") {
          enemy.health = 0;
        } else {
          player.health = 0;
        }
      }
    } else if (status.type === "armorUpMinor") {
      if (status.target === "enemy") {
        enemy.defense = Math.round(enemy.defense * 1.15);
      } else {
        player.defense = Math.round(player.defense * 1.15);
      }
    }
  };
}
