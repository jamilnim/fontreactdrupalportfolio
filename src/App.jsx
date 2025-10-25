import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./auth/firebaseConfig"; // Firebase config

// Layout
import Root from "./Pages/Root";

// Pages
import Home from "./Pages/Home";
import ProjectLists from "./components/projectlist/ProjectLists";
import ProjectDetail from "./components/projectlist/Aproject";
import Gallery from "./components/Gallery";
import Blog from "./Pages/blog/Blog";
import ContactForm from "./Pages/contactform/ContactForm";
import MassageList from "./Pages/contactform/MassageList";
import Login from "./components/login/login";

function App() {
  const [user, setUser] = useState(null);

  // Track logged-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          {/* Home */}
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />

          {/* Projects */}
          <Route path="projects" element={<ProjectLists />} />
          <Route path="projects/:id" element={<ProjectDetail />} />

          {/* Gallery */}
          <Route path="gallery" element={<Gallery />} />

          {/* Blog */}
          <Route path="blog" element={<Blog />} />

          {/* Contact */}
          <Route path="contact" element={<ContactForm />} />

          {/* Admin-only messages list */}
          <Route
            path="massagelist"
            element={
              user?.email === "jamilnimbook2@gmail.com" ? (
                <MassageList />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* Login */}
          <Route path="login" element={<Login />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
