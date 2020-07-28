import React from "react";
import { View, Image } from "react-native";
import HealthBar from "./HealthBar";

export default function (props: { player: Player }): JSX.Element {
  return (
    <View>
      <HealthBar
        currentHealth={props.player.health}
        totalHealth={props.player.health}
        label={props.player.name}
      />
      <Image
        style={{
          height: 100,
          width: 100,
          paddingBottom: 10,
        }}
        source={props.player.image}
      />
    </View>
  );
}
