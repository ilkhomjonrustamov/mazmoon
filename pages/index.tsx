import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Comments from "@/components/comment";
import Companies from "@/components/companies";
import Hero from "@/components/hero";
import Project from "@/components/projects";
import Wedo from "@/components/wedo";
import Workers from "@/components/workers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Layout from "@/components/layout/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Project />
        <Wedo />
        <Workers />
        <Comments />
        <Companies />
      </Layout>
    </>
  );
}
