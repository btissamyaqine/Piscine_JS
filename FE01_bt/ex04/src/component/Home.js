import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { blue,green, red, yellow, deepPurple } from '@mui/material/colors';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      outlined: {
        main: '#f44336',
      },
    },
  });

  return (
    <>

    
    <Box sx={{ width: '100%' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
      <CssBaseline />
      <Container maxWidth="sm">
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <h2>Hi!</h2>
          <h1>I'm <span style= {{backgroundColor: '#FF0000', color:'#fff'}}>Btissam</span> </h1>
          <Typography>I'm competent and challangings web developer, 
              over the years, Enthusiastic and positive, 
              Passionate about new technologies. I has built up a diverse range of skills, 
              I also enjoy reading and Discover new traditions by traveling.Check out my developer projects portfolio.
          </Typography>
          <Button theme={theme} variant="outlined">Outlined</Button>
      </Container>
        
      </Grid>
      <Grid item xs={6}>
      <CssBaseline />
      <Container  sx={{textAlign: 'center', display: 'flex' }} maxWidth="sm">
      <ImageList sx={{ width: 600, height: 400, textAlign: 'center', display: 'flex' }} variant="masonry" cols={2} gap={5}>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1631377307475-9acfa929b062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </ImageListItem>
      </ImageList>
      </Container>
      </Grid>
    
    </Grid>
  </Box>
  <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={8}>
        <Container  maxWidth="sm">
        <h1>Competance :</h1>
        <Stack direction="row" spacing={8}>
        <Avatar sx={{ bgcolor: red[500], color: '#000', width: 100 }} variant="rounded">
        <StorageIcon /> SQL
        </Avatar>
        <Avatar sx={{ bgcolor: yellow[500],color: '#000', width: 100 }} variant="rounded">
          <JavascriptIcon /> <span>JS</span> 
        </Avatar>
        <Avatar sx={{ bgcolor: green[500], color: '#000', width: 100 }} variant="rounded">
         MongooDB
        </Avatar>
        <Avatar sx={{ bgcolor: blue[500],color: '#000', width: 100 }} variant="rounded">
           <span>ReactJS</span> 
        </Avatar>
       
        <Avatar sx={{ bgcolor: deepPurple[500],color: '#000', width: 100 }} variant="rounded">
           <span>PHP</span> 
        </Avatar>
      </Stack>
        </Container>
        </Grid>
      </Grid>
    </Box>
    
    <Box sx={{ width: '100%' }}>
    
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Container><h1>Project</h1></Container>
      
        <Grid item xs={6}>
        <Container  maxWidth="sm">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://btissamyaqine.github.io/img/project-preview/chat-app-react.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Chat App
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Building a chat app with Socket.io and React rocket, Just to give a bit of context, 
          point_downpoint_down you send a message to a person or a group, they see the message and reply back.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
      </Container>
        </Grid>
        <Grid item xs={6}>
        <Container  maxWidth="sm">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://btissamyaqine.github.io/img/project-preview/chat-app-react.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Chat App
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Building a chat app with Socket.io and React rocket, Just to give a bit of context, 
          point_downpoint_down you send a message to a person or a group, they see the message and reply back.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
      </Container>
      
        </Grid><Grid item xs={6}>
        <Container  maxWidth="sm">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://btissamyaqine.github.io/img/project-preview/chat-app-react.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Chat App
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Building a chat app with Socket.io and React rocket, Just to give a bit of context, 
          point_downpoint_down you send a message to a person or a group, they see the message and reply back.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
      </Container>
      
        </Grid>
        <Grid item xs={6}>
        <Container  maxWidth="sm">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://btissamyaqine.github.io/img/project-preview/chat-app-react.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Chat App
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Building a chat app with Socket.io and React rocket, Just to give a bit of context, 
          point_downpoint_down you send a message to a person or a group, they see the message and reply back.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
      </Container>
      
        </Grid>
        
      </Grid>
    </Box>
  {/* <Box sx={{ width: '100%' }}>
  <Grid item xs={6}>
      <Container  maxWidth="sm">
      <h1> Competance :</h1>

      <Stack direction="row" spacing={8}>
        <Avatar sx={{ bgcolor: red[500], color: '#000', width: 100 }} variant="rounded">
        <StorageIcon /> SQL
        </Avatar>
        <Avatar sx={{ bgcolor: yellow[500],color: '#000', width: 100 }} variant="rounded">
          <JavascriptIcon /> <span>JS</span> 
        </Avatar>
        <Avatar sx={{ bgcolor: green[500], color: '#000', width: 100 }} variant="rounded">
         MongooDB
        </Avatar>
        <Avatar sx={{ bgcolor: blue[500],color: '#000', width: 100 }} variant="rounded">
           <span>ReactJS</span> 
        </Avatar>
       
        <Avatar sx={{ bgcolor: deepPurple[500],color: '#000', width: 100 }} variant="rounded">
           <span>PHP</span> 
        </Avatar>
      </Stack>
        
      </Container>
      
      <Grid item xs={6}>
      <h1> Projects: </h1>
      <Container  maxWidth="sm">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://btissamyaqine.github.io/img/project-preview/chat-app-react.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Chat App
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Building a chat app with Socket.io and React rocket, Just to give a bit of context, 
          point_downpoint_down you send a message to a person or a group, they see the message and reply back.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
      </Container>
      </Grid>
      <Grid item xs={6}>
          <Container  maxWidth="sm">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://btissamyaqine.github.io/img/project-preview/chat-app-react.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Chat App
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Building a chat app with Socket.io and React rocket, Just to give a bit of context, 
              point_downpoint_down you send a message to a person or a group, they see the message and reply back.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
          </Container>
      </Grid>
      </Grid>
  </Box> */}
  </>
  
  )
}

export default Home;