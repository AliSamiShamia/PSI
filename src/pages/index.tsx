import Amenities from "@/components/amenities";
import Appartment from "@/components/apartment";
import BuildView from "@/components/build-view";
import ContactForm from "@/components/contact";
import Banner from "@/components/design/banner";
import Layout from "@/components/design/layout";
import Floor from "@/components/floor";
import Gallery from "@/components/gallery";
import LocatedAt from "@/components/located";
import Categories from "@/components/widgets/category";
import Spinner from "@/components/widgets/spinner";
import CustomVideo from "@/components/widgets/video";
import { Box, Divider, Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      init();
    } else {
      window.addEventListener("load", init, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", init);
    }
  }, []);
  const init = () => {
    setLoading(false);
  };
  return loading ? (
    <Spinner loading={!loading} height={30} width={4}></Spinner>
  ) : (
    <Layout page={"home"} head={""} loading={!loading} route={"/"} title={""}>
      <Grid display={"flex"} gap={4} flexDirection={"column"}>
        <Grid id={"home"}>
          <CustomVideo />
        </Grid>
        <Grid>
          <Grid id={"apartment"}>
            <Appartment />
          </Grid>
          {/* <CustomVideo /> */}
          {/* <Banner /> */}
          <Grid id={"locateAt"}>
            <LocatedAt />
          </Grid>
        </Grid>
        <Grid id={"amenities"}>
          <Amenities />
        </Grid>
        <Grid>
          <Grid id={"Floor Plans"}>
            <Floor />
          </Grid>
          <Grid id={"gallery"}>
            <Gallery />
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Divider sx={{ width: { md: 600, xs: "100%" } }} />
          </Grid>
          <Grid id={"contact"}>
            <ContactForm />
          </Grid>
        </Grid>

        <Grid id={"build-view"}>
          <BuildView />
        </Grid>
      </Grid>
    </Layout>
  );
}
