import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import PostItem from './PostItem'

function AuthorPosts() {
    const { authorID } = useParams();
    const [posts, setPosts] = useState([]); 
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchUserPosts = async () => {
          try {
              const response = await fetch(`http://localhost:5000/posts/user/${authorID}`);
              const data = await response.json();
              setPosts(data);
          } catch (error) {
              console.error("Error fetching posts:", error);
          } finally {
              setLoading(false);
          }
      };

      fetchUserPosts();
  }, [authorID]);
    if (loading) {
        return <h2>Loading...</h2>;
    }

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
