import React from 'react'
import { useState, useEffect } from 'react'
import PostItem from './PostItem'
import { getPosts } from '../../../api/api';
import { useMediaQuery } from 'react-responsive';
import { useAuth } from '../../Login-Signup/AuthContext';

function AuthorPosts() {
    const {user} = useAuth()
    const [posts, setPosts] = useState([]); 
    const isSmall = useMediaQuery({ query: "(max-width: 480px)" });
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getPosts();
                console.log(data)
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);
    const filteredAuthor = posts.filter((post) => post.authorName === user.name);
    return (
        <section className={`${isSmall ? "" : "flex-col"} flex gap-3`}>
      {filteredAuthor.length > 0 ? (  
        filteredAuthor.map(({ _id, thumbnail, category, title, description, authorID, authorName }) => (
          <PostItem
            key={_id}
            postsID={_id}
            thumbnail={`http://localhost:5000${thumbnail}`}
            category={category}
            title={title}
            description={description}
            authorID={authorID}
            authorName={authorName}
          />
        ))
      ) : (
        <h2>NO DATA FOUND</h2>
      )}
    </section>
    )
}

export default AuthorPosts
