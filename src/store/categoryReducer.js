
const LOAD_ALL_CATEGORIES_DONE = "LOAD_ALL_CATEGORIES_DONE"
export function loadCategories() {
    return (
        fetch("https://fakestoreapi.com/products/categories")
        .then(
            (res) => {
                return res.json();
            }
        ).then(
            (res) => {
                console.log(res);
                return (dispatch) => {
                    dispatch({
                        type: LOAD_ALL_CATEGORIES_DONE,
                        payload: res
                    });
                }
            } 
        )
    );
}

function categoryReducer (state = {
    categories: []
}, action) {
    switch(action.type) {
        case(LOAD_ALL_CATEGORIES_DONE):{
            return {
                ...state,
                categories: [
                    ...(action.payload)
                ],
            }
        }
        default:{
            return{
                ...state
            };
        }
    }
}

export default categoryReducer;