import react, { Component } from "react";
import * as StateActions from "../Redux/Actions";
import * as Interfaces from "../Interfaces/InterfaceIndex";
import { State } from "react-native-gesture-handler";

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

export const addCharacterToParty = (
  character: Interfaces.PartyMemberInterface
) => {
  var partySize = StateActions.getPartyState().Party.length;
  if (partySize <= 3) {
    StateActions.addCharacterToParty(character);
  } else {
    StateActions.addCharacterToCharactersOwnedList(character);
  }
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
