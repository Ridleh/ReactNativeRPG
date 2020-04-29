import { createStore, combineReducers } from 'redux';
import InventoryReducer from './Reducers/InventoryReducer'
import PartyReducer from './Reducers/PartyReducer'

const rootReducer = combineReducers({Inventory: InventoryReducer,Party: PartyReducer});
const Store = createStore(rootReducer);

export default Store