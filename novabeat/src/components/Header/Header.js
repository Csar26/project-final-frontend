
import Logo from '../Images/logo_Novabeat.svg';
import BorderButton from '../Images/border_button.svg';
//import { Link } from "react-router-dom";


export default function Header(){
  
  return(
  <header className='header'>
 <div className= 'header_login' src={BorderButton}>
  <img src={BorderButton} alt ='button' login className='button-login'/>
  
   Join Now
   
 </div>
    <div className='place-logo'>
      <img src={Logo} alt='Logo Novabeat' className='logo'/>

    </div>
    <form className='login_form'>
    <label htmlFor="User"></label>
      <input
      required
      placeholder='User Name'
      name='name'
      type='type'
      className='Login__data'
      />
      <span className="login__divider"></span>
      <label htmlFor="Email address"></label>
      <input
      required
      placeholder='Email address'
      name='email'
      type='email'
      className='Login__data'
      />
      <span className="login__divider"></span>
      <label htmlFor="Password"></label>
      <input
      required
      placeholder='Password'
      name='password'
      type='password'
      className='Login__data'
      />
      <span className="login__divider"></span>
      <label htmlFor="Password"></label>
      <input
      required
      placeholder='Confirm password'
      name='password'
      type='password'
      className='Login__data'
      />

    </form>



  </header>
  );
}