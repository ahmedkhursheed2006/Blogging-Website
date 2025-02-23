import React from 'react'
import { Link } from 'react-router'

function PostAuthor({authorID , authorName}) {
    
    return (
        <Link className='flex items-center gap-1' to={`/posts/user/${authorID}`}>
            <div className='flex items-center'>
                <img className='size-7 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s" alt="" />
            </div>
            <div className='text-xs'>
                <h5>By {authorName}</h5>
            </div>
        </Link>
    )
}

export default PostAuthor
