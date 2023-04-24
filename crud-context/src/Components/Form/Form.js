import React from 'react'
import "./Form.css"
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";

const formvalidationSchema = yup.object({
  id: yup
      .number()
      .required(),
  name: yup
      .string()
      .required().min(4),
  email: yup
      .string()
      .required(),
  age: yup
      .string()
      .required(),    
  contact: yup
      .string()
      .required().min(10),
 
})
const Form = ({formList,setFormList}) => {
  

  const navigate = useNavigate();

  const formik = useFormik({
      initialValues: {
          id:"",
          name:"",
          email: "",
          contact: "",
      },
      validationSchema: formvalidationSchema,
      onSubmit: (values) =>  {
        console.log("form values", values);
        setFormList([...formList, values]);
        navigate("/home");
    },
  })


  return (
    <>
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <h2 className="text-center my-5">Add Student Details</h2>
        <div className="container">
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="Input"
              placeholder="Id"
              name="id"
              value={formik.values.id}
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="Input"
              placeholder="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="Input"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="Input"
              placeholder="Age"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
            />
            
          </div>
          <div className="form-group">
            <textarea
            type="text"
              className="form-control"
              id="Textarea"
              rows="3"
              placeholder="Phone Number"
              name="contact"
              value={formik.values.contact}
              onChange={formik.handleChange}
            ></textarea>
          </div>
        </div>
        <div className="c-3">
          <button type="submit" className="btn btn-primary create-btn" >
            Add
          </button>
        </div>
      </form>
    </>
  )
}

export default Form;