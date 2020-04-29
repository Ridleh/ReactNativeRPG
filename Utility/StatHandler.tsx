import react, { Component } from "react";
import Store from "../Redux/Store";
import * as StateActions from "../Redux/Actions";
import * as Interfaces from "../Interfaces/InterfaceIndex";

export function equipItem(
  partyMember: Interfaces.PartyMemberInterface,
  item: Interfaces.ItemInterface
) {
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
}

export function unequipItem(
  partyMember: Interfaces.PartyMemberInterface,
  item: Interfaces.ItemInterface
) {
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
}

export function isItemEquipped(
  partyMember: Interfaces.PartyMemberInterface,
  item: Interfaces.ItemInterface
) {
  for (let index of partyMember.Items) {
    if (index.Name === item.Name) {
      return true;
    }
  }
  return false;
}
