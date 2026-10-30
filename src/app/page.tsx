import Navigasi from "@/components/Navigasi";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="theme-page min-h-screen overflow-hidden selection:bg-blue-500/30">
            <Navigasi />

            <main className="mx-auto max-w-6xl px-5 sm:px-7">
                <Header />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>

            <div className="mx-auto max-w-6xl px-5 sm:px-7">
                <Footer />
            </div>
        </div>
    );
}