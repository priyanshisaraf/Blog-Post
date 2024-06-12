import React,{useState,useEffect} from 'react'
import './Page2.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Page2() {
  const handleCreate=()=>{
    return window.location.href = '/create-blog'; 
  }
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
  return (
    <>
    <div className='container'>
    <h1 className='heading'>BLOGS</h1>
    <div className='grid'>
      {
        data.map((data,i)=>(
            <Link to={`/blog/${i}`} className='card' key={i}>
                <img src={data.image} alt='images' />
                <h2 className='name'>{data.name}</h2>
                <p className='author'>{data.author}</p>
                <p className='date_created'>{data.date_created}</p>
                </Link>
        ))
      }
    </div>
    <div  className="createBlog">
    <Button variant='contained' color="secondary" onClick={handleCreate} >Create your own Blog</Button>
    </div>
    </div>
    </>
  )
}

export default Page2
