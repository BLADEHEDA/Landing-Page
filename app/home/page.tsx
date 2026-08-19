
import HeaderSection from "../components/HeaderSection";
import Hero from "../components/Hero";
import HomePage from "../components/HomePage";
import Section1 from "../components/Section1";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
           <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-18 px-16 bg-blac dark:bg-black sm:items-start">
       {/* <HomePage/> */}
       <Hero/>
       <HeaderSection/>
       <Section1/>
    <div>
     
    </div>
      </main>
    </div>
  );
}
