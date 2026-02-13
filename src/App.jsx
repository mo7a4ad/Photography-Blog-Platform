import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./components/Blog";
import Home from "./components/Home";

import data from "./posts.json";
import WhoUs from "./components/WhoUs";
import LayOut from "./components/LayOut";
import Error from "./components/Error";


function App() {
  const routs = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        { index: true, element: <Home json={data} /> },
        { path: "blog", element: <Blog json={data} /> },
        { path: "whoUs", element: <WhoUs json={data} /> },
      ],
    },
    {path: "*" , element: <Error/>}
  ]);
  return (
    <>
      <RouterProvider router={routs} />
    </>
  );
}

export default App;
