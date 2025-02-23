import { BrowserRouter as Router, Routes, Route } from "react-router"
import React from "react"

import PersonalBlog from "/src/pages/Personal Blog/Main Personal Section/PersonalBlog.jsx"
import EducationPage from "/src/pages/Education Blog/Main Education Page/EducationPage.jsx"
import CompanyPage from "/src/pages/Company Blog/Main Company Page/CompanyPage.jsx"
import Layout from "./pages/Layout"
import PersonalPage from "/src/pages/Personal Blog/Main Personal Page/PersonalPage.jsx"
import BusinessPage from "/src/pages/Business Blog/Main Business Page/BusinessPage.jsx"
import PostDetail from "/src/pages/Personal Blog/Dummy Data/PostDetail.jsx"
import EditPost from "./pages/Personal Blog/Dummy Data/EditPost"

import AuthorPosts from "./pages/Personal Blog/Dummy Data/AuthorPosts"
import Login from "./pages/Login-Signup/Login"
import CreatePost from "./pages/CreatePosts/CreatePost"

function App() {


  return (

    <>
    
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Layout />}
            >
              <Route
                path="/create-blog"
                element={<CreatePost />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Login />}
              />

              <Route
                path="/PersonalPage/posts/:id"
                element={<PostDetail />}
              />
              <Route
                index
                element={<PersonalBlog />}
              />
              <Route
                path="/PersonalPage"
                element={<PersonalPage />}
              />
              <Route
                path="/posts/user/:username"
                element={<AuthorPosts />}
              />
              <Route
                path="posts/user/edit/:id"
                element={<EditPost />}
              />


              <Route
                path="/BusinessPage"
                element={<BusinessPage />}
              />
              <Route
                path="/EducationPage"
                element={<EducationPage />}
              />
              <Route
                path="/CompanyPage"
                element={<CompanyPage />}
              />
            </Route>
          </Routes>
        </Router>
      
    </>
  )
}

export default App