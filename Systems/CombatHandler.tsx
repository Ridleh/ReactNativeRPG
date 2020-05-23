import * as Interfaces from "../Interfaces/InterfaceIndex";
import {Types} from '../ItemsAndSpells/ItemTypes/Types'

export const useAction = (action: Interfaces.SpellInterface) => {
  action.Uses -= 1;
};

export const handlePhysicalDamageTEnemy = (
  enemy: any,
  attacker: Interfaces.PartyMemberInterface
) => {
  const damage = Math.floor(
    Math.pow(attacker.Attack, 1.8) / Math.pow(enemy.Defence, 0.5)
  );
  console.log(damage);
  enemy.Health -= damage;
};

export const handleMagicalDamageTEnemy = (
    enemy: any,
    attacker: Interfaces.PartyMemberInterface
  ) => {
    const damage = Math.floor(
      Math.pow(attacker.Magic, 1.65) / Math.pow(enemy.Defence, 0.5)
    );
    enemy.Health -= damage;
  };
