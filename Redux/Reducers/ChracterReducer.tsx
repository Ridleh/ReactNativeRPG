import { getImageFromFrameBackgroundsMap } from "../../AssetMaps/FrameBackgroundsMap";
import { Action } from "redux";

const updateStateFromLocalStorage: string = "updateStateFromLocalStorage";
const equipHelmet: string = "equipHelmet";
const equipShoulder: string = "equipShoulder";
const equipChest: string = "equipChest";
const equipPant: string = "equipPant";
const equipBoot: string = "equipBoot";
const equipNecklace: string = "equipNecklace";
const equipCape: string = "equipCape";
const equipBracer: string = "equipBracer";
const equipGlove: string = "equipGlove";
const equipWeapon: string = "equipWeapon";

const unequipHelmet: string = "unequipHelmet";
const unequipShoulder: string = "unequipShoulder";
const unequipChest: string = "unequipChest";
const unequipPant: string = "unequipPant";
const unequipBoot: string = "unequipBoot";
const unequipNecklace: string = "unequipNecklace";
const unequipCape: string = "unequipCape";
const unequipBracer: string = "unequipBracer";
const unequipGlove: string = "unequipGlove";
const unequipWeapon: string = "unequipWeapon";
// ^ import instead?

interface Character {
  character: Player;
  level: number;
  gold: number;
  experience: number;
  equippedHelmet: Item;
  equippedShoulder: Item;
  equippedChest: Item;
  equippedPant: Item;
  equippedBoot: Item;
  equippedNecklace: Item;
  equippedCape: Item;
  equippedBracer: Item;
  equippedGlove: Item;
  equippedWeapon: Item;
}

interface action {
  type: string;
  item: Item;
}

const characterState = {
  level: 1,
  gold: 0,
  experience: 0,
  character: {
    id: 1, //do i need?
    name: "",
    health: 120,
    mana: 50,
    attack: 8,
    defense: 7,
    magic: 7,
    resistance: 7,
    image: null,
  },
  equippedHelmet: {
    Health: 0,
    Attack: 0,
    Defence: 0,
    Magic: 0,
    Resistance: 0,
    Mind: 0,
    CritChance: 0,
    EvasionChance: 0,
    Speed: 0,
    id: 0,
    image: getImageFromFrameBackgroundsMap("helm_background.png"),
    type: "Helmet",
  },
  equippedShoulder: {
    Health: 0,
    Attack: 0,
    Defence: 0,
    Magic: 0,
    Resistance: 0,
    Mind: 0,
    CritChance: 0,
    EvasionChance: 0,
    Speed: 0,
    id: 0,
    image: getImageFromFrameBackgroundsMap("shoulder_background.png"),
    type: "Shoulder",
  },
  equippedChest: {
    Health: 0,
    Attack: 0,
    Defence: 0,
    Magic: 0,
    Resistance: 0,
    Mind: 0,
    CritChance: 0,
    EvasionChance: 0,
    Speed: 0,
    id: 0,
    image: getImageFromFrameBackgroundsMap("chest_background.png"),
    type: "Chest",
  },
  equippedPant: {
    Health: 0,
    Attack: 0,
    Defence: 0,
    Magic: 0,
    Resistance: 0,
    Mind: 0,
    CritChance: 0,
    EvasionChance: 0,
    Speed: 0,
    id: 0,
    image: getImageFromFrameBackgroundsMap("pants_background.png"),
    type: "Pant",
  },
  equippedBoot: {
    Health: 0,
    Attack: 0,
    Defence: 0,
    Magic: 0,
    Resistance: 0,
    Mind: 0,
    CritChance: 0,
    EvasionChance: 0,
    Speed: 0,
    id: 0,
    image: getImageFromFrameBackgroundsMap("boots_background.png"),
    type: "Boot",
  },
  equippedNecklace: {
    Health: 0,
    Attack: 0,
    Defence: 0,
    Magic: 0,
    Resistance: 0,
    Mind: 0,
    CritChance: 0,
    EvasionChance: 0,
    Speed: 0,
    id: 0,
    image: getImageFromFrameBackgroundsMap("neck_background.png"),
    type: "Necklace",
  },
  equippedCape: {
    Health: 0,
    Attack: 0,
    Defence: 0,
    Magic: 0,
    Resistance: 0,
    Mind: 0,
    CritChance: 0,
    EvasionChance: 0,
    Speed: 0,
    id: 0,
    image: getImageFromFrameBackgroundsMap("back_background.png"),
    type: "Cape",
  },
  equippedBracer: {
    Health: 0,
    Attack: 0,
    Defence: 0,
    Magic: 0,
    Resistance: 0,
    Mind: 0,
    CritChance: 0,
    EvasionChance: 0,
    Speed: 0,
    id: 0,
    image: getImageFromFrameBackgroundsMap("bracers_background.png"),
    type: "Bracer",
  },
  equippedGlove: {
    Health: 0,
    Attack: 0,
    Defence: 0,
    Magic: 0,
    Resistance: 0,
    Mind: 0,
    CritChance: 0,
    EvasionChance: 0,
    Speed: 0,
    id: 0,
    image: getImageFromFrameBackgroundsMap("gloves_background.png"),
    type: "Glove",
  },
  equippedWeapon: {
    Health: 0,
    Attack: 0,
    Defence: 0,
    Magic: 0,
    Resistance: 0,
    Mind: 0,
    CritChance: 0,
    EvasionChance: 0,
    Speed: 0,
    id: 0,
    image: getImageFromFrameBackgroundsMap("trinket_background.png"),
    type: "Weapon",
  },
};

//Pain. Just pain.
export default function inventoryReducer(
  state: Character = characterState,
  action: action
) {
  switch (action.type) {
    case equipHelmet:
      return {
        ...state,
        equippedHelmet: action.item,
      };
    case equipShoulder:
      return {
        ...state,
        equippedShoulder: action.item,
      };
    case equipChest:
      return {
        ...state,
        equippedChest: action.item,
      };
    case equipPant:
      return {
        ...state,
        equippedPant: action.item,
      };
    case equipBoot:
      return {
        ...state,
        equippedBoot: action.item,
      };
    case equipNecklace:
      return {
        ...state,
        equippedNecklace: action.item,
      };
    case equipCape:
      return {
        ...state,
        equippedCape: action.item,
      };
    case equipBracer:
      return {
        ...state,
        equippedBracer: action.item,
      };
    case equipGlove:
      return {
        ...state,
        equippedGlove: action.item,
      };
    case equipWeapon:
      return {
        ...state,
        equippedWeapon: action.item,
      };
    case unequipHelmet:
      return {
        ...state,
        equippedHelmet: {
          Health: 0,
          Attack: 0,
          Defence: 0,
          Magic: 0,
          Resistance: 0,
          Mind: 0,
          CritChance: 0,
          EvasionChance: 0,
          Speed: 0,
          id: 0,
          image: getImageFromFrameBackgroundsMap("helm_background.png"),
          type: "Helmet",
        }
      };
    case unequipShoulder:
      return {
        ...state,
        equippedShoulder: {
          Health: 0,
          Attack: 0,
          Defence: 0,
          Magic: 0,
          Resistance: 0,
          Mind: 0,
          CritChance: 0,
          EvasionChance: 0,
          Speed: 0,
          id: 0,
          image: getImageFromFrameBackgroundsMap("shoulder_background.png"),
          type: "Shoulder",
        },
      };
    case unequipChest:
      return {
        ...state,
        equippedChest: {
          Health: 0,
          Attack: 0,
          Defence: 0,
          Magic: 0,
          Resistance: 0,
          Mind: 0,
          CritChance: 0,
          EvasionChance: 0,
          Speed: 0,
          id: 0,
          image: getImageFromFrameBackgroundsMap("chest_background.png"),
          type: "Chest",
        },
      };
    case unequipPant:
      return {
        ...state,
        equippedPant: {
          Health: 0,
          Attack: 0,
          Defence: 0,
          Magic: 0,
          Resistance: 0,
          Mind: 0,
          CritChance: 0,
          EvasionChance: 0,
          Speed: 0,
          id: 0,
          image: getImageFromFrameBackgroundsMap("pants_background.png"),
          type: "Pant",
        },
      };
    case unequipBoot:
      return {
        ...state,
        equippedBoot: {
          Health: 0,
          Attack: 0,
          Defence: 0,
          Magic: 0,
          Resistance: 0,
          Mind: 0,
          CritChance: 0,
          EvasionChance: 0,
          Speed: 0,
          id: 0,
          image: getImageFromFrameBackgroundsMap("boots_background.png"),
          type: "Boot",
        },
      };
    case unequipNecklace:
      return {
        ...state,
        equippedNecklace: {
          Health: 0,
          Attack: 0,
          Defence: 0,
          Magic: 0,
          Resistance: 0,
          Mind: 0,
          CritChance: 0,
          EvasionChance: 0,
          Speed: 0,
          id: 0,
          image: getImageFromFrameBackgroundsMap("neck_background.png"),
          type: "Necklace",
        },
      };
    case unequipCape:
      return {
        ...state,
        equippedCape: {
          Health: 0,
          Attack: 0,
          Defence: 0,
          Magic: 0,
          Resistance: 0,
          Mind: 0,
          CritChance: 0,
          EvasionChance: 0,
          Speed: 0,
          id: 0,
          image: getImageFromFrameBackgroundsMap("back_background.png"),
          type: "Cape",
        },
      };
    case unequipBracer:
      return {
        ...state,
        equippedBracer: {
          Health: 0,
          Attack: 0,
          Defence: 0,
          Magic: 0,
          Resistance: 0,
          Mind: 0,
          CritChance: 0,
          EvasionChance: 0,
          Speed: 0,
          id: 0,
          image: getImageFromFrameBackgroundsMap("bracers_background.png"),
          type: "Bracer",
        },
      };
    case unequipGlove:
      return {
        ...state,
        equippedGlove: {
          Health: 0,
          Attack: 0,
          Defence: 0,
          Magic: 0,
          Resistance: 0,
          Mind: 0,
          CritChance: 0,
          EvasionChance: 0,
          Speed: 0,
          id: 0,
          image: getImageFromFrameBackgroundsMap("gloves_background.png"),
          type: "Glove",
        },
      };
    case unequipWeapon:
      return {
        ...state,
        equippedWeapon: {
          Health: 0,
          Attack: 0,
          Defence: 0,
          Magic: 0,
          Resistance: 0,
          Mind: 0,
          CritChance: 0,
          EvasionChance: 0,
          Speed: 0,
          id: 0,
          image: getImageFromFrameBackgroundsMap("trinket_background.png"),
          type: "Weapon",
        },
      };
    default:
      return state;
  }
}
