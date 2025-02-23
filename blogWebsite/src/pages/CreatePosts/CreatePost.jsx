import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createPost } from "/src/api/api.js";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router";
function CreatePost() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState();
  const Post_Categories = [
    // Uncategorized
     "Uncategorized",
    // Personal Categories
    "Food",
    "DIY",
    "Lifestyle",
    "Fitness",
    // Business Categories
    "Marketing",
    "Management",
    "Finance",
    "Technology",
    // Education Categories
     "Learning",
     "Platforms",
     "Skill",
     "Tools",
    // Company Categories
    "Guides",
    "Insights",
    "Leadership",
    "News",
    "Reviews",];

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("thumbnail", thumbnail);
      formData.append("authorID", user.id)
      formData.append("authorName", user.name)
      const response = await fetch("http://localhost:5000/posts/create", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      console.log("Post Created:", data);
  
      navigate("/PersonalPage");
    } catch (error) {
      console.log("Error creating post:", error.message);
    }
  };
  


  const isLarge = useMediaQuery({ query: "(min-width: 786px)" });
  const isMedium = useMediaQuery({ query: "(min-width: 480px) and (max-width: 785px)" });
  const isSmall = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <section className="w-full h-screen flex justify-center bg-[#ffecd1]">
      <div className={`${isSmall ? "w-9/10" : "w-1/2"} h-full`}>
        <form className="w-full h-full flex flex-col gap-3 py-5" onSubmit={handleSubmit}>
          <input
            className="bg-white p-2 rounded-lg capitalize outline-0"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <select
            className="bg-white p-2 rounded-lg capitalize outline-0 text-gray-500"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Post_Categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <ReactQuill
            className="h-70 rounded-lg ql-container overflow-y-scroll no-scrollbar"
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
          />
          <input className='bg-white rounded-lg p-2 cursor-pointer ' type="file" onChange={e => setThumbnail(e.target.files[0])} accept='.png, .jpg, .jpeg , .webp' />
          <button className="border-2 border-red-600 bg-red-600 text-white rounded-2xl cursor-pointer" type="submit">
            Create {console.log("Thumbnail received in request:", thumbnail)
            }
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreatePost;
