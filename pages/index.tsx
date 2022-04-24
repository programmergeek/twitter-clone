import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter clone</title>
        <meta name="description" content="A twitter clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">This is Sparta</h1>
      <Button>My name is jeff</Button>
    </div>
  );
};

export default Home;
