export const increment = count => {
  return {
    type: "INCREASE",
    payload: count + 1
  };
};

export const decrement = count => {
  return {
    type: "DECREASE",
    payload: count - 1
  };
};
