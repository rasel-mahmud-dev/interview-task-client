import React, {useEffect} from 'react';
import {getAllPosts} from "../store/actions";
import {useDispatch, useSelector} from "react-redux";
import Post from "./Post"

const Posts = () => {
    const dispatch = useDispatch()
    const {posts} = useSelector(state=>state.postState)


    useEffect(()=>{
        // initially fetch all posts
        dispatch(getAllPosts())
    }, [])


    function handleSort(){
        dispatch({
            type: "SORTING_POSTS"
        })
    }


    return (
        <div>
            <div className="flex justify-between">
                <h1 className="font-semibold text-lg">All Posts ({posts?.length})</h1>
                <button className="btn" onClick={handleSort}>Sort</button>
            </div>
            <div className="border my-4 rounded">
                {posts?.map(post=>(
                    <Post key={post._id} {...post} />
                ))}

            </div>
        </div>
    );
};

export default Posts;