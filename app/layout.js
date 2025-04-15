import "./css/globals.scss";
import "./css/card.scss";
import "react-toastify/dist/ReactToastify.css";
import {Inter} from "next/font/google";
import {ToastContainer} from "react-toastify";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Aron Szabo | Systems Administrator",
    description:
        "This is the portfolio of Aron Szabo. I am a student at Saskatchewan Polytechnic in the Computer Systems Technology program. I am studying to be a systems administrator, and picking up some developer experience on the way there. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ToastContainer/>
        <main
            className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            <Navbar/>
            {children}
            <ScrollToTop/>
        </main>
        <Footer/>
        </body>
        </html>
    );
}
