import tipo from "../actions/tipo";

const initialState = {
  test: "Prueba de estado",
  fecha: new Date(),
  ciudad: "Lujan"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case tipo.UPDATE_FECHA:
      return Object.assign({}, state, {
        fecha: action.payload
      });

    case tipo.UPDATE_CIUDAD:
      return Object.assign({}, state, {
        ciudad: action.payload
      });

    default:
      return state;
      break;
  }
};

/* function  reducer(state=initialState, action){
    switch (action.type) {
        default:
        return state
        break;
    }
}
 */
