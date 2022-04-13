import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>nne</title>
        <meta
          name="description"
          content="this is nne site by using create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className=" text-4xl font-bold  text-red-700">nne</h1>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
