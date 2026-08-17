import { Helmet } from 'react-helmet-async';
import Particles from '@/components/Particles';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Internship from '@/components/Internship';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Lhemuel Laurenciana - OJT Portfolio | IT Student & Web Developer</title>
        <link rel="icon" type="image/png" href="/lpl.png" />
        <meta
          name="description"
          content="Portfolio of Lhemuel Laurenciana, a 4th year IT student completing OJT at Interllismart Technology Inc. Passionate about web development and creating digital solutions."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background relative overflow-hidden">
        <Particles />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Internship />
          <Works />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
