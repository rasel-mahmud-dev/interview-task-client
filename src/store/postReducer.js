
const initialState = {
    posts: []
}

function postReducer(state=initialState, action){
    switch (action.type){

        case "FETCH_POSTS" :
            return {
                ...state,
                posts: action.payload
            }

        case "ADD_POST" :
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.payload
                ]
            }

        case "DELETE_POST" :
            return {
                ...state,
                posts: state.posts.filter(post=>post._id !== action.payload)
            }

        case "UPDATE_POST" :
            let updatedPosts = [...state.posts]
            let findUpdatePostIndex = updatedPosts.findIndex(post=>post._id === action.payload._id)
            if(findUpdatePostIndex !== -1){
                updatedPosts[findUpdatePostIndex] = {
                    ...updatedPosts[findUpdatePostIndex],
                    ...action.payload
                }
            }
            return {
                ...state,
                posts: updatedPosts
            }

        default :
            return state
    }
}

export default postReducer