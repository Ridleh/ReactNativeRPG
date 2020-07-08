const CharactersMap = [
  { name: "Bard.png", src: require("../assets/Characters/Bard.png") },
  { name: "Berzerker.png", src: require("../assets/Characters/Berzerker.png") },
  {
    name: "Black_Mage.png",
    src: require("../assets/Characters/Black_Mage.png"),
  },
  {
    name: "Dark_Knight.png",
    src: require("../assets/Characters/Dark_Knight.png"),
  },
  { name: "Devout.png", src: require("../assets/Characters/Devout.png") },
  { name: "Dragoon.png", src: require("../assets/Characters/Dragoon.png") },
  {
    name: "dummy_enemy.png",
    src: require("../assets/Characters/dummy_enemy.png"),
  },
  { name: "Gladiator.png", src: require("../assets/Characters/Gladiator.png") },
  { name: "Knight.png", src: require("../assets/Characters/Knight.png") },
  { name: "Magus.png", src: require("../assets/Characters/Magus.png") },
  { name: "Monk.png", src: require("../assets/Characters/Monk.png") },
  { name: "Ninja.png", src: require("../assets/Characters/Ninja.png") },
  { name: "Ranger.png", src: require("../assets/Characters/Ranger.png") },
  { name: "Red_Mage.png", src: require("../assets/Characters/Red_Mage.png") },
  { name: "Samurai.png", src: require("../assets/Characters/Samurai.png") },
  {
    name: "Spellblade.png",
    src: require("../assets/Characters/Spellblade.png"),
  },
  { name: "Summoner.png", src: require("../assets/Characters/Summoner.png") },
  { name: "Thief.png", src: require("../assets/Characters/Thief.png") },
  { name: "tyro.png", src: require("../assets/Characters/tyro.png") },
  { name: "Viking.png", src: require("../assets/Characters/Viking.png") },
  { name: "Warrior.png", src: require("../assets/Characters/Warrior.png") },
  {
    name: "White_Mage.png",
    src: require("../assets/Characters/White_Mage.png"),
  },
];

var list: any = {};
CharactersMap.forEach((element) => {
  list[element.name] = element.src;
});

export const getCharactersMapList = () => {
  return list;
};

export const getImageFromCharactersMap = (name: string) => {
  if (list[name] === undefined) {
    console.warn(
      "Warning: Image name " + name + " does not exist in map Characters"
    );
  }
  return list[name];
};
