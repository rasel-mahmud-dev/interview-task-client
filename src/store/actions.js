import api from "../api";



// get all posts actions
export function getAllPosts() {
    return async function (dispatch) {
        try {
            let {status, data} = await api.get("/api/posts")
            if (status === 200) {
                console.log(data)
                dispatch({
                    type: "FETCH_POSTS",
                    payload: data
                })
            }
        } catch (ex) {

        }

    }

}


// add post action
export function addPost(postData) {
    return async function (dispatch) {
        try {
            let {status, data} =await api.post("/api/posts", postData)
            if (status === 201) {
                dispatch({
                    type: "ADD_POST",
                    payload: data
                })
            }
        } catch (ex) {

        }

    }
}



// delete post action
export function deletePost(postId) {
    return async function (dispatch) {
        try {
            let {status, data} = await api.delete("/api/posts/"+ postId)
            if (status === 201) {
                dispatch({
                    type: "DELETE_POST",
                    payload: postId
                })
            }
        } catch (ex) {

        }

    }
}



// delete post action
export function updatePost(postId, postData) {
    return async function (dispatch) {
        try {
            let {status, data} = await api.patch("/api/posts/"+ postId, postData)
            if (status === 201) {
                dispatch({
                    type: "UPDATE_POST",
                    payload: {_id: postId, ...postData}
                })
            }
        } catch (ex) {

        }

    }
}

