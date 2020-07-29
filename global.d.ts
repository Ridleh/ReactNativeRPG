interface Player {
  id: number;
  name: string;
  health: number;
  mana: number;
  attack: number;
  defense: number;
  magic: number;
  resistance: number;
  image: any;
}

interface Enemy {
  id: number;
  name: string;
  health: number;
  mana: number;
  attack: number;
  defense: number;
  magic: number;
  resistance: number;
  image: any;
}

interface StatusEffect {
  type: string;
  target: string;
  duration: number;
}

interface BonusAction {
  target: string;
  damageORHeal: string;
  damageSource: string;
  ratio: number;
  statusEffect: StatusEffect[];
}

interface ability {
  target: string;
  damageType: string;
  ratio: number;
  numHits: number;
  damageORHeal: string;
  canCrit: boolean;
  bonusActions: BonusAction[];
}

interface Quest {
  title: string;
  enemies: Enemy[];
  background: any;
  EXPReward: number;
  giveLoot: number;
  description: string;
}
