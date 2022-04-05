import { useEffect, useState } from "react";
import "./App.css";
import VacanciesForm from "./components/form/VacanciesForm";
import SignIn from "./components/form/Authentication/Signin";
import SignUp from "./components/form/Authentication/Signup";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import ListKandidat from "./components/form/ListKandidat";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import JobDetail from "./components/detail/JobDetail";
import JobListPage from "./pages/JobListPage";
import Index from "./pages/Index"
import Profile from "./components/form/ProfileForm/Profile";
import Core from "./components/form/ProfileForm/Core";
import PrivateRoute from "./components/privateroute/index";
import ProfilePage from "./pages/ProfilePage";
import CreateProfilePage from "./pages/CreateProfilePage";
import SkillsFormPage from "./pages/SkillsFormPage";
import EducationFormPage from "./pages/EducationFormPage";
import IndustryFormPage from "./pages/IndustryFormPage";
import WorkExperienceFormPage from "./pages/WorkExperienceFormPage";


function App() {
    // const [hello, setHello] = useState("");

    // useEffect(() => {
    //   const helloWorld = async () => {
    //     await fetch("/api/hello")
    //       .then((response) => response.json())
    //       .then((data) => {
    //         console.log(data);
    //         setHello(data.Hello)
    //       });
    //   };
    //
    //   helloWorld();
    // }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<VacanciesForm />} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/vacancies-form" element={<VacanciesForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listJob" element={<JobListPage />} />
        <Route exact path="/detail/:title" element={<JobDetail />} />
        <Route path="/list-kandidat" element={<ListKandidat/>}/>
        <Route path="/home" element={
          <PrivateRoute>
            <Index/>
          </PrivateRoute>
        }/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/create-profile" element={<CreateProfilePage/>}/>
        <Route path="/profile" element={<ProfilePage />} />
        <Route exact path="/profile/:id" element={<ProfilePage/>}/>
        <Route path="/skills-form" element={<SkillsFormPage />} />
        <Route path="/education-form" element={<EducationFormPage />} />
        <Route path="/industry-form" element={<IndustryFormPage />} />
        <Route path="/work-experience-form" element={<WorkExperienceFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;