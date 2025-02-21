import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createPost } from "/src/api/api.js";
import { useMediaQuery } from "react-responsive";
function CreatePost() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const Post_Categories = ["Food,Personal", "DIY,Personal", "Lifestyle,Personal", "Fitness,Personal", "Business", "Education", "Company", "Uncategorized"];

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        title,
        category,
        description,
        thumbnail,
      };

      const response = await createPost(postData);
      console.log("Post Created:", response);
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };

  const isLarge = useMediaQuery({ query: "(min-width: 786px)" });
  const isMedium = useMediaQuery({ query: "(min-width: 480px) and (max-width: 785px)" });
  const isSmall = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <section className="w-full h-screen flex justify-center bg-[#ffecd1]">
      <div className={`${isSmall?"w-9/10":"w-1/2"} h-full`}>
        <form className="w-full h-full flex flex-col gap-3" onSubmit={handleSubmit}>
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
            className="h-80 rounded-lg ql-container"
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
          />
          <input className='bg-white rounded-lg p-2 mt-10 cursor-pointer  ' type="file" onChange={e => setThumbnail(e.target.files[0])} accept='.png, .jpg, .jpeg , .webp' />
          <button className="border-2 border-red-600 bg-red-600 text-white rounded-2xl cursor-pointer" type="submit">
            Create
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreatePost;
