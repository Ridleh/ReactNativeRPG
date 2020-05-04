import react, { Component } from "react";
import * as StateActions from "../Redux/Actions";
import * as Interfaces from "../Interfaces/InterfaceIndex";

export const equipItem = (
  partyMember: Interfaces.PartyMemberInterface,
  item: Interfaces.ItemInterface
) => {
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
  for (let index of partyMember.Items) {
    if (index.Name === item.Name) {
      return true;
    }
  }
  return false;
};

export const canEquipItem = (item : Interfaces.ItemInterface) => {
  const charactersOwned: Interfaces.PartyMemberInterface[] = StateActions.getState().Party.CharactersOwned;
  let canEquip = true;
  charactersOwned.forEach(character => {
    if(character.Items.includes(item)){
      canEquip = false;
    }
  })
  return true;
}

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
  removePartyMemberFromParty(partyMember);
  addCharacterToParty(character);
};

export const equipSpell = (
  partyMember: Interfaces.PartyMemberInterface,
  spell: Interfaces.SpellInterface
) => {
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
  for (let index of partyMember.Spells) {
    if (index.Name === spell.Name) {
      return true;
    }
  }
  return false;
};

export const canEquipSpell = (spell : Interfaces.SpellInterface) => {
  const charactersOwned: Interfaces.PartyMemberInterface[] = StateActions.getState().Party.CharactersOwned;
  let canEquip = true;
  charactersOwned.forEach(character => {
    if(character.Spells.includes(spell)){
      canEquip = false;
    }
  })
  return true;
}
