import React from "react";
import { View } from "react-native";
import ItemContainer from "./ItemContainer";
import { getImageFromFrameBackgroundsMap } from "../AssetMaps/FrameBackgroundsMap";
import { useNavigation, useLinkProps } from "@react-navigation/native";

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
        image={getImage(props.character, props.leftSide, 0)}
      />
      <ItemContainer
        handlePress={navigation}
        image={getImage(props.character, props.leftSide, 1)}
      />
      <ItemContainer
        handlePress={navigation}
        image={getImage(props.character, props.leftSide, 2)}
      />
      <ItemContainer
        handlePress={navigation}
        image={getImage(props.character, props.leftSide, 3)}
      />
      <ItemContainer
        handlePress={navigation}
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
