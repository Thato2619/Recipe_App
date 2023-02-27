
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './websitePages/Register';
import Home from './websitePages/Home';
import Login from './websitePages/Login';
import Write from './websitePages/Write';
import Single from './websitePages/Single';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar />
      <Home />
      <Footer />
    </div>,
  },

   {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: <div>This is God's world!</div>,
  },

  {
    path: "/",
    element: <div>This is God's world!</div>,
  },

  {
    path: "/",
    element: <div>This is God's world!</div>,
  },

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
