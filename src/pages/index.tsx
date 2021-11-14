import Head from 'next/head';
import Header from 'components/header';
import Footer from 'components/footer';
import Main from 'components/main';
import React from 'react';

const Index = () => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <!--==================== UNICONS ====================--> */}
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
      {/* <!--==================== SWIPER CSS ====================--> */}
      <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
      {/* <!--==================== CSS ====================--> */}
      <link rel="stylesheet" href="assets/css/styles.css" />
      <title>Responsive Portfolio Website</title>
    </Head>
    <Header />
    <Main />
    <Footer />
    {/* <!--==================== SWIPER JS ====================--> */}
    <script src="assets/js/swiper-bundle.min.js" />
    {/* <!--==================== MAIN JS ====================--> */}
    <script src="assets/js/main.js" />
  </>
);

export default Index;
