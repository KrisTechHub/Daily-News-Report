import './App.css'
import NavMenu from './Components/NavMenu/NavMenu';
import NewsData from './Components/NewsData/NewsData';
import {
  Card, Button, CardBody,
  CardFooter,
  Typography } from "@material-tailwind/react";

function App() {
  return (
      <div className='container mx-auto max-w-screen-xl py-4'>
        <NavMenu/>
        <NewsData/>
      </div>
  )
}

export default App
