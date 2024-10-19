import React, { useState, useEffect } from 'react';
import { Box, Grid, TextField, Button, Typography, MenuItem, Select,Breadcrumbs } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import {useOne} from "useone-react"
import server from '../server';

const CreateCourseForm = () => {
    const [data,setdata]=useState({})
    const [commondata,setcommondata]= useOne( "categories")
    console.log(commondata)
    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
      
         setdata((prev) => ({
          ...prev,
          [name]: value,  
        }));
      };
      
  console.log(data)

  const handlechangefile = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const newfile = new File([file], file.name, { type: file.type });

      const formData = new FormData();
      formData.append('file', newfile);


      await server.post('/images', formData).then(res => {
        console.log(res.data) 
        setdata(prevState => ({
          ...prevState, 
            image: res.data.filePath 
        }));
      })
    }
  }
  const navigator=useNavigate()
  const handlesubmit = async () => {
    try {
        if(data.image && data.title ){
            const res = await server.post('/publish', { data: data });

         if (res.status >= 200 && res.status < 300) {
             navigator('/courses');
        } else {
             
            alert('Failed to publish course. Please try again.');
        } 
        }else{
            alert("All details are necessary")
        }
       
    } catch (error) {
        console.error("Error in handlesubmit:", error);
     }
};

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
              <Link underline="hover" to={'/newcourses'}  style={{color:"#BF40BF"}}  >
                Create new course
              </Link>
            </Breadcrumbs>
            </div>
            </div>

                  <br></br>
                  <br></br>
                  <br></br>
 
            
                <Box sx={{ padding: '20px' }}>
 
      <Box sx={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <Button variant="outlined">Create your course</Button>
      </Box>
 
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            Course Information
          </Typography>
   
          <TextField
            fullWidth
            label="Title"
            placeholder="e.g. Introduction to Data Analysis"
            margin="normal"
            name="title"
            value={data.title}
            onChange={(e)=>handlechange(e)}
          />

  
                <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Select fullWidth defaultValue="" label="Category" onChange={handlechange} name='category_id'>
                    {commondata.map(item => (
                        <MenuItem key={item[0]} value={item[1]}>{item[0]}</MenuItem>
                    ))}
                    </Select>
                </Grid>
                </Grid>


         
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={4}
            placeholder="Description"
            margin="normal"
            name='description'
            value={data.description}
            onChange={handlechange}
          />

    
          <Typography variant="h6" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <TextField
            fullWidth
            label="e.g. Do you offer 1 on 1 calls"
            margin="normal"
            name='faq'
            onChange={handlechange}
          />
          <Box sx={{ marginTop: '20px' }}>
            <Button variant="outlined">Save as Draft</Button>
            <Button variant="contained" sx={{ marginLeft: '10px' }} onClick={handlesubmit}>
              Publish
            </Button>
          </Box>
        </Grid>

 
        <Grid item xs={12} md={4}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h6">Cover Image</Typography>
            <Box
              sx={{
                width: '100%',
                height: '200px',
                border: '2px dashed grey',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
                {data.image? (
  <img 
    src={`http://localhost:8000/getphoto/${data.image.split('\\').pop()}`} 
    alt="Uploaded Preview" 
    style={{ width: '100px', height: '100px' }} 
  />
):
            <Button variant="contained" component="label" className='btnlef'>
                        Add Photo
                        <input
                          type="file"
                          hidden
                          name='image'
                          onChange={handlechangefile}
                          accept='image/jpeg,image/png'
                        />
                      </Button>}
            </Box>
          </Box>

          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h6">Sales Video</Typography>
            <Box
              sx={{
                width: '100%',
                height: '200px',
                border: '2px dashed grey',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button variant="contained">Upload</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
</>
  );
};

export default CreateCourseForm;
