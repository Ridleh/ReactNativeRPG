const GUIPartsImages = [
  { name: "barReady", src: require("../Assets/GUI_Parts_Free/bar_ready.png") },
  {
    name: "barMidReady",
    src: require("../Assets/GUI_Parts_Free/barmid_ready.png"),
  },
  {
    name: "bigBackground",
    src: require("../Assets/GUI_Parts_Free/big_background.png"),
  },
  {
    name: "bigRoundFrame",
    src: require("../Assets/GUI_Parts_Free/big_roundframe.png"),
  },
  { name: "button", src: require("../Assets/GUI_Parts_Free/button.png") },
  {
    name: "buttonAgree",
    src: require("../Assets/GUI_Parts_Free/button_agree.png"),
  },
  {
    name: "buttonCancel",
    src: require("../Assets/GUI_Parts_Free/button_cancel.png"),
  },
  {
    name: "buttonFrame",
    src: require("../Assets/GUI_Parts_Free/button_frame.png"),
  },
  {
    name: "buttonReadyOff",
    src: require("../Assets/GUI_Parts_Free/button_ready_off.png"),
  },
  {
    name: "buttonReadyOn",
    src: require("../Assets/GUI_Parts_Free/button_ready_on.png"),
  },
  { name: "button2", src: require("../Assets/GUI_Parts_Free/button2.png") },
  {
    name: "button2ReadyOff",
    src: require("../Assets/GUI_Parts_Free/button2_ready_off.png"),
  },
  {
    name: "button2ReadyOn",
    src: require("../Assets/GUI_Parts_Free/button2_ready_on.png"),
  },
  {
    name: "button3Ready",
    src: require("../Assets/GUI_Parts_Free/button3_ready.png"),
  },
  { name: "frameBig", src: require("../Assets/GUI_Parts_Free/Frame_big.png") },
  { name: "frameMid", src: require("../Assets/GUI_Parts_Free/Frame_mid.png") },
  {
    name: "frameMid2",
    src: require("../Assets/GUI_Parts_Free/Frame_mid_2.png"),
  },
  { name: "HPFrame", src: require("../Assets/GUI_Parts_Free/Hp_frame.png") },
  { name: "HPLine", src: require("../Assets/GUI_Parts_Free/Hp_line.png") },
  {
    name: "lilRoundBackground",
    src: require("../Assets/GUI_Parts_Free/lil_roundbackground.png"),
  },
  {
    name: "lilRoundFrame",
    src: require("../Assets/GUI_Parts_Free/lil_roundframe.png"),
  },
  {
    name: "lilRoundFrameReady",
    src: require("../Assets/GUI_Parts_Free/lil_roundframe_ready.png"),
  },
  {
    name: "lilRoundFrameReady2",
    src: require("../Assets/GUI_Parts_Free/lil_roundframe_ready2.png"),
  },
  {
    name: "midBackground",
    src: require("../Assets/GUI_Parts_Free/mid_background.png"),
  },
  {
    name: "miniBackground",
    src: require("../Assets/GUI_Parts_Free/Mini_background.png"),
  },
  {
    name: "miniFrame0",
    src: require("../Assets/GUI_Parts_Free/Mini_frame0.png"),
  },
  {
    name: "miniFrame1",
    src: require("../Assets/GUI_Parts_Free/Mini_frame1.png"),
  },
  {
    name: "miniFrame2",
    src: require("../Assets/GUI_Parts_Free/Mini_frame2.png"),
  },
  { name: "nameBar", src: require("../Assets/GUI_Parts_Free/name_bar.png") },
  { name: "nameBar2", src: require("../Assets/GUI_Parts_Free/name_bar2.png") },
  { name: "nameBar3", src: require("../Assets/GUI_Parts_Free/name_bar3.png") },
  {
    name: "warriorSilhouetteMan",
    src: require("../Assets/GUI_Parts_Free/warrior_silhouette_man.png"),
  },
  {
    name: "warriorSilhouetteWoman",
    src: require("../Assets/GUI_Parts_Free/warrior_silhouette_woman.png"),
  },
];

var list: any = {};
GUIPartsImages.forEach((element) => {
  list[element.name] = element.src;
});

export const getImageList = () => {
  return list;
};

export const getImage = (name: string) => {
  return list[name];
};

const roughSizeOfObject = (object: any) => {
  var objectList = [];
  var stack = [object];
  var bytes = 0;

  while (stack.length) {
    var value = stack.pop();

    if (typeof value === "boolean") {
      bytes += 4;
    } else if (typeof value === "string") {
      bytes += value.length * 2;
    } else if (typeof value === "number") {
      bytes += 8;
    } else if (typeof value === "object" && objectList.indexOf(value) === -1) {
      objectList.push(value);
      for (var i in value) {
        stack.push(value[i]);
      }
    }
  }
  return bytes;
};
