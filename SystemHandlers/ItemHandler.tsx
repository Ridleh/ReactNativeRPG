import { getArmorsMapArray } from "../AssetMaps/ArmorsMap";
import { getWeaponMapArray } from "../AssetMaps/WeaponsMap";

export function generateRandomWeapons(count: number): Item[] {
  let results: Item[] = [];
  const weaponsList: ImageMapData[] = getWeaponMapArray();
  for (var i = 0; i < count; i++) {
    const imageMap: ImageMapData = weaponsList[Math.round(Math.random() * 499)];
    let item: Item = {
      Health: Math.round(Math.random() * 400),
      Attack: Math.round(Math.random() * 400),
      Defence: Math.round(Math.random() * 400),
      Magic: Math.round(Math.random() * 400),
      Resistance: Math.round(Math.random() * 400),
      Mind: Math.round(Math.random() * 400),
      CritChance: Math.round(Math.random() * 100),
      EvasionChance: Math.round(Math.random() * 100),
      Speed: Math.round(Math.random() * 100),
      id: i,
      type: determineItemType(imageMap.name),
      image: imageMap.src,
    };
    results.push(item);
  }
  return results;
}

export function generateRandomArmors(count: number): Item[] {
  let results: Item[] = [];
  const armorsList: ImageMapData[] = getArmorsMapArray();
  for (var i = 0; i < count; i++) {
    const imageMap: ImageMapData = armorsList[Math.round(Math.random() * 499)];
    let item: Item = {
      Health: Math.round(Math.random() * 400),
      Attack: Math.round(Math.random() * 400),
      Defence: Math.round(Math.random() * 400),
      Magic: Math.round(Math.random() * 400),
      Resistance: Math.round(Math.random() * 400),
      Mind: Math.round(Math.random() * 400),
      CritChance: Math.round(Math.random() * 100),
      EvasionChance: Math.round(Math.random() * 100),
      Speed: Math.round(Math.random() * 100),
      id: i,
      type: determineItemType(imageMap.name),
      image: imageMap.src,
    };
    results.push(item);
  }
  return results;
}

function determineItemType(itemName: string): string {
  const types: string[] = [
    "arrow",
    "axe",
    "bolt",
    "book",
    "bow",
    "crossbow", //this wont reach because we check if "crossbow" includes "bow"
    "dagger",
    "hammer",
    "scythe",
    "shield",
    "spear",
    "staff",
    "sword",
    "helm",
    "shoulder",
    "chest",
    "pant",
    "belt",
    "boot",
    "necklace",
    "back",
    "bracer",
    "glove",
    "ring",
  ];
  for (let i = 0, l = types.length; i < l; i++) { //Array includes() method exists...
    if (itemName.toLowerCase().includes(types[i])) {
      switch (types[i]) {
        case "helm":
          return "helmet";
        case "belt": //change later
          return "pant";
        case "ring":
          return "necklace";
        case "back": //maybe change?
          return "cape"
        default:
          return types[i];
      }
    }
  }
  console.warn("item type not found for item:", itemName);
  return "";
}
