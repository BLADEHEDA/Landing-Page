import HeaderSection from "./components/HeaderSection";
import Hero from "./components/Hero";
import HomePage from "./components/HomePage";
import Section1 from "./components/Section1";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col w-full w-[95%] sm:w-[85%] md:w-[80%] lg:max-w-2xl xl:max-w-3xl items-center justify-between py-6 sm:py-10 md:py-12 px-3 sm:px-6 md:px-8 bg-white dark:bg-black transition-all mx-auto">
        <HomePage />
      </main>
    </div>
  );
}