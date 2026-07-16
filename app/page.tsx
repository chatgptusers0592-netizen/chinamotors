import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import Steps from "./components/Steps";
import Stats from "./components/Stats";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import RequestForm from "./components/RequestForm";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08080a] text-white">
      <Header />
      <Hero />
      <Brands />
      <Services />
      <Advantages />
      <Steps />
      <Stats />
      <About />
      <RequestForm />
      <Contacts />
      <Footer />
      <WhatsappButton />
    </main>
  );
}