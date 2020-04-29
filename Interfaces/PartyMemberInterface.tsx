import Item from './ItemIterface';
import Spell from './SpellIterface';

export default interface PartyMember{
    Name: string,
    ID: number,
    Level: number,
    Health: number,
    CurrentHealth: number,
    Mana: number,
    CurrentMana: number,
    Attack: number,
    Magic: number,
    Mind: number,
    Resistance: number,
    Defence: number,
    Luck: number,
    Speed: number,
    Items: Item[],
    Spells: Spell[]

}