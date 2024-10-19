import React from 'react';
import { Container, Typography, Button, Grid, Paper, Box } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg">
       <Paper
        sx={{
          height: '80vh',
          backgroundImage: 'url(https://propluslogics.com/wp-content/uploads/aboutpage-img-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          p: 4,
        }}
      >
        <Box>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to ProPlus Logics
          </Typography>
          <Typography variant="h5" gutterBottom>
            Learn, grow, and master your skills with our premium courses.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Explore Courses
          </Button>
        </Box>
      </Paper>

       <Box sx={{ my: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Why Choose ProPlus Logics?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6">Expert Instructors</Typography>
              <Typography>
                Learn from industry professionals with years of experience.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6">Comprehensive Courses</Typography>
              <Typography>
                Access a variety of courses tailored to your learning goals.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6">Flexible Learning</Typography>
              <Typography>
                Learn at your own pace with lifetime access to course materials.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

       <Paper
        sx={{
          p: 6,
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
          mt: 6,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Ready to Start Learning?
        </Typography>
        <Typography variant="h6" gutterBottom>
          Join our community and start mastering new skills today.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Get Started Now
        </Button>
      </Paper>
    </Container>
  );
};

export default Home;
