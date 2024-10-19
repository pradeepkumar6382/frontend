import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Breadcrumbs, Grid} from '@mui/material';
import server from '../server';
import {useOne} from "useone-react"
 
const MyCourses=()=>{
  const [commondata,setcommondata]= useOne( "categories",[])
  const [data,setdata]=useState([])
  const hi=async()=>{
            await server.post('/courses').then(res=>{
                setdata(res.data[0])
                setcommondata(res.data[1])
            })
        }
    useEffect(()=>{  
        hi()
    },[])
const handledelete=async(e)=>{
 await server.post('/coursesdelete',{course_id:e}).then(res=>{
    if(res.data==="success"){
      hi()
    }
})
}

    return (
        <>
        <div className="coursemain" style={{ margin: "31px 0px 0px -19px" }}>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" to={'/courses'}  style={{color:"#BF40BF"}}  >
                My courses
              </Link>

              <Link underline="hover" to={'/courses'}  style={{color:"#BF40BF"}}  >
              ALL Courses
              </Link>
            </Breadcrumbs>
    
            </div>
            </div>

                  <br></br>
                  <br></br>
                  <br></br>

            <Grid container spacing={2}>

            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              {data.map((course) => (
                <Card key={course._id} sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={`http://localhost:8000/getphoto/${course?course.image.split('\\').pop():''}` } 
                    title={course.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {course.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {course.description}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Category: {course.category}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" style={{background:"#BF40BF", color:"white"}} >View Course</Button>
                    <Button size="small" onClick={()=>handledelete(course.course_id)} style={{background:"#BF40BF" , color:"white"}}>Delete Course</Button>
                  </CardActions>
                </Card>
              ))}
              
         

            </div> 
            </Grid>

            <br></br>
            <Button component={Link} to="/newcourses" style={{ background: "#BF40BF", color: "white" }}>
      Create New Course
    </Button>
          </>   );
    
}

export default MyCourses