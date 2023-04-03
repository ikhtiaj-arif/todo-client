import { Toaster } from 'react-hot-toast';
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";


function App() {
  return (
    <div className="">
      <Toaster />
      <RouterProvider 
        router={Routes}
      >

      </RouterProvider>
    </div>
  );
}

export default App;
