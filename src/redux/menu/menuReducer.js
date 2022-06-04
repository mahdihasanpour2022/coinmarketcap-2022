

const initialMenuState = {
  sideMenu: false,
};

const menuReducer = (state = initialMenuState, action) => {
  switch (action.type) {
    case "OPEN_SIDE_MENU":
      return {...state , sideMenu :action.payload};
    default:
      return state;
  }
}
export default menuReducer;