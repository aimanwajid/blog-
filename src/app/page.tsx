import Hero from "./components/hero";
import AboutPage from "./components/about";
import BlogPage from "./blog/blogpage";
import Contact from "./components/contact"
import Footer from "./components/footer";
import {Blogs} from "./components/blog";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutPage/>
      <BlogPage/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}