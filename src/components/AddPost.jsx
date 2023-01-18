import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addPost, updatePost} from "../store/actions";


const AddPost = () => {

    const {updatePostId, posts}  =useSelector(state=>state.postState)
    const dispatch = useDispatch()
    const [postData, setPostData] = useState({
        post: ""
    })

    // observer state is it need to update or not...
    // when update completed this value should be -1, unless it always will do update
    useEffect(()=>{
        if(updatePostId !== -1){
            let updatedPost = posts.find(post=>post._id === updatePostId)
            setPostData((prevState)=>({
                ...prevState,
                ...updatedPost
            }))
        }
    }, [updatePostId])


    // input field value change handler
    function handleChange(e){
        const {name, value} = e.target
        setPostData((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }

    // add and update post
    function handleSubmit(e){
        e.preventDefault()

        // use some input validation
        if(!postData.post){
            alert("Please give post content")
            return
        }

        if(updatePostId === -1){
            /// add new post
            dispatch(addPost(postData))
        } else{
            // update post
            dispatch(updatePost(updatePostId, postData))
        }

        setPostData({})
        // force clear textarea value when submit form
        e.target.post.value = null
     }


    return (
        <div className="py-4">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-base font-semibold">Add Post</label>
                    <textarea
                        name="post"
                        value={postData.post}
                        onChange={handleChange}
                        placeholder="Enter Post"
                        className="bg-white px-4 py-2 border border-gray-600 rounded"
                    >{postData.post}</textarea>
                </div>
                <button className="btn mt-2">Submit</button>
            </form>
        </div>
    );
};

export default AddPost;