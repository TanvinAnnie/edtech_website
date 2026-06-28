import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Courses from "@/components/home/Courses";
import Register from "@/components/home/register";
import Student from "@/components/home/students";
import FAQ from "@/components/home/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Courses />
      <About />
      <Register />
      <Student />
      <FAQ />
    </>
  );
}