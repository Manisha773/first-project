
import { useState, useEffect } from 'react';

const UseSignUpForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const handleChange = (e) => {
   const name=e.target.name;
   const value=e.target.value;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
 
    const res= await fetch("http://localhost:8020/app/signup",{
            method:'POST',headers:{
                "Content-Type":"application/json"
            },body:JSON.stringify({
                username:values.username,
                email:values.email,
                password:values.password,
            })
        });
        const data=await res.json();
        if(res.status===422||!data){
          console.log(data)
            window.alert("invalid credential")
        }
        else{
            window.alert('register added successfully')
            console.log("user added successfully")
            
        }
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default UseSignUpForm;