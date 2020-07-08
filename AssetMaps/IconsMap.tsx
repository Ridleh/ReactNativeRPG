const IconsMap = [
  { name: "Bag.png", src: require("../assets/Icons/Bag.png") },
  { name: "Equip.png", src: require("../assets/Icons/Equip.png") },
  { name: "exit.png", src: require("../assets/Icons/exit.png") },
  { name: "Fight.png", src: require("../assets/Icons/Fight.png") },
  { name: "greed.png", src: require("../assets/Icons/greed.png") },
  { name: "Honor.png", src: require("../assets/Icons/Honor.png") },
  { name: "Inventory.png", src: require("../assets/Icons/Inventory.png") },
  { name: "Menu.png", src: require("../assets/Icons/Menu.png") },
  { name: "need.png", src: require("../assets/Icons/need.png") },
  { name: "Options.png", src: require("../assets/Icons/Options.png") },
  { name: "Profession.png", src: require("../assets/Icons/Profession.png") },
  { name: "Quest.png", src: require("../assets/Icons/Quest.png") },
  { name: "runes.png", src: require("../assets/Icons/runes.png") },
  { name: "Scull.png", src: require("../assets/Icons/Scull.png") },
  { name: "Scull2.png", src: require("../assets/Icons/Scull2.png") },
  { name: "skills.png", src: require("../assets/Icons/skills.png") },
  { name: "trade.png", src: require("../assets/Icons/trade.png") },
];

var list: any = {};
IconsMap.forEach((element) => {
  list[element.name] = element.src;
});

export const getIconsMapList = () => {
  return list;
};

export const getImageFromIconsMap = (name: string) => {
  if (list[name] === undefined) {
    console.warn(
      "Warning: Image name " + name + " does not exist in map Icons"
    );
  }
  return list[name];
};
