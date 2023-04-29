// import "@/styles/supabase.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { appWithTranslation } from "next-i18next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const IAmEnough = ({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) => {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SessionContextProvider>
  );
};

export default appWithTranslation(IAmEnough);
