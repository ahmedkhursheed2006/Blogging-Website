import React from 'react'
import { Link } from 'react-router'
import PostAuthor from './PostAuthor'
import { useMediaQuery } from 'react-responsive'
import DOMPurify from 'dompurify'
function PostItem({ postsID, title, description, thumbnail }) {
    const shortDescription = description.length > 150 ? description.substr(0, 50) + '...' : description
    const shortTitle = title.length > 30 ? title.substr(0, 5) + '...' : title
    const isLarge = useMediaQuery({ query: "(min-width: 786px)" });
    const isMedium = useMediaQuery({ query: "(min-width: 480px) and (max-width: 785px)" });
    const isSmall = useMediaQuery({ query: "(max-width: 480px)" });


    const safeHTML = DOMPurify.sanitize(shortDescription);
    return (
        <article className={`${isSmall ? "flex-col" : ""} rounded-2xl flex gap-3`}>
            <div>
                <img className='rounded-2xl aspect-video w-[18rem]' src={thumbnail} alt={title} />
            </div>
            {isSmall ? "" :
                <div className='flex flex-col'>
                    <Link to={`/PersonalPage/posts/${postsID}`}>
                        <h3 className='font-bold text-2xl '>{shortTitle}</h3>
                    </Link>
                    <p dangerouslySetInnerHTML={{__html:safeHTML}} ></p>
                    <div className='flex gap-2'>
                        <PostAuthor />

                    </div>
                </div>}
        </article>
    )
}

export default PostItem
