import React from 'react';
import Logo from '../Images/Novabeat_logo.svg';
import BorderButton from '../Images/border_button.svg';
import AboutImage from '../Images/about_image.svg';


export default function About(){
  
  return(
    
  <about className='about'>


    <div className='place-logo'>
      <img src={Logo} alt='Logo Novabeat' className='logo'/>

    </div>

    <p className='about-description'> 
      Novabeat is your go-to platform for discovering the stories behind the music. 
      Our mission is to provide in-depth information about the artists who shape 
      the sound of today. Here, you'll find detailed profiles, from their musical 
      journey and influences to their latest works and upcoming projects. Whether 
      you're a longtime fan or new to their music, Novabeat offers a closer look 
      at the artists you love, bringing their stories and sounds to life</p>

      <img src={AboutImage} alt='Logo Novabeat' className='about_image'/>


    {/*<div className= 'about_about' src={BorderButton}>
  <img src={BorderButton} alt ='button' about className='button-about'/>
   Join Now
 </div>
 <div className= 'about_signup' src={BorderButton}>
 
  <p className= 'about_question'>Are you a member? Sign in here</p>
 </div>*/}

  </about>
  );
}
