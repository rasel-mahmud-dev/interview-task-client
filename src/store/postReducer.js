
const initialState = {
    posts: [],
    updatePostId: -1,
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
                ],
                updatePostId: -1
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
                updatePostId: -1,
                posts: updatedPosts
            }

        case "SET_ID_FOR_UPDATE_POST" :
            return {
                ...state,
                updatePostId:  action.payload
            }

        default :
            return state
    }
}

export default postReducer