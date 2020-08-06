import { createStore, combineReducers } from "redux";
import InventoryReducer from "./Reducers/InventoryReducer";
import ChracterReducer from "./Reducers/ChracterReducer";
//import PartyReducer from "./Reducers/PartyReducer";
import throttle from "lodash.throttle";
import { AsyncStorage } from "react-native";


//export default Store;

export const LoadState = async () => {
  //console.log("Attempting to load state...");
  try {
    const serializedState = await AsyncStorage.getItem("GameState");
    if (serializedState === null) {
      return undefined;
    }
    //console.log(serializedState);
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error: An error occured loading GameState");
    console.error(error);
    return undefined;
  }
};

export const SaveState = async (state: any) => {
  //console.log("Attempting to save state...");
  //console.log(state);
  try {
    const serializedState = JSON.stringify(state);
    await AsyncStorage.setItem("GameState", serializedState);
  } catch (error) {
    console.error("Error: An error occured saving GameState");
    console.error(error);
  }
};

export const DeleteState = async() => {
    try{
        await AsyncStorage.removeItem("GameState");
    }
    catch(error){
        console.error("Error: An error occured deleting GameState");
        console.error(error);
    }
}

const rootReducer = combineReducers({
  Inventory: InventoryReducer,
  Character: ChracterReducer,
});

//Ideally we load in the persistedState and use it to create the store
//For now the state is loaded in AppLoading component
const Store = createStore(rootReducer);

Store.subscribe(
  throttle(() => {
    SaveState(Store.getState());
    //console.log("Successfully saved gameState")
  }, 1000)
);

export default Store;
