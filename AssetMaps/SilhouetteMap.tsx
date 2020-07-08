const SilhouetteMap = [
  {
    name: "archer_silhouette_man.png",
    src: require("../assets/Silhouette/archer_silhouette_man.png"),
  },
  {
    name: "archer_silhouette_woman.png",
    src: require("../assets/Silhouette/archer_silhouette_woman.png"),
  },
  {
    name: "assassin_silhouette_man.png",
    src: require("../assets/Silhouette/assassin_silhouette_man.png"),
  },
  {
    name: "assassin_silhouette_woman.png",
    src: require("../assets/Silhouette/assassin_silhouette_woman.png"),
  },
  {
    name: "berserk_silhouette_man.png",
    src: require("../assets/Silhouette/berserk_silhouette_man.png"),
  },
  {
    name: "berserk_silhouette_woman.png",
    src: require("../assets/Silhouette/berserk_silhouette_woman.png"),
  },
  {
    name: "druid_silhouette_man.png",
    src: require("../assets/Silhouette/druid_silhouette_man.png"),
  },
  {
    name: "druid_silhouette_woman.png",
    src: require("../assets/Silhouette/druid_silhouette_woman.png"),
  },
  {
    name: "Mage_silhouette_man.png",
    src: require("../assets/Silhouette/Mage_silhouette_man.png"),
  },
  {
    name: "Mage_silhouette_woman.png",
    src: require("../assets/Silhouette/Mage_silhouette_woman.png"),
  },
  {
    name: "shadowmage_silhouette_man.png",
    src: require("../assets/Silhouette/shadowmage_silhouette_man.png"),
  },
  {
    name: "shadowmage_silhouette_woman.png",
    src: require("../assets/Silhouette/shadowmage_silhouette_woman.png"),
  },
  {
    name: "warrior_silhouette_man.png",
    src: require("../assets/Silhouette/warrior_silhouette_man.png"),
  },
  {
    name: "warrior_silhouette_woman.png",
    src: require("../assets/Silhouette/warrior_silhouette_woman.png"),
  },
];

var list: any = {};
SilhouetteMap.forEach((element) => {
  list[element.name] = element.src;
});

export const getSilhouetteMapList = () => {
  return list;
};

export const getImageFromSilhouetteMap = (name: string) => {
  if (list[name] === undefined) {
    console.warn(
      "Warning: Image name " + name + " does not exist in map Silhouette"
    );
  }
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