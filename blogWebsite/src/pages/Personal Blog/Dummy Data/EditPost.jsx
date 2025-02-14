import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function EditPost() {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('Uncategorized')
    const [description, setDescription] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const Post_Cateogry = ["Personal", "Business" , "Education" , "Company" , "Uncategorized"]

    const modules = {
        toolbar: [
            [{'header' : [1,2,false]}],
            ['bold' , 'italic' , 'underline' , 'strike' , 'blockquote'],
            [{'list' : 'ordered'}, {'list' : 'bullet'}, {'indent' : '-1'}, {'indent' : '+1'},],
            ['link', 'image']
            ['clean']
        ]
    } 

    const formats = [
        'header',
        'bold' , 'italic' , 'underline' , 'strike' , 'blockquote',
        'list', 'bullet','indent',
        'link', 'image'
    ]


    return (
        <section className='w-full h-screen flex justify-center bg-[#ffecd1]'>
            <div className='w-1/2 h-full '>
                <form className='w-full h-full flex flex-col gap-3'>
                    <input className='bg-white p-2 rounded-lg capitalize outline-0' type="text" placeholder='title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
                    <select className='bg-white p-2 rounded-lg capitalize outline-0 text-gray-500' name="category" value={category} onChange={e=> setCategory(e.target.value)}>
                        {
                            Post_Cateogry.map(cat => <option key={cat} >{cat}</option>)
                        }
                    </select>
                        <ReactQuill className='h-80 rounded-lg ql-container ' modules={modules} formats={formats} value={description} onChange={setDescription} /><br />
                        <input className='bg-white rounded-lg p-2' type="file" onChange={e => setThumbnail(e.target.files(0))} accept='png, jpg, jpeg' />
                        <button className='border-2 border-red-600 bg-red-600 text-white rounded-2xl' type='submit' >Update</button>
                </form>
            </div>
        </section>
    )
}

export default EditPost
