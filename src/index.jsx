import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


/*Component*/
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Admin from "./Admin";
import Writepage from "./Writepage";
import DisplayArticle from "./DisplayArticle";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});
  



const App = () =>{


    return(
        <div>
          
            <BrowserRouter>
                <QueryClientProvider client={queryClient} >
                    <Navbar />
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/writepage" element={<Writepage />} />
                        <Route path="/article/:id" element={<DisplayArticle />} />
                        <Route path="/" element={<Home />} />
                      
                    </Routes>
                </QueryClientProvider>
            </BrowserRouter>

        </div>
    )
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);