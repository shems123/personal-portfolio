import Hero from "@/components/Hero";
import { FloatingNav } from './../components/ui/FlotingNav';
import { FaHome } from "react-icons/fa";
import Gride from "@/components/Gride";

export default function Home() {
  return (
    <main className="relative flex flex-col bg-black-100 justify-center items-center 
    overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: "Home", link: "/", icon: <FaHome/>}
        ]}/>
        <Hero/>
        <Gride/>
      </div>
    </main>
  );
}
