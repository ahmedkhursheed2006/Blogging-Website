import React, { useState, useEffect } from "react";
import { getPosts } from "../../../api/api";
import PostItem from "./PostItem";
import { useMediaQuery } from "react-responsive";

function Data({ category }) {  
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

  
  const filteredPosts = posts.filter((post) => post.category === category);

  return (
    <section className={`${isSmall ? "" : "flex-col"} flex gap-3`}>
      {filteredPosts.length > 0 ? (  
        filteredPosts.map(({ _id, thumbnail, category, title, description, authorID }) => (
          <PostItem
            key={_id}
            postsID={_id}
            thumbnail={`http://localhost:5000${thumbnail}`}
            category={category}
            title={title}
            description={description}
            authorID={authorID}
          />
        ))
      ) : (
        <h2>NO DATA FOUND</h2>
      )}
    </section>
  );
}

export default Data;
