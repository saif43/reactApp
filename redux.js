//actions

const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: { name, amount }
  };
};

const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: { name }
  };
};

const createClaim = (name, claimAmount) => {
  return {
    type: "CREATE_CLAIM",
    payload: { name, claimAmount }
  };
};

// reducers

const claimHistory = (oldClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldClaims, action.payload];
  }

  return oldClaims;
};

const accounting = (remainingMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return remainingMoney - action.payload.claimAmount;
  } else if (action.type === "CREATE_POLICY") {
    return remainingMoney + action.payload.amount;
  }

  return remainingMoney;
};

const policy = (listOfPolicy = [], action) => {
  if (action === "CREATE_POLICY") {
    return [...listOfPolicy, action.payload.name];
  } else if (action === "DELETE_POLICY") {
    return listOfPolicy.filter(name => name !== action.payload.name);
  }

  return listOfPolicy;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimHistory: claimHistory,
  policy: policy
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy("Alex", 20));
store.dispatch(createPolicy("Jim", 30));
store.dispatch(createPolicy("Bob", 40));

store.dispatch(createClaim("Alex", 120));
store.dispatch(createClaim("Jim", 50));

store.dispatch(deletePolicy("Bob"));

console.log(store.getState());
