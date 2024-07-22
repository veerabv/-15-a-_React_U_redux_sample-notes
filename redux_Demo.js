const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  // second =>  set the reducer function , because the reducer function only update the store as we know refer notes

  // add a default value to state or initial state
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    default:
      return {
        counter: state.counter,
      };
  }
};

const store = redux.createStore(counterReducer); //First =>  Create a store  , Third => give the  reducer function as the parameter

function counterSubcriber() {
  // consider this as the component where the data is used from the store
  const latestState = store.getState(); // get the latest state from the store
  console.log(latestState);
}

store.subscribe(counterSubcriber); // fourth => subcribe to the store

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
