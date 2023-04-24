import React, { useState } from "react";
import Table from "./Components/Table/Table";
import './App.css';
import Form from "./Components/Form/Form";
import { Routes, Route } from "react-router-dom";
import EditUser from "./Components/Edit/EditUser";
import Login from "./Components/Login/Login";
import MentorTable from "./Components/MentorTable";
import CreateMentor from "./Components/CreateMentor";
import EditMentor from "./Components/EditMentor";
import Home from "./Components/Home";

function App() {
  const [formList, setFormList] = useState([
    {
      id: 1,
      name: "Karthik",
      email: "karthik@gmail.com",
      age: 24,
      contact: 8220889930,
    },
    {
      id: 2,
      name: "Dhamodharan",
      email: "dhamodharan@gmail.com",
      age: 24,
      contact: 9688776600,
      },
  ]);

const [mentor,setMentor] = useState([
  {
    id:1,
    name:"Jagan",
    email:"jagan@gmail.com",
    age: 47,
    subject:"English",
    contact:9444362870,
  },
  {
    id:2,
    name:"Priya",
    email:"priya@gmail.com",
    age: 42,
    subject:"Computer",
    contact: 6344112200,
  }
])

  return (
    <div>
      <Routes>
      <Route
          path="/"
          element={<Login/>}
        />
        <Route
          path="/home"
          element={<Table formList={formList} setFormList={setFormList} />}
        />
        <Route
          path="/main"
          element={<Home/>}
        />
        <Route
          path="/form"
          element={<Form formList={formList} setFormList={setFormList} />}
        />
        <Route
          path="/edit/:id"
          element={<EditUser formList={formList} />}
        />
        <Route
          path="/editmentor/:id"
          element={<EditMentor mentor={mentor} />}
        />
        <Route path="/form1" element={<CreateMentor mentor={mentor} setMentor={setMentor} />} />
        <Route path="/home1" element={<MentorTable mentor={mentor} setMentor={setMentor} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function NotFound() {
  return (
    <div className="error">
      <img
        src="https://d1ivubrj2a21dq.cloudfront.net/wp-contact/uploads/2021//ezgif.com-crop.gif"
        alt="404-Not-Found"
      />
    </div>
  );
}

export default App;
