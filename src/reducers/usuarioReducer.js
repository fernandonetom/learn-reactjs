/* eslint-disable default-case */
const initialState = {
	name: "Visitante",
	contador: 0,
};

const usuarioReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_NAME":
			return { ...state, name: action.payload.name };
			break;
		case "SET_COUNT":
			return { ...state, contador: action.payload.contador };
			break;
	}
	return state;
};

export default usuarioReducer;
