const INITIAL_STATE = [];

const Sync = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case "CHANGE_SYNCS_DATA":
    return action.Syncs;
  default:
    return state;
  }
};

export default Sync;