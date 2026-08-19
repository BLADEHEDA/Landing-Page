import HeaderSection from "../components/HeaderSection";
import Hero from "../components/Hero";
import HomePage from "../components/HomePage";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-[96%] sm:w-[88%] md:w-[82%] lg:max-w-2xl xl:max-w-3xl flex-col items-center justify-between py-6 sm:py-10 md:py-12 px-3 sm:px-6 md:px-8 bg-white dark:bg-black transition-all mx-auto">
        <Hero />
        <HeaderSection />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
    </div>
  );
}