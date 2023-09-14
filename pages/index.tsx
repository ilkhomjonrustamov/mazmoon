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
import { CustomHead } from "@/components/layout/head";
import Toast from "@/components/toast";
import { useContext } from "react";
import { FormContext } from "@/store/form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isSuccess } = useContext(FormContext);
  return (
    <>
      <CustomHead title={`Mazmoon Group`} desc={""} canonical={"/"} />
      <Layout>
        <Hero />
        <Project />
        <Wedo />
        <Workers />
        <Comments />
        <Companies />
      </Layout>
      <Toast
        variant="success"
        toast={isSuccess ? true : false}
        message="Muvaffaqiyatli yuborildi!"
      />
    </>
  );
}
