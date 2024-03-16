import React, { Suspense, lazy } from "react";
import dynamic from "next/dynamic";

import { LayoutType } from "@/components/types";
import SpinnerCustomize from "@/components/widgets/spinner";
import Footer from "../footer";
import ResponsiveAppBar from "../header";
import { Providers } from "@/components/providers";
import { Colors } from "@/components/constant";

const Grid = lazy(() => import("@mui/material/Grid"));
const Container = lazy(() => import("@mui/material/Container"));
const Box = lazy(() => import("@mui/material/Box"));
const Head = lazy(() => import("next/head"));

const pages = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "apartment",
    url: "/apartment",
  },
  {
    title: "amenities",
    url: "/amenities",
  },
  {
    title: "Floor Plans",
    url: "/floor-plans",
  },
  {
    title: "gallery",
    url: "/gallery",
  },
  {
    
    title: "contact",
    url: "/contact",
    
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Healthcare",
  headline: "Diabetes",
  author: {
    "@type": "Person",
    name: "Ali Shamia",
  },
  image: "/static/images/logo.png",
  datePublished: "2021-07-01T16:00:00+0000",
  dateModified: "2023-07-01T16:00:00+0000",
};

const LoadingSection = (
  <Grid
    mt={3}
    width={1}
    display={"flex"}
    alignItems={"center"}
    justifyContent={"center"}
  >
    <SpinnerCustomize loading={false} width={100} height={100} />
  </Grid>
);

export default function Layout({
  head,
  page,
  children,
  loading,
  title,
  route,
  hideSearch,
  logo,
}: LayoutType) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Sapphire - Landing Page</title>
        <meta
          name="description"
          content="Discover The Sapphire, an architectural masterpiece by DAMAC Properties and de GRISOGONO, located along Sheikh Zayed Road. Inspired by yellow sapphires, it offers exquisitely crafted apartments, penthouses, and full floors."
        />

        <meta name="author" content="Ali Shamia" />
        <meta name="theme-color" content={Colors.primary} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <Suspense fallback={LoadingSection}>
        <Providers>
          <Container disableGutters maxWidth={false}>
            <Box sx={{ position: "relative" }}>
              <Grid sx={{ position: "relative" }}>
                <ResponsiveAppBar active={page} pages={pages} />
              </Grid>
            </Box>
            {children}
          </Container>
          {loading ? <Footer /> : null}
        </Providers>
      </Suspense>
    </>
  );
}
