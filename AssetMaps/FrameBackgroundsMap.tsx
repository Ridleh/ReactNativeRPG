const FrameBackgroundsMap = [
  {
    name: "arrows_background.png",
    src: require("../assets/Frame_Backgrounds/arrows_background.png"),
  },
  {
    name: "back_background.png",
    src: require("../assets/Frame_Backgrounds/back_background.png"),
  },
  {
    name: "boots_background.png",
    src: require("../assets/Frame_Backgrounds/boots_background.png"),
  },
  {
    name: "bracers_background.png",
    src: require("../assets/Frame_Backgrounds/bracers_background.png"),
  },
  {
    name: "chest_background.png",
    src: require("../assets/Frame_Backgrounds/chest_background.png"),
  },
  {
    name: "gloves_background.png",
    src: require("../assets/Frame_Backgrounds/gloves_background.png"),
  },
  {
    name: "head_background.png",
    src: require("../assets/Frame_Backgrounds/head_background.png"),
  },
  {
    name: "helm_background.png",
    src: require("../assets/Frame_Backgrounds/helm_background.png"),
  },
  {
    name: "lock_background.png",
    src: require("../assets/Frame_Backgrounds/lock_background.png"),
  },
  {
    name: "melee_background.png",
    src: require("../assets/Frame_Backgrounds/melee_background.png"),
  },
  {
    name: "neck_background.png",
    src: require("../assets/Frame_Backgrounds/neck_background.png"),
  },
  {
    name: "pants_background.png",
    src: require("../assets/Frame_Backgrounds/pants_background.png"),
  },
  {
    name: "potion_background.png",
    src: require("../assets/Frame_Backgrounds/potion_background.png"),
  },
  {
    name: "range_background.png",
    src: require("../assets/Frame_Backgrounds/range_background.png"),
  },
  {
    name: "ring_background.png",
    src: require("../assets/Frame_Backgrounds/ring_background.png"),
  },
  {
    name: "Rune_background.png",
    src: require("../assets/Frame_Backgrounds/Rune_background.png"),
  },
  {
    name: "shield_background.png",
    src: require("../assets/Frame_Backgrounds/shield_background.png"),
  },
  {
    name: "shoulder_background.png",
    src: require("../assets/Frame_Backgrounds/shoulder_background.png"),
  },
  {
    name: "skill_background.png",
    src: require("../assets/Frame_Backgrounds/skill_background.png"),
  },
  {
    name: "trinket_background.png",
    src: require("../assets/Frame_Backgrounds/trinket_background.png"),
  },
  {
    name: "wand_background.png",
    src: require("../assets/Frame_Backgrounds/wand_background.png"),
  },
];

var list: any = {};
FrameBackgroundsMap.forEach((element) => {
  list[element.name] = element.src;
});

export const getFrameBackgroundsMapList = () => {
  return list;
};

export const getImageFromFrameBackgroundsMap = (name: string) => {
  if (list[name] === undefined) {
    console.warn(
      "Warning: Image name " + name + " does not exist in map FrameBackgrounds"
    );
  }
  return list[name];
};
