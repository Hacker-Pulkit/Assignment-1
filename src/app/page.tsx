import ApplicationForm from "@/components/Application_Form";
import ApplicationProcess from "@/components/ApplicationProcess";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";


export default function Home() {
  return (
 <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0]">

  <Banner/>
  <ApplicationProcess/>
  <ApplicationForm/>
  <Footer/>
 </main>
  );
}
