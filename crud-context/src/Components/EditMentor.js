import React from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useParams } from 'react-router-dom';

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
      .number()
      .required().min(10),
  subject: yup
      .string()
      .required().min(1),
 
})
const EditMentor = ({mentor}) => {
  const params = useParams();
  const Index = mentor.findIndex((item) => item.id == params.id);
  const details = mentor[Index];

  const navigate = useNavigate();

  const formik = useFormik({
      initialValues: {
          id: details.id,
          name: details.name,
          email: details.email,
          age: details.age,
          contact: details.contact,
          subject:details.subject,
      },
      validationSchema: formvalidationSchema,
      onSubmit: (values) => {
          mentor.splice(Index, 1, values);
          navigate("/home1");
      },
  })

  return (
    <>
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <h2 className="text-center my-5">Edit Student Details</h2>
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
          <input
            className="form-control"
            type="number"
            id="Textarea"
            placeholder="Phone Number"
            name="contact"
            value={formik.values.contact}
            onChange={formik.handleChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="Input"
            placeholder="subject"
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      <div className="c-3">
        <button className="btn btn-primary create-btn" >
          Update
        </button>
      </div>
    </form>
  </>
  )
}

export default EditMentor;
