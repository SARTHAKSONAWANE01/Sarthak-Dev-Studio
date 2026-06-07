import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Identity from "@/components/Identity";
import SelectedWork from "@/components/SelectedWork";
import Capabilities from "@/components/Capabilities";
import BuildingNow from "@/components/BuildingNow";
import Proof from "@/components/Proof";
import Philosophy from "@/components/Philosophy";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Identity />
        <SelectedWork />
        <Capabilities />
        <BuildingNow />
        <Proof />
        <Philosophy />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
