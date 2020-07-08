import React from "react";
import { View } from "react-native";
import ItemContainer from "./ItemContainer";
import { getImageFromFrameBackgroundsMap } from "../AssetMaps/FrameBackgroundsMap";

/*
required props:
    alignment: parameter for alignItems style
*/
export default function FourItemLayout(props: any) {

  if(props.leftSide){
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center", 
        }}
      > 
        <ItemContainer
         image={getImageFromFrameBackgroundsMap('helm_background.png')}/>
        <ItemContainer
        image={getImageFromFrameBackgroundsMap('shoulder_background.png')} />
        <ItemContainer 
        image={getImageFromFrameBackgroundsMap('chest_background.png')}/>
        <ItemContainer 
        image={getImageFromFrameBackgroundsMap('pants_background.png')}/>
        <ItemContainer 
        image={getImageFromFrameBackgroundsMap('boots_background.png')}/>
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
       image={getImageFromFrameBackgroundsMap('neck_background.png')}/>
      <ItemContainer
      image={getImageFromFrameBackgroundsMap('back_background.png')} />
      <ItemContainer 
      image={getImageFromFrameBackgroundsMap('bracers_background.png')}/>
      <ItemContainer 
      image={getImageFromFrameBackgroundsMap('gloves_background.png')}/>
      <ItemContainer 
      image={getImageFromFrameBackgroundsMap('trinket_background.png')}/>
    </View>
  );
}
