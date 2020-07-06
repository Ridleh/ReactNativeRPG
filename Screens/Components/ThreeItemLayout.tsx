import React from "react";
import { View } from "react-native";
import ItemContainer from "./ItemContainer";
import { getImageFromCRPG } from "../../AssetMaps/ClassicRPGUIMap";

/*
required props:
    alignment: parameter for alignItems style
*/
export default function ThreeItemLayout(props: any) {

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
         image={getImageFromCRPG('helmBackground')}/>
        <ItemContainer
        image={getImageFromCRPG('shoulderBackground')} />
        <ItemContainer 
        image={getImageFromCRPG('chestBackground')}/>
        <ItemContainer 
        image={getImageFromCRPG('pantsBackground')}/>
        <ItemContainer 
        image={getImageFromCRPG('bootsBackground')}/>
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
       image={getImageFromCRPG('neckBackground')}/>
      <ItemContainer
      image={getImageFromCRPG('backBackground')} />
      <ItemContainer 
      image={getImageFromCRPG('bracersBackground')}/>
      <ItemContainer 
      image={getImageFromCRPG('glovesBackground')}/>
      <ItemContainer 
      image={getImageFromCRPG('trinketBackground')}/>
    </View>
  );
}
