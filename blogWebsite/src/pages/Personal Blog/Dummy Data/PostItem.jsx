import React from 'react'
import { Link } from 'react-router'
import PostAuthor from './PostAuthor'
import { useMediaQuery } from 'react-responsive'
function PostItem({ postsID, category, title, description, authorID, thumbnail }) {
    const shortDescription = description.length > 150 ? description.substr(0, 50) + '...' : description
    const shortTitle = title.length > 30 ? title.substr(0, 5) + '...' : title
    const isLarge = useMediaQuery({ query: "(min-width: 786px)" });
    const isMedium = useMediaQuery({ query: "(min-width: 480px) and (max-width: 785px)" });
    const isSmall = useMediaQuery({ query: "(max-width: 480px)" });
    return (
        <article className={`${isSmall?"flex-col":""} rounded-2xl flex gap-3`}>
            <div>
                <img className='rounded-2xl aspect-video w-[10rem]' src={thumbnail} alt={title} />
            </div>
            {isSmall? "" :
            <div className='flex flex-col justify-center'>
                <Link to={`/PersonalPage/posts/${postsID}`}>
                    <h3 className='font-bold text-3xl '>{shortTitle}</h3>
                </Link>
                <p className='text-sm'>{shortDescription}</p>
                <div className='flex gap-2'>
                    <PostAuthor />
                    {/* <Link to={`/posts/category/${category}`} className='text-xs flex items-center border-2 rounded-xl px-1'>{category}</Link> */}
                </div>
            </div>}
        </article>
    )
}

export default PostItem
