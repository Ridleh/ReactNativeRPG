import React, { Component } from "react";
import { View, Animated } from "react-native";
import CustomText from "./CustomText";

const available_width = 100;

class HealthBar extends Component<any, any> {
  currentHealth: Animated.Value;

  constructor(props: any) {
    super(props);
    this.state = {
      currentHealth: this.props.currentHealth,
      totalHealth: this.props.totalHealth,
    };

    this.currentHealth = new Animated.Value(this.props.currentHealth);
  }

  componentDidUpdate(
    prevProps: { currentHealth: Animated.Value },
    prevState: any
  ) {
    if (prevProps.currentHealth !== this.props.currentHealth) {
      this.currentHealth.addListener((progress) => {
        this.setState({
          currentHealth: progress.value,
        });
      });

      Animated.timing(this.currentHealth, {
        useNativeDriver: false,
        duration: 1500,
        toValue: this.props.currentHealth,
      }).start();
    }
  }

  render() {
    const { label } = this.props;

    return (
      <View>
        <CustomText>{label}</CustomText>
        <View style={styles.container}>
          <View style={styles.rail}>
            <Animated.View style={[this.getCurrentHealthStyles()]} />
          </View>
          <View style={styles.percent}>
            <CustomText styles={styles.percent}>
              {this.state.currentHealth + "/" + this.state.totalHealth}
            </CustomText>
          </View>
        </View>
      </View>
    );
  }

  getCurrentHealthStyles = () => {
    var animated_width = this.currentHealth.interpolate({
      inputRange: [0, this.state.totalHealth / 2, this.state.totalHealth],
      outputRange: [0, available_width / 2, available_width],
    });

    const color_animation = this.currentHealth.interpolate({
      inputRange: [0, this.state.totalHealth / 2, this.state.totalHealth],
      outputRange: [
        "rgb(199, 45, 50)",
        "rgb(224, 150, 39)",
        "rgb(101, 203, 25)",
      ],
    });

    return {
      width: animated_width,
      height: 8, // height of the health bar
      backgroundColor: color_animation,
    };
  };
}

const styles = {
  container: {
    height: 10,
    width: 130,
    marginBottom: 15,
  },
  label: {
    paddingBottom: 2,
    color: "#212121",
  },
  rail: {
    height: 10,
    width: 100,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#616161",
  },
  healthOK: {
    backgroundColor: "#5db56d",
  },
  healthWarning: {
    backgroundColor: "#fcc419",
  },
  healthCritical: {
    backgroundColor: "#fa5252",
  },
  percent: {
    paddingLeft: 3,
  },
  percentText: {
    fontSize: 10,
    color: "#212121",
  },
};

export default HealthBar;
