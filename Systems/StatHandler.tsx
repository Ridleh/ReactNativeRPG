import react, { Component } from "react";
import * as StateActions from "../Redux/Actions";
import * as Interfaces from "../Interfaces/InterfaceIndex";

//This is largely a list of methods that handles work to be done 
//inbetween the "front"-end and the "back"-end

export const equipItem = (
  partyMember: Interfaces.PartyMemberInterface,
  item: Interfaces.ItemInterface
) => {
  item.EquippedBy = partyMember.ID;
  partyMember.Items.push(item);

  partyMember.Attack += item.AttackModifier;
  partyMember.Defence += item.DefenceModifier;
  partyMember.Health += item.HealthModifier;
  partyMember.Luck += item.LuckModifier;
  partyMember.Magic += item.MagicModifier;
  partyMember.Mind += item.MindModifier;
  partyMember.Resistance += item.ResistanceModifier;
  partyMember.Speed += item.SpeedModifier;

  StateActions.updatePartyMember(partyMember);
};

export const unequipItem = (
  partyMember: Interfaces.PartyMemberInterface,
  item: Interfaces.ItemInterface
) => {
  const index: number = partyMember.Items.indexOf(item);
  if (index !== 1) {
    item.EquippedBy = '';
    partyMember.Items.splice(index, 1);
  }

  partyMember.Attack -= item.AttackModifier;
  partyMember.Defence -= item.DefenceModifier;
  partyMember.Health -= item.HealthModifier;
  partyMember.Luck -= item.LuckModifier;
  partyMember.Magic -= item.MagicModifier;
  partyMember.Mind -= item.MindModifier;
  partyMember.Resistance -= item.ResistanceModifier;
  partyMember.Speed -= item.SpeedModifier;

  StateActions.updatePartyMember(partyMember);
};

export const isItemEquipped = (
  partyMember: Interfaces.PartyMemberInterface,
  item: Interfaces.ItemInterface
) => {
  /*
  for (let index of partyMember.Items) {
    if (index.Name === item.Name) {
      return true;
    }
  }
  return false;
  */
 return partyMember.ID === item.EquippedBy;
};

export const canEquipItem = (item: Interfaces.ItemInterface) => {
  /*
  const charactersOwned: Interfaces.PartyMemberInterface[] = StateActions.getState()
    .Party.CharactersOwned;
  let canEquip = true;
  charactersOwned.forEach((character) => {
    if (character.Items.includes(item)) {
      canEquip = false;
    }
  });
  return true;
  */
 return item.EquippedBy === '';
};

export const addCharacterToParty = (
  character: Interfaces.PartyMemberInterface
) => {
  var partySize = StateActions.getPartyState().Party.length;
  if (partySize <= 3) {
    StateActions.addCharacterToParty(character);
  } else {
    //StateActions.addCharacterToCharactersOwnedList(character);
    console.error("Error: Attempting to add to Party when Party is full");
  }
};

export const addCharacterToCharactersOwnedList = (
  character: Interfaces.PartyMemberInterface
) => {
  //Add verification checks
  StateActions.addCharacterToCharactersOwnedList(character);
};

export const removePartyMemberFromParty = (
  partyMember: Interfaces.PartyMemberInterface
) => {
  var gameState = StateActions.getState();
  var partySize = gameState.Party.Party.length;
  if (partySize <= 0) {
    console.error(
      "Error: Attempting to remove a party member when party size is zero"
    );
  }
  var party = gameState.Party.Party;
  if (party.includes(partyMember)) {
    StateActions.removePartyMemberFromParty(partyMember);
  } else {
    console.error(
      "Error: Attempting to remove a party member that does not exist in current party"
    );
  }
};

export const isPartyFull = () => {
  var gameState = StateActions.getState();
  var partyState = gameState.Party.Party;
  return partyState.length > 3;
};

export const SwapPartyMemberForCharacter = (
  partyMember: Interfaces.PartyMemberInterface,
  character: Interfaces.PartyMemberInterface
) => {
  //need validation
  //removePartyMemberFromParty(partyMember);
  //addCharacterToParty(character);
  const gameState = StateActions.getState();
  const partyState = gameState.Party.Party;
  const index = partyState.indexOf(partyMember);
  if(index === -1){
    console.error("Attempting to remove PartyMember " + partyMember.Name + " but PartyMember was not found in current Party")
  }
  partyState[index] = character;
  if(partyState.length > 4){
    
  }
  StateActions.updateParty(partyState);
};

export const equipSpell = (
  partyMember: Interfaces.PartyMemberInterface,
  spell: Interfaces.SpellInterface
) => {
  spell.EquippedBy = partyMember.ID
  partyMember.Spells.push(spell);

  /*
  partyMember.Attack += spell.AttackModifier;
  partyMember.Defence += .DefenceModifier;
  partyMember.Health += item.HealthModifier;
  partyMember.Luck += item.LuckModifier;
  partyMember.Magic += item.MagicModifier;
  partyMember.Mind += item.MindModifier;
  partyMember.Resistance += item.ResistanceModifier;
  partyMember.Speed += item.SpeedModifier;
  */

  StateActions.updatePartyMember(partyMember);
};

export const unequipSpell = (
  partyMember: Interfaces.PartyMemberInterface,
  spell: Interfaces.SpellInterface
) => {
  const index: number = partyMember.Spells.indexOf(spell);
  if (index !== 1) {
    spell.EquippedBy = '';
    partyMember.Spells.splice(index, 1);
  }

  /*
  partyMember.Attack -= item.AttackModifier;
  partyMember.Defence -= item.DefenceModifier;
  partyMember.Health -= item.HealthModifier;
  partyMember.Luck -= item.LuckModifier;
  partyMember.Magic -= item.MagicModifier;
  partyMember.Mind -= item.MindModifier;
  partyMember.Resistance -= item.ResistanceModifier;
  partyMember.Speed -= item.SpeedModifier;
  */

  StateActions.updatePartyMember(partyMember);
};

export const isSpellEquipped = (
  partyMember: Interfaces.PartyMemberInterface,
  spell: Interfaces.SpellInterface
) => {
  if(spell.EquippedBy === partyMember.ID){
    return true
  }
  return false;
};

export const canEquipSpell = (spell: Interfaces.SpellInterface) => {
  /*
  const charactersOwned: Interfaces.PartyMemberInterface[] = StateActions.getState()
    .Party.CharactersOwned;
  let canEquip = true;
  charactersOwned.forEach((character) => {
    if (character.Spells.includes(spell)) {
      canEquip = false;
    }
  });
  return canEquip;
  */
 return spell.EquippedBy === '';
};

export const giveEXP = (
  party: Interfaces.PartyMemberInterface[],
  EXP: number
) => {
  party.forEach((partyMember) => {
    const currentEXP: number = partyMember.Experience;
    const x: number = partyMember.Level;
    const EXPRequirement: number = 0.04 * Math.pow(x, 3) + 0.4 * Math.pow(x, 2) + 2 * x;

    if (Math.floor(currentEXP + EXP) >= EXPRequirement) {
      console.log(partyMember.Name + " has leveled up")
      partyMember.Attack += 35 * partyMember.Level + 84;
      partyMember.Defence += 35 * partyMember.Level + 84;
      partyMember.Health += 35 * partyMember.Level + 84;
      partyMember.CurrentHealth += 35 * partyMember.Level + 84;
      partyMember.Luck += 35 * partyMember.Level + 84;
      partyMember.Magic += 35 * partyMember.Level + 84;
      partyMember.Mind += 35 * partyMember.Level + 84;
      partyMember.Resistance += 35 * partyMember.Level + 84;
      partyMember.Speed += 35 * partyMember.Level + 84;
      partyMember.Level += 1;
    }
    partyMember.Experience = Math.floor((currentEXP + EXP) % EXPRequirement);
    console.log(partyMember.Experience)
    StateActions.updatePartyMember(partyMember);
  });
};

export const handleWeaponPurchase = (item: Interfaces.ItemInterface) => {
  var newItem = JSON.parse(JSON.stringify(item));
  var tempID: string = newItem.ID
  var numCopies: number = 1;
  var currentWeapons: Interfaces.ItemInterface[] = StateActions.getState().Inventory.Weapons;
  var weaponHasUniqueID: boolean = false;
  var currentWeaponIDs: string[] = [];
  console.log(currentWeapons);
  if(currentWeapons.length === 0){
    weaponHasUniqueID = true;
  }
  else{
    currentWeapons.forEach((weapon) => {
      currentWeaponIDs.push(weapon.ID);
    })
  }
  while( !weaponHasUniqueID ){
     if(currentWeaponIDs.includes(tempID)){
       //weaponHasUniqueID = true;
       tempID = newItem.ID + 'C' + numCopies;
       numCopies = numCopies +  1;
     }
     else{
       weaponHasUniqueID = true;
       newItem.ID = tempID;
     }
  }
  StateActions.addWeapon(newItem);
}

export const handleArmorPurchase = (item: Interfaces.ItemInterface) => {
  //odd wat to deep copy an object
  var newItem = JSON.parse(JSON.stringify(item));
  var tempID: string = newItem.ID
  var numCopies: number = 1;
  var currentArmors: Interfaces.ItemInterface[] = StateActions.getState().Inventory.Armors;
  var armorHasUniqueID: boolean = false;
  var currentArmorsIDs: string[] = [];
  if(currentArmors.length === 0){
    armorHasUniqueID = true;
  }
  else{
    currentArmors.forEach((armor) => {
      currentArmorsIDs.push(armor.ID);
    })
  }
  while( !armorHasUniqueID ){
     if(currentArmorsIDs.includes(tempID)){
       //weaponHasUniqueID = true;
       tempID = newItem.ID + 'C' + numCopies;
       numCopies = numCopies + 1;
     }
     else{
       armorHasUniqueID = true;
       newItem.ID = tempID;
     }
  }
  StateActions.addArmor(newItem);
}

export const handleBlackMagicSpellPurchase = (item: Interfaces.SpellInterface) => {
  var newItem = JSON.parse(JSON.stringify(item));
  var tempID: string = newItem.ID
  var numCopies: number = 1;
  var currentBlackMagicSpells: Interfaces.SpellInterface[] = StateActions.getState().Inventory.BlackMagicSpells;
  var spellHasUniqueID: boolean = false;
  var currentBlackMagicSpellsIDs: string[] = [];
  if(currentBlackMagicSpells.length === 0){
    spellHasUniqueID = true;
  }
  else{
    currentBlackMagicSpells.forEach((spell) => {
      currentBlackMagicSpellsIDs.push(spell.ID);
    })
  }
  while( !spellHasUniqueID ){
     if(currentBlackMagicSpellsIDs.includes(tempID)){
       //weaponHasUniqueID = true;
       tempID = newItem.ID + 'C' + numCopies;
       numCopies = numCopies + 1;
     }
     else{
       spellHasUniqueID = true;
       newItem.ID = tempID;
     }
  }
  StateActions.addBlackMagicSpell(newItem);
}

export const handleWhiteMagicSpellPurchase = (item: Interfaces.SpellInterface) => {
  var newItem = JSON.parse(JSON.stringify(item));
  var tempID: string = newItem.ID
  var numCopies: number = 1;
  var currentWhiteMagicSpells: Interfaces.SpellInterface[] = StateActions.getState().Inventory.WhiteMagicSpells;
  var spellHasUniqueID: boolean = false;
  var currentWhiteMagicSpellsIDs: string[] = [];
  if(currentWhiteMagicSpells.length === 0){
    spellHasUniqueID = true;
  }
  else{
    currentWhiteMagicSpells.forEach((weapon) => {
      currentWhiteMagicSpellsIDs.push(weapon.ID);
    })
  }
  while( !spellHasUniqueID ){
     if(currentWhiteMagicSpellsIDs.includes(tempID)){
       //weaponHasUniqueID = true;
       tempID = newItem.ID + 'C' + numCopies;
       numCopies = numCopies + 1;
     }
     else{
       spellHasUniqueID = true;
       newItem.ID = tempID;
     }
  }
  StateActions.addWhiteMagicSpell(newItem);
}
