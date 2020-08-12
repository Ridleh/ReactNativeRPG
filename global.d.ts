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

interface Item {
  Health: number;
  Attack: number;
  Defence: number;
  Magic: number;
  Resistance: number;
  Mind: number;
  CritChance: number;
  EvasionChance: number;
  Speed: number;
  id: number;
  image: any;
  type: string;
}

interface ImageMapData{
  name: string;
  src: any
}

interface action {
  type: string;
  item: Item;
}

interface Inventory {
  Helmets: Item[];
  Shoulders: Item[];
  Chests: Item[];
  Pants: Item[];
  Boots: Item[];
  Necklaces: Item[];
  Capes: Item[];
  Bracers: Item[];
  Gloves: Item[];
  Weapons: Item[];
}
