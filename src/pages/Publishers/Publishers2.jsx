import React, {Fragment, useContext} from 'react';
import {PublishersContext} from './../../context/PublishersContext';
import Grid from "@material-ui/core/Grid";
//import CollectionCard from './../../components/Collection/CollectionCard/CollectionCard.component';
import ProgressBar from "../../components/Common/ProgressBar/ProgressBar.component";
import image from "./aldo.jpg"

const About = () => {
  const {publishers} = useContext(PublishersContext);
  return ( 
    <Fragment>
      <h1 className="text-center">About</h1>
      <br></br>
     <center> <img src={image} className="avatar" alt="center" height="200" width="200"></img></center>
      <h3 align="center">Haloooo...!! Perkenalkan Aku Aldo Serena S</h3>
      <p align="center">Di sini kubuat sebuah Aplikasiy yang berisi tentang
      game informasi, jadi disini akan terdapat informasi mengenai genre game, platform
      yang digunakan, dan juga terdapat perusahaan publisher yang menerbitkan game ini </p>
      {
        publishers ?
        <Grid container spacing={2}>
          
        </Grid>
        : <ProgressBar />
      }
    </Fragment>
  );
}
 
export default About;