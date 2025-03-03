import Image from "next/image";
import HeroSection from "./_components/hero-section";
import Navbar from "./_components/navbar";
import Packages from "./_components/packages";
import Tours from "./_components/tours";
import AboutUs from "./_components/aboutUs";
import Testimonal from "./_components/testimonal";

export default function Home() {
  return (
    <div className="">
          <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Rez My Tour</title>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <Navbar />
      <HeroSection />
      <Packages />
      <Tours />
      <AboutUs />
      <Testimonal />
    </div>
  );
}
