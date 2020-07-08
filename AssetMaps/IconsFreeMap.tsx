const IconsFreeMap = [
  {
    name: "armor_icon.png",
    src: require("../assets/Icons_Free/armor_icon.png"),
  },
  {
    name: "skill_icon_01.png",
    src: require("../assets/Icons_Free/skill_icon_01.png"),
  },
  {
    name: "skill_icon_01_nobg.png",
    src: require("../assets/Icons_Free/skill_icon_01_nobg.png"),
  },
  {
    name: "skill_icon_02.png",
    src: require("../assets/Icons_Free/skill_icon_02.png"),
  },
  {
    name: "skill_icon_02_nobg.png",
    src: require("../assets/Icons_Free/skill_icon_02_nobg.png"),
  },
  {
    name: "skill_icon_03.png",
    src: require("../assets/Icons_Free/skill_icon_03.png"),
  },
  {
    name: "skill_icon_03_nobg.png",
    src: require("../assets/Icons_Free/skill_icon_03_nobg.png"),
  },
  {
    name: "skill_icon_04.png",
    src: require("../assets/Icons_Free/skill_icon_04.png"),
  },
  {
    name: "skill_icon_04_nobg.png",
    src: require("../assets/Icons_Free/skill_icon_04_nobg.png"),
  },
  {
    name: "stoune_icon.png",
    src: require("../assets/Icons_Free/stoune_icon.png"),
  },
  {
    name: "weapon_icon.png",
    src: require("../assets/Icons_Free/weapon_icon.png"),
  },
];

var list: any = {};
IconsFreeMap.forEach((element) => {
  list[element.name] = element.src;
});

export const getIconsFreeMapList = () => {
  return list;
};

export const getImageFromIconsFreeMap = (name: string) => {
  if (list[name] === undefined) {
    console.warn(
      "Warning: Image name " + name + " does not exist in map IconsFree"
    );
  }
  return list[name];
};
