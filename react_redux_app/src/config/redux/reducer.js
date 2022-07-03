const INITIAL_STATE = {
  user: null,
  login: null,
};

export default (state = INITIAL_STATE, action) => 
{
  if (action.type == "DATAFROMLOGIN") 
  {
    state.user = action.payload;
    return { ...state };
  }
  else if(action.type == "DATAFROMGOOGLELOGIN")
  {
    state.login = action.login;
    return {...state}
  }
  return state;
};
