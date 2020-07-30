import React from "react";
import { View } from "react-native";
import ItemContainer from "./ItemContainer";
import { getImageFromFrameBackgroundsMap } from "../AssetMaps/FrameBackgroundsMap";
import { useNavigation, useLinkProps } from "@react-navigation/native";

const defaultImageList: any[] = [
  getImageFromFrameBackgroundsMap("helm_background.png"),
  getImageFromFrameBackgroundsMap("shoulder_background.png"),
  getImageFromFrameBackgroundsMap("chest_background.png"),
  getImageFromFrameBackgroundsMap("pants_background.png"),
  getImageFromFrameBackgroundsMap("boots_background.png"),
  getImageFromFrameBackgroundsMap("neck_background.png"),
  getImageFromFrameBackgroundsMap("back_background.png"),
  getImageFromFrameBackgroundsMap("bracers_background.png"),
  getImageFromFrameBackgroundsMap("gloves_background.png"),
  getImageFromFrameBackgroundsMap("trinket_background.png"),
];

export default function FourItemLayout(props: any) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ItemContainer
        handlePress={navigation}
        index={0}
        leftSide={props.leftSide}
        image={getImage(props.character, props.leftSide, 0)}
      />
      <ItemContainer
        handlePress={navigation}
        index={1}
        leftSide={props.leftSide}
        image={getImage(props.character, props.leftSide, 1)}
      />
      <ItemContainer
        handlePress={navigation}
        index={2}
        leftSide={props.leftSide}
        image={getImage(props.character, props.leftSide, 2)}
      />
      <ItemContainer
        handlePress={navigation}
        index={3}
        leftSide={props.leftSide}
        image={getImage(props.character, props.leftSide, 3)}
      />
      <ItemContainer
        handlePress={navigation}
        index={4}
        leftSide={props.leftSide}
        image={getImage(props.character, props.leftSide, 4)}
      />
    </View>
  );
}

function getImage(character: any, leftSide: boolean, num: number): any {
  if (leftSide) {
    switch (num) {
      case 0:
        return character.equippedHelmet.image;
      case 1:
        return character.equippedShoulder.image;
      case 2:
        return character.equippedChest.image;
      case 3:
        return character.equippedPant.image;
      case 4:
        return character.equippedBoot.image;
    }
  }
  switch (num) {
    case 0:
      return character.equippedNecklace.image;
    case 1:
      return character.equippedCape.image;
    case 2:
      return character.equippedBracer.image;
    case 3:
      return character.equippedGlove.image;
    default:
      return character.equippedWeapon.image;
  }
}
