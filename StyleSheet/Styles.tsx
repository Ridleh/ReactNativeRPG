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
  flexFullColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  imageBackgroundFull: {
    width: "100%",
    height: "100%",
    overflow: "hidden"
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
  centerRow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row'
  },
  item: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1 / 5,
    height: Dimensions.get("window").width / 5, // approximate a square
    width: Dimensions.get("window").width / 5,
  },
  listPadding: {
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  header: {
    width: "100%", 
    height: "8%" 
  }
});

export default styles;
