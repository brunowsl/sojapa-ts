import {
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import { Main } from "./pages/Main";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </BrowserRouter>

    );
}