
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
