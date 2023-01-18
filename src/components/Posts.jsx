import React, {useEffect} from 'react';
import {getAllPosts} from "../store/actions";
import {useDispatch, useSelector} from "react-redux";
import Post from "./Post"

const Posts = () => {
    const dispatch = useDispatch()
    const {posts} = useSelector(state=>state.postState)


    useEffect(()=>{

        dispatch(getAllPosts())

    }, [])

    return (
        <div>
            <h1 className="font-semibold text-lg">All Posts</h1>
            {posts?.map(post=>(
                <Post key={post_id} {...post} />
            ))}

        </div>
    );
};

export default Posts;