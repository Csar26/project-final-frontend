
export default function ModalWithForm{

  return(


<form className='login_form'>
      <p className='login-welcome'>Sing in</p>
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
  );
}