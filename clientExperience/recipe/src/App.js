
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

const router = createBrowserRouter([
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
