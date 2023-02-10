import Head from "next/head";
import React from "react";
import Header from "../components/Header";

function Search() {
  return (
    <div>
      <Head>
        <title>Search Page</title>
        <link rel="icon" href="/google.ico" />
      </Head>
      <Header />
    </div>
  );
}

export default Search;
