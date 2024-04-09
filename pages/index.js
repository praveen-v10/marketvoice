
import Head from "next/head";
import Home from "./Home";


export default function Index() {
  return (
    <div>
      <Head>
        <title>Market Voice</title>
        <link rel="icon" href="/assets/sub_logo.png"/>
      </Head>
      <Home/>
      
    </div>
  );
}
