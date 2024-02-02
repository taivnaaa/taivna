import { Inter } from "next/font/google";
import {
  Header,
  Head,
  Trending,
  AllBLogPost,
  About,
  Footer,
}from "@/Components/layout/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Head></Head>
      <Trending></Trending>
      <AllBLogPost></AllBLogPost>
      <About></About>
      <Footer></Footer>
    </div>
  )
}
