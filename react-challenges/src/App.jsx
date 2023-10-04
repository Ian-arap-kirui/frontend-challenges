import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Tabs from "./components/TabBar/TabBar";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/progress-bar",
      element: <ProgressBar />,
    },
    {
      path: "/tabs",
      element: <Tabs />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
