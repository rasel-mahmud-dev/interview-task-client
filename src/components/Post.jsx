import React from 'react';
import {useDispatch} from "react-redux";
import {deletePost} from "../store/actions";

const Post = ({post, _id}) => {

    let dispatch = useDispatch()

    // delete post action called
    function handleDelete(postId){
        dispatch(deletePost(postId))
    }

    // mark or update state for update post that is observer add post component
    function handleUpdatePost(postId){
        dispatch({
            type: "SET_ID_FOR_UPDATE_POST",
            payload: postId
        })
    }

    return (
        <div className="my-4 border-b  p-4">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-1 w-10 h-10 rounded-full border flex items-center justify-center font-semibold">
                    {post.substring(0, 1)}
                </div>
                <div className="col-span-9">
                    <p className="text-gray-800">{post}</p>
                </div>
                <div className="col-span-2">
                    <button className="btn" onClick={()=>handleUpdatePost(_id)}>Edit</button>
                    <button className="btn bg-red-400 mt-1" onClick={()=>handleDelete(_id)}>Delete</button>
                </div>

            </div>
        </div>
    );
};

export default Post;