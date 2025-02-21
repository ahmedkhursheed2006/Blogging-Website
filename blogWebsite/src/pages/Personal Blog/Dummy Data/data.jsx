import React, { useState , useEffect } from 'react'
import { getPosts } from '../../../api/api';
import PostItem from './PostItem'
import { useMediaQuery } from 'react-responsive';

function Data() {
    const isLarge = useMediaQuery({ query: "(min-width: 786px)" });
    const isMedium = useMediaQuery({ query: "(min-width: 480px) and (max-width: 785px)" });
    const isSmall = useMediaQuery({ query: "(max-width: 480px)" });
    
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
        <section className={`${isSmall?"":"flex-col"} flex gap-3`}>
           { posts.length > 0?
            posts.map(({id , thumbnail , category , title , description , authorID}) => <PostItem
            key={id} postsID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID}    /> )
           : <h2>NO DATA FOUND</h2>}
        </section>
    )
}

export default Data
