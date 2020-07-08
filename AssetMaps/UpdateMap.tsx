const UpdateMap = [
  {
    name: "Background_blue.png",
    src: require("../assets/Update/Background_blue.png"),
  },
  {
    name: "Background_green.png",
    src: require("../assets/Update/Background_green.png"),
  },
  {
    name: "Background_grey.png",
    src: require("../assets/Update/Background_grey.png"),
  },
  {
    name: "Background_purple.png",
    src: require("../assets/Update/Background_purple.png"),
  },
  {
    name: "Background_red.png",
    src: require("../assets/Update/Background_red.png"),
  },
  {
    name: "Background_r_blue.png",
    src: require("../assets/Update/Background_r_blue.png"),
  },
  {
    name: "Background_r_green.png",
    src: require("../assets/Update/Background_r_green.png"),
  },
  {
    name: "Background_r_grey.png",
    src: require("../assets/Update/Background_r_grey.png"),
  },
  {
    name: "Background_r_purple.png",
    src: require("../assets/Update/Background_r_purple.png"),
  },
  {
    name: "Background_r_red.png",
    src: require("../assets/Update/Background_r_red.png"),
  },
  { name: "Book.png", src: require("../assets/Update/Book.png") },
  { name: "Destruction.png", src: require("../assets/Update/Destruction.png") },
  { name: "Frame_blue.png", src: require("../assets/Update/Frame_blue.png") },
  { name: "Frame_empty.png", src: require("../assets/Update/Frame_empty.png") },
  { name: "Frame_green.png", src: require("../assets/Update/Frame_green.png") },
  { name: "Frame_grey.png", src: require("../assets/Update/Frame_grey.png") },
  {
    name: "Frame_purple.png",
    src: require("../assets/Update/Frame_purple.png"),
  },
  { name: "Frame_red.png", src: require("../assets/Update/Frame_red.png") },
  { name: "Guitar.png", src: require("../assets/Update/Guitar.png") },
  { name: "Ink.png", src: require("../assets/Update/Ink.png") },
  {
    name: "RoundFrame_blue.png",
    src: require("../assets/Update/RoundFrame_blue.png"),
  },
  {
    name: "RoundFrame_green.png",
    src: require("../assets/Update/RoundFrame_green.png"),
  },
  {
    name: "RoundFrame_grey.png",
    src: require("../assets/Update/RoundFrame_grey.png"),
  },
  {
    name: "RoundFrame_purple.png",
    src: require("../assets/Update/RoundFrame_purple.png"),
  },
  {
    name: "RoundFrame_red.png",
    src: require("../assets/Update/RoundFrame_red.png"),
  },
];

var list: any = {};
UpdateMap.forEach((element) => {
  list[element.name] = element.src;
});

export const getUpdateMapList = () => {
  return list;
};

export const getImageFromUpdateMap = (name: string) => {
  if (list[name] === undefined) {
    console.warn(
      "Warning: Image name " + name + " does not exist in map Update"
    );
  }
  return list[name];
};
