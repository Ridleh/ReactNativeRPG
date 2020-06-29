import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  flexFull: {
    flex: 1,
  },
  flexFullRow: {
    flex: 1,
    flexDirection: "row",
  },
  imageBackgroundFull: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  rootContainerPadding: {
    padding: 10,
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1 / 5,
    height: Dimensions.get("window").width / 4, // approximate a square
    width: Dimensions.get("window").width / 4,
  }
});

export default styles;
