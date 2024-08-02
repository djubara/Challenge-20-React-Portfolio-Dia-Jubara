
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default function App() {

    return (
        <>
            <Header />
            <div className="p-4" style={{ minHeight: "100vh" }}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}