const initialState = {
    recipesLoaded: [],
    recipesFavorites: [],
    recipeDetail: {title: 22},
};



export default function rootReducer(state = initialState, action) {
    switch (action.type){
        case 'GET_RECIPES':
            return {
                ...state,
                recipesLoaded: action.payload.Search,
            };
            case 'GET_RECIPE_DETAIL':
            return {
                ...state,
                recipeDetail: action.payload,
            };
            case 'ADD_RECIPE_FAVORITE':
            return {
                // tambien valido con spread operator
                // [...state, moviesFavorites, action.payload]
                ...state,
                recipesFavorites: state.recipesFavorites.concat(action.payload)
            };
            case 'REMOVE_RECIPE_FAVORITE':
                return {
                    ...state,
                    recipesFavorites: state.recipesFavorites.filter(recipe => recipe.id !== action.id)
                }
          
        default: return state;
    }
};

