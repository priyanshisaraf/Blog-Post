import React,{useEffect, useState} from 'react'
import './CreateBlog.css'
import { Button } from '@mui/material';
import axios from 'axios';

function CreateBlog() {
const [title,setTitle]=useState('');
const [content,setContent]=useState('');
const [image,setImage]=useState('');
const [author,setAuthor]=useState('');
const [date_created,setDate_created]=useState('');
const [data,setData]=useState([]);
const [msg,setMsg]=useState('');

useEffect(()=>{
    axios
    .get('http://localhost:3001/blogs')
    .then((res)=>{
        console.log("asdasd", res.data);
        setData(res.data);
    })
    .catch((err)=>{
        console.log(err);
        setMsg('There is some error.');
    })
},[])

const handleReset = () => {
    setTitle('');
    setContent('');
    setImage('');
    setAuthor('');
    setDate_created('');
    setMsg('');
  };
const handleSubmit=(e)=>{
    e.preventDefault();
    const id=data.length;
    axios
    .post('http://localhost:3001/blogs',{id,name:title,image,date_created,author,content})
    .then((res)=>{
        console.log(res.data);
        setMsg('Blog created!'); 
        setData((prev)=> [...prev, res.data]);
    })
    .catch((err)=>{
        console.log(err);
        setMsg('Error creating blog.');
    })
}
const handleView=()=>{
    return window.location.href = '/page2'; 
}
  return (

    <div className='grid-container'>
        <div className='grid-item header'>
            <h1 className='my-blogs'>MyBlogs</h1>
            <h1 className='title'>{title}</h1>
            <Button className='view-btn' variant='contained' onClick={handleView}>Go to Blogs</Button>
        </div>
        <div className='grid-item content-area'>
            <input type='text' className="title-input" value={title} placeholder='Enter Title' onChange={(e)=>setTitle(e.target.value)}/>
            <input type='text' className="author-input" value={author} placeholder='Enter Author Name' onChange={(e)=>{setAuthor(e.target.value)}}/>
            <input type='text' className="date-input" value={date_created} placeholder='Enter Date' onChange={(e)=>{setDate_created(e.target.value)}}/>
            <input type='text' className="image-input" value={image} placeholder='Enter Image Url' onChange={(e)=>{setImage(e.target.value)}}/>
            <textarea className='content-input' value={content} placeholder="What's on your mind?" onChange={(e)=>{setContent(e.target.value)}}></textarea>
            <div className="buttons">
                <Button type="submit"  variant='contained' className="create-btn" color="primary" onClick={handleSubmit}>Create Blog</Button>
                <Button className="reset-btn" variant='contained' color="secondary" onClick={handleReset} >Reset Content</Button>
            </div>
            <div className='msg'>
            {msg && <h2>{msg}</h2>}
            </div>
        </div>
    </div>
  )
}

export default CreateBlog;
