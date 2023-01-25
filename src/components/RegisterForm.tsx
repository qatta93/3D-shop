import React, {useState} from 'react'
import { signIn } from 'next-auth/react'

export const RegisterForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  })

  const newUser = {
    name: formState.name,
    email: formState.email,
    password: formState.password,
  }

  const [errorMsg, setErrorMsg] = useState(null);
  const [register, setRegister] = useState(false)

  const [pageState, setPageState] = useState({
    error: '',
    processing: false
  })

  const handleFieldChange = (e) => {
    setFormState(old => ({ ...old, [e.target.id]: e.target.value }))
  }

  const formValidator = (input) => {
    const validateName = /[a-z]/ig.test(input.name);
    if(!validateName){
      return 'Please provide your name'
    }
    const validateEmail = /^\S+@\S+\.\S+$/ig.test(input.email);
    if(!validateEmail){
      return 'Please provide your valid email'
    }
    const validatePassword = /[0-9a-zA-Z]{8,}$/ig.test(input.password);
    if(!validatePassword){
      return 'Your password needs to have minimum 8 characters'
    }
    const validatePasswordRepeat = input.password === input.repeatPassword;
    if(!validatePasswordRepeat){
      return 'Your passwords are not the same'
    }
    return true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newUser)
    if(formValidator(formState) === true){
      setPageState(old => ({...old, processing: true, error: ''}))
      signIn('credentials', {
          ...newUser,
          redirect: false
      }).then(response => {
          console.log(response)
          if (response.ok) {
            setFormState({name: '', email: '', password: '', repeatPassword: ''})
            setRegister(true)
          } else {
            setPageState(old => ({ ...old, processing: false, error: response.error }))
          }
      }).catch(error => {
          setPageState(old => ({...old, processing: false, error: error.message ?? "Something went wrong!"}))
      })
      return
    }
    return setErrorMsg(formValidator(formState))
  }

  return (
    <form className='w-full px-4 text-slate-800'>
      <input type="text" id="name" name="name" placeholder='Name *' onChange={handleFieldChange} value={formState.name} className='shadow-inner text-slate-300 w-full p-3 text-center border-solid border-[1px] border-indigo-50 font-light'/>
      <input type="email" id="email" name="email" placeholder='Email address *' onChange={handleFieldChange} value={formState.email} className='shadow-inner text-slate-300 w-full p-3 mt-2 text-center border-solid border-[1px] border-indigo-50 font-light'/>
      <input type="password" id="password" name="password" placeholder='Password *' onChange={handleFieldChange} value={formState.password} className='shadow-inner text-slate-300 w-full p-3 text-center border-solid border-[1px] border-indigo-50 mt-2 font-light'/>
      <input type="password" id="repeatPassword" name="repeatPassword" placeholder='Repeat password *' onChange={handleFieldChange} value={formState.repeatPassword} className='shadow-inner text-slate-300 w-full p-3 text-center border-solid border-[1px] border-indigo-50 mt-2 font-light'/>
      <button type="submit" className='shadow-xl shadow-slate-200 w-full p-3 text-center mt-3 mb-8 border-solid border-[1px] border-indigo-50 text-slate-500 font-medium' onClick={handleSubmit}>REGISTER</button>
      {errorMsg !== null && <p className='text-rose-700 text-center mb-8'>{errorMsg}</p>}
      {register === true && 
      <>
        <p className='text-emerald-500 text-center mb-2'>Your account has been created!</p>
        <p className='text-emerald-500 text-center mb-2'>Now you are signed in.</p>
      </>}
    </form>
  )
}
