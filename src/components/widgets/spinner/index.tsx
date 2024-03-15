import React, { ReactNode, Suspense } from "react";
import { styled } from "@mui/system";
import dynamic from "next/dynamic";
import { Colors } from "@/components/constant";

interface SpinnerInterface {
  width: number | undefined | null;
  height: number | undefined | null;
  loading: boolean | undefined;
  children?: ReactNode;
}

const PropagateLoader = dynamic(
  () => import("react-spinners/PropagateLoader"),
  {
    ssr: false,
  }
);

function SpinnerCustomize({ children }: SpinnerInterface) {
  const BannerImage = styled("div")({
    height: "100vh",
    // backgroundImage:
    //   "linear-gradient(to right top, #e8b96d, #e8b96d, #e8b96d, #e8b96d, #e8b96d, #f4b97f, #fcbb92, #ffbea5, #ffcbcc, #ffdcea, #fbeffb, #ffffff)",
  });
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BannerImage
        sx={{
          zIndex: 9900,
          position: "fixed",
          width: "100vw",
          height: "100vh",
          minHeight: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {children}

        <PropagateLoader
          color={Colors.primary}
          loading={true}
          style={{
            marginTop: 20,
          }}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </BannerImage>
    </Suspense>
  );
}

export default SpinnerCustomize;
