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


    return (
        <div>
            <h1 className="font-semibold text-lg">All Posts ({posts?.length})</h1>
            <div className="border m-4 rounded">
                {posts?.map(post=>(
                    <Post key={post._id} {...post} />
                ))}

            </div>
        </div>
    );
};

export default Posts;