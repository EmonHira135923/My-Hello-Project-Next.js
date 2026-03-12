"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
    const router = useRouter();
    const handlebtn = () => {
        const password = prompt("this is btn for check functionality");
        if(password === "1234"){
            router.push("/dashboard");
        }
        else{
            alert("Wrong Password! Try Again.");
        }
    }
  return (
    <div>
      <section className="text-center mb-20">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
          Build Faster. <br /> Learn Deeper.
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          A practice playground for mastering the App Router, Tailwind CSS, and
          modern web patterns.
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={handlebtn} className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-slate-200 transition-all">
            Get Started
          </button>
          <button className="border border-slate-800 px-8 py-3 rounded-full font-semibold hover:bg-slate-900 transition-all">
            View Github
          </button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
