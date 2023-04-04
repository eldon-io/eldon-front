import { useEffect } from "react";
import Router from "next/router";
import { initGA, logPageView } from "../analytics";
import { SessionProvider } from "next-auth/react";

import "react-multi-carousel/lib/styles.css";
import "react-modal-video/css/modal-video.min.css";
import "rc-drawer/assets/index.css";
import "typeface-dm-sans";
import React from "react";

export default function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", logPageView);
  }, []);

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
