import Item from './ItemIterface';
import Spell from './SpellIterface';

export default interface PartyMember{
    Name: string,
    ID: string,
    Image: any //??
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
    Accuracy: number,
    Evasion: number,
    Items: Item[],
    Spells: Spell[],
    Experience: number
}