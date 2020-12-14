import React from "react";

import useFormValidation from './useFormValidation';
import validateLogin from './validateLogin';


const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
}



function Login(props) {

  const { handleChange, handleSubmit, handleBlur, values, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validateLogin);
  const [login, setLogin] = React.useState(true);

  return (
    <div>
      <h2 className='mv3'>{login ? 'login' : 'create account'}</h2>
      <form onSubmit={ handleSubmit } className="flex flex-column">
        {!login &&
                <input type="text"
                
                value={values.name}
                placeholder="your name"
                autoComplete="off"
                onChange={ handleChange }
                onBlur = { handleBlur }
                name="name"
                />
        }

        <input type="email"
        className={errors.email && 'error-input'}
        value={values.email}
        placeholder="your email"
        autoComplete="off"
        onChange={ handleChange }
        onBlur = { handleBlur }
        name="email"
        />
        {errors.email && <p className='error-text'>{errors.email}</p>}
        <input type="password"
        className={errors.password && 'error-input'}
        value={values.password}
        placeholder="choose a secure password"
        onChange={handleChange}
        name="password"
        />
        {errors.password && <p className='error-text'>{errors.password}</p>}
        <div className="flex mt3">
          <button className="pointer button mr2" type="submit" disabled={isSubmitting} style={{ background: isSubmitting ? 'grey' : 'orange'}}>submit</button>
          <button className="pointer button mr2" type="button" onClick={()=>setLogin(prevLogin => !prevLogin)}>
            {login ? 'need to create and account' : 'already have an account'}
            </button>
        </div>
      </form>
    </div>
  )
}

export default Login;
