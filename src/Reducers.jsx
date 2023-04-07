const initialStates = {
  quantity: 0,

  displayNavMenu: false,

  displayQuantityOnTop: false,

  sneakerGallery: [true, false, false, false]
};


const sneakerGalleryReducer = (state, action) => {

    switch (action.type){
        case "0":
            return {...state, sneakerGallery: [true, 
            false, false, false]}
            break
        case "1":
            return {...state, sneakerGallery: [false, true, false, false]}
            break
        case "2":
            return {...state, sneakerGallery: [false,false, true,  false]}
            break
        case "3":
            return {...state, sneakerGallery: [false, false, false, true]}
            break;
        // default:
        //     return state
        //     break
                
    }

}


const quantityReducer = (state, action) => {
  switch (action.type) {
    case "additem":
      return { ...state, quantity: state.quantity + 1 };
      break;
    case "removeitem":
      return state.quantity > 0
        ? { ...state, quantity: state.quantity - 1 }
        : { ...state, quantity: state.quantity };
      break;
    default:
      return { ...state, quantity: state.quantity };
      break;
  }
};

const displayNavMenuReducer = (state, action) => {
  return action.type === "displaymenu"
    ? { ...state, displayNavMenu: !state.displayNavMenu }
    : { ...state, displayNavMenu: state.displayNavMenu };
};

const displayQuantityOnTopReducer = (state, action) => {
    return action.type === "displayontop"
    ? { ...state, displayQuantityOnTop: true }
    : { ...state, displayQuantityOnTop: state.displayQuantityOnTop };
}


export { displayNavMenuReducer, quantityReducer, initialStates, displayQuantityOnTopReducer, sneakerGalleryReducer };
