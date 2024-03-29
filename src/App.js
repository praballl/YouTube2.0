import React from 'react'
import { Route,Routes,BrowserRouter} from 'react-router-dom'
import { Box } from '@mui/material'
import {Navbar , Feed , VideoDetail, ChannelDetail , SearchFeed} from './components'
const App = ()=>(
    <BrowserRouter>
         <Box sx={{backgroundColor:'#000'}}>
            <Navbar />
            <Routes>
            <Route path='/' exact element={<Feed />}/>
            <Route path='/video/:id' exact element={<VideoDetail />}/>
            <Route path='/channel/:id' exact element={<ChannelDetail />}/>
            <Route path='/search/:searchTearm' exact element={<SearchFeed />}/>
            </Routes>
         </Box>
    </BrowserRouter>
)
    
  


export default App
