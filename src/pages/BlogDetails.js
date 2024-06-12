import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import './BlogDetails.css'
function BlogDetails() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3001/blogs')
    .then(
      (res)=>{setData(res.data)}
    )
    .catch(
      (err)=>{console.log(err)}
    )
  },[])
    const {index} =useParams();
    const blog=data[index];
    if(!blog){
        return(
            <h1>Blog not found</h1>
        )
    }
  return (
    <div className='container'>
        <h1 className='heading'>{blog.name}</h1>
        <p className='author'>{blog.author}</p>
        <p className='date_created'>{blog.date_created}</p>
        <img src={blog.image} className='main-img' alt='images'/>
        <div
        className="content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  )
}

export default BlogDetails
