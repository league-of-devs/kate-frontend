const INITIAL_STATE = {
  logged: false,
  name: "",
  email: ""
};

const User = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case "CHANGE_USER_DATA":
    return action.User;
  default:
    return state;
  }
};

export default User;