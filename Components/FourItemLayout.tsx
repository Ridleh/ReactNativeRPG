import React from "react";
import { View } from "react-native";
import ItemContainer from "./ItemContainer";
import { getImageFromFrameBackgroundsMap } from "../AssetMaps/FrameBackgroundsMap";
import { useNavigation } from "@react-navigation/native";

export default function FourItemLayout(props: any) {
  const navigation = useNavigation();

  if (props.leftSide) {
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
          image={getImageFromFrameBackgroundsMap("helm_background.png")}
        />
        <ItemContainer
          handlePress={navigation}
          image={getImageFromFrameBackgroundsMap("shoulder_background.png")}
        />
        <ItemContainer
          handlePress={navigation}
          image={getImageFromFrameBackgroundsMap("chest_background.png")}
        />
        <ItemContainer
          handlePress={navigation}
          image={getImageFromFrameBackgroundsMap("pants_background.png")}
        />
        <ItemContainer
          handlePress={navigation}
          image={getImageFromFrameBackgroundsMap("boots_background.png")}
        />
      </View>
    );
  }
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
        image={getImageFromFrameBackgroundsMap("neck_background.png")}
      />
      <ItemContainer
        handlePress={navigation}
        image={getImageFromFrameBackgroundsMap("back_background.png")}
      />
      <ItemContainer
        handlePress={navigation}
        image={getImageFromFrameBackgroundsMap("bracers_background.png")}
      />
      <ItemContainer
        handlePress={navigation}
        image={getImageFromFrameBackgroundsMap("gloves_background.png")}
      />
      <ItemContainer
        handlePress={navigation}
        image={getImageFromFrameBackgroundsMap("trinket_background.png")}
      />
    </View>
  );
}
