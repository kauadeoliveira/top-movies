import { Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Cast } from "./pages/Cast";

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/details/:id" element={ <Details /> }/>
            <Route path="/details/:id/elenco" element={<Cast />}/>
        </Routes>
    );
}
 