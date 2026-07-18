import Category from "@/components/home/Category";
import Hero from "@/components/home/Hero";
import Header from '@/components/layout/header'
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Category></Category>
      <div></div>
    </div>
  );
}
