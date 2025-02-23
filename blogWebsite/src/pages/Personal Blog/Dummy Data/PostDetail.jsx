import React, { useEffect, useState } from 'react'
import PostAuthor from "/src/pages/Personal Blog/Dummy Data/PostAuthor.jsx"
import { Link } from 'react-router'
import { useParams , useNavigate } from 'react-router'
import { getPostById } from '../../../api/api'
import DOMPurify from 'dompurify'
import {useAuth} from "/src/pages/Login-Signup/AuthContext.jsx"
function PostDetail() {

    const {user} = useAuth();
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
    const [allow, setAllow] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        if(posts.authorID === user.id || posts.authorName === user.name)
           { setAllow(true);}
        else
           { setAllow(false);}
    })
    useEffect(() => {
        const fetchPost = async () => {
            try {

                const data = await getPostById(id);
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            };

        };
        fetchPost();
    }, [id])

    const handledelete = async () => {
        try {
            const response = await fetch(`http://localhost:5000/posts/${id}`, {
                method: "DELETE",
            });
            navigate("/PersonalPage")
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    }
    const safeHTML = DOMPurify.sanitize(posts.description);
    return (
        <section className='bg-amber-100 h-screen'>
            <div className='bg-white w-[80%] h-full flex flex-col items-center m-auto px-10 py-5'>
                <div className='flex w-full justify-between'>
                    <PostAuthor authorID={posts.authorID} authorName={posts.authorName} />
                    {allow?
                    <div className='flex gap-3'>
                        <Link to={`/posts/user/edit/${id}`}><span className='flex items-center bg-green-600 rounded-[3px] px-5 py-1 text-white'>Edit</span></Link>
                        <Link><button onClick={handledelete} className='flex items-center bg-red-600 rounded-[3px] px-5 py-1 text-white cursor-pointer'>Delete</button></Link>
                    </div>
                    :""}
                </div>
                <div>
                    <h1 className='uppercase font-bold text-[3rem]'>{posts.title}</h1>
                </div>
                <div dangerouslySetInnerHTML={{ __html: safeHTML }} >

                </div>
            </div>


        </section>
    )
}

export default PostDetail
