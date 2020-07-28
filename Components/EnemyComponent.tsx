import React from "react";
import { View, Image } from "react-native";
import HealthBar from "./HealthBar";

export default function (props: { enemy: Enemy }): JSX.Element {
  return (
    <View>
        <HealthBar
          currentHealth={props.enemy.health}
          totalHealth={props.enemy.health}
          label={props.enemy.name}
        />
        <Image
          style={{
            height: 100,
            width: 100,
            paddingBottom: 10,
            transform: [{ scaleX: -1 }],
          }}
          source={props.enemy.image}
        />
      </View>
  );
}
