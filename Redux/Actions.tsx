import react from "react";
import Store from "./Store";

//honestly the existance of these methods are questionable
//why not import Store and use dispatch directly?
let Dispatch = Store.dispatch;

export const getState = () => {
  return Store.getState();
}

export const getCharacterState = () => {
  return Store.getState().Character;
}

export const getInventoryState = () => {
  return Store.getState().Inventory;
}
/*
export const updatePartyMember = (
  partyMember: Interfaces.PartyMemberInterface
) => {
  Dispatch({ type: "updatePartyMember", partyMember: partyMember });
  Dispatch({ type: "updateCharactersOwned", character: partyMember });
};

export const getState = () => {
  return Store.getState();
};

export const getPartyState = () => {
  return Store.getState().Party;
};

export const addCharacterToParty = (
  character: Interfaces.PartyMemberInterface
) => {
  Dispatch({ type: "addPartyMember", partyMember: character });
};

export const removePartyMemberFromParty = (
  partyMember: Interfaces.PartyMemberInterface
) => {
  Dispatch({ type: "removePartyMember", partyMember: partyMember });
};

export const addCharacterToCharactersOwnedList = (
  character: Interfaces.PartyMemberInterface
) => {
  Dispatch({ type: "addToCharactersOwned", character: character });
};

export const updateStateFromLocalStorage = (state: any) => {
  Dispatch({ type: "updateStateFromLocalState", state: state });
};

export const updateParty = (party: Interfaces.PartyMemberInterface[]) => {
  Dispatch({ type: "updateParty", party: party });
};

export const addWeapon = (weapon: Interfaces.ItemInterface) => {
  Dispatch({ type: "addWeapon", weapon: weapon });
};

export const removeWeapon = (weapon: Interfaces.ItemInterface) => {
  Dispatch({ type: "removeWeapon", weapon: weapon });
};

export const updateWeapon = (weapon: Interfaces.ItemInterface) => {
  Dispatch({ type: "updateWeapon", weapon: weapon });
};

export const addArmor = (armor: Interfaces.ItemInterface) => {
  Dispatch({ type: "addArmor", armor: armor });
};

export const removeArmor = (armor: Interfaces.ItemInterface) => {
  Dispatch({ type: "removeArmor", armor: armor });
};

export const updateArmor = (armor: Interfaces.ItemInterface) => {
  Dispatch({ type: "updateArmor", armor: armor });
};

export const addBlackMagicSpell = (spell: Interfaces.SpellInterface) => {
  Dispatch({ type: "addBlackMagicSpell", spell: spell });
};

export const removeBlackMagicSpell = (spell: Interfaces.SpellInterface) => {
  Dispatch({ type: "removeBlackMagicSpell", spell: spell });
};

export const updateBlackMagicSpell = (spell: Interfaces.SpellInterface) => {
  Dispatch({ type: "updateBlackMagicSpell", spell: spell });
};

export const addWhiteMagicSpell = (spell: Interfaces.SpellInterface) => {
  Dispatch({ type: "addWhiteMagicSpell", spell: spell });
};

export const removeWhiteMagicSpell = (spell: Interfaces.SpellInterface) => {
  Dispatch({ type: "removeWhiteMagicSpell", spell: spell });
};

export const updateWhiteMagicSpell = (spell: Interfaces.SpellInterface) => {
  Dispatch({ type: "updateWhiteMagicSpell", spell: spell });
};
*/
