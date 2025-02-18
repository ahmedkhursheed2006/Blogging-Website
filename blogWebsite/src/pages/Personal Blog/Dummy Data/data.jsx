import React, { useState , useEffect } from 'react'
import { getPosts } from '../../../api/api';
import PostItem from './PostItem'

function Data() {
    
  const [posts, setPosts] = useState([]); 
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

    
    return (
        <section className='flex flex-col gap-3'>
           { posts.length > 0?
            posts.map(({id , thumbnail , category , title , description , authorID}) => <PostItem
            key={id} postsID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID}    /> )
           : <h2>NO DATA FOUND</h2>}
        </section>
    )
}

export default Data
