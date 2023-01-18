import React, {useState} from 'react';


const AddPost = () => {

    const [postData, setPostData] = useState({
        post: ""
    })


    function handleChange(e){
        const {name, value} = e.target
        setPostData((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()


     }


    return (
        <div className="py-4">
            <form action="">
                <div className="flex flex-col">
                    <label htmlFor="" className="text-base font-medium">Post</label>
                    <textarea name="post" onChange={handleChange} placeholder="Enter Post" className="bg-white px-4 py-2 border border-gray-600 rounded"/>
                </div>
                <button className="btn mt-2">Submit</button>
            </form>
        </div>
    );
};

export default AddPost;