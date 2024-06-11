 import { useState } from 'react'

import{ createBrowserRouter,Route,createRoutesFromElements,RouterProvider} from "react-router-dom";
import HomeRoute from "./router/Home.router.jsx";
import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Main2 from "./components/Main2.jsx";

import { createContext } from 'react'
import ReactSwitch from "react-switch";


export const ThemeContext =createContext(null);





const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route index element={<HomeRoute />}/>
      </Route>
    <Route path="*" element={"No page found"} />  
    </>
  )
)





function App() {
 const [theme, setTheme] = useState("dark");
 const toggleTheme = () => {
   setTheme((current) =>(current === "light" ? "dark" : "light"));
 }

  return (
    <>
  <div>
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <RouterProvider router={router} />
      <div className='App' id={theme}>
        <Header />
        <Main />
        <Main2 />
      </div>
    </ThemeContext.Provider>
  </div>
    </>
  )
}

export default App
