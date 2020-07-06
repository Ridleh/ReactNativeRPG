const ClassicRPGUIMap = [
    {name: 'inventoryBar', src: require('../Assets/Classic_RPG_UI/Inventory_bar.png')},
    {name: 'inventoryFrame', src: require('../Assets/Classic_RPG_UI/inventory_frame.png')},
    {name: 'lilBar', src: require('../Assets/Classic_RPG_UI/lil_bar.png')},
    {name: 'nameFrameReady', src: require('../Assets/Classic_RPG_UI/name_frame_ready.png')},
    {name: 'inventoryButton2', src: require('../Assets/Classic_RPG_UI/inventory_button2.png')},
    {name: 'helmBackground', src: require('../Assets/Classic_RPG_UI/frame_backgrounds/helm_background.png')},
    {name: 'shoulderBackground', src: require('../Assets/Classic_RPG_UI/frame_backgrounds/shoulder_background.png')},
    {name: 'chestBackground', src: require('../Assets/Classic_RPG_UI/frame_backgrounds/chest_background.png')},
    {name: 'pantsBackground', src: require('../Assets/Classic_RPG_UI/frame_backgrounds/pants_background.png')},
    {name: 'bootsBackground', src: require('../Assets/Classic_RPG_UI/frame_backgrounds/boots_background.png')},
    {name: 'neckBackground', src: require('../Assets/Classic_RPG_UI/frame_backgrounds/neck_background.png')},
    {name: 'backBackground', src: require('../Assets/Classic_RPG_UI/frame_backgrounds/back_background.png')},
    {name: 'bracersBackground', src: require('../Assets/Classic_RPG_UI/frame_backgrounds/bracers_background.png')},
    {name: 'glovesBackground', src: require('../Assets/Classic_RPG_UI/frame_backgrounds/gloves_background.png')},
    {name: 'trinketBackground', src: require('../Assets/Classic_RPG_UI/frame_backgrounds/trinket_background.png')},
]

var list: any = {};
ClassicRPGUIMap.forEach((element) => {
  list[element.name] = element.src;
});

export const getImageList = () => {
  return list;
};

export const getImageFromCRPG = (name: string) => {
  return list[name];
};