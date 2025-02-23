import React from 'react'
import { Link } from 'react-router'
import { useAuth } from '/src/pages/Login-Signup/AuthContext'
function PostAuthor({authorID}) {
    const {user} = useAuth();
    return (
        <Link className='flex items-center gap-1' to={`/posts/user/${authorID}`}>
            <div className='flex items-center'>
                <img className='size-7 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s" alt="" />
            </div>
            <div className='text-xs'>
                <h5>By {user.name}</h5>
            </div>
        </Link>
    )
}

export default PostAuthor
