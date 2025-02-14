import React from 'react'
import { DUMMY_DATA  } from './data'
import { useState } from 'react'
import PostItem from './PostItem'
function AuthorPosts() {
    const [posts, setPosts] = useState(DUMMY_DATA)
    return (
        <section className='flex flex-col gap-3'>
           { posts.length > 0?
            posts.map(({id , thumbnail , category , title , description , authorID}) => <PostItem
            key={id} postsID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID}    /> )
           : <h2>NO DATA FOUND</h2>}
        </section>
    )
}

export default AuthorPosts
