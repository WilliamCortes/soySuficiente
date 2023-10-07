import { FC, Fragment, useState } from "react";
import type { AppProps } from "next/app";
import Script from "next/script";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { appWithTranslation } from "next-i18next";
import "@/styles/globals.css";

type Props = AppProps<{
  initialSession: Session;
}>;

const IAmEnough: FC<Props> = ({ Component, pageProps }) => {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  return (
    <Fragment>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-DPGJZ4X9CE`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-DPGJZ4X9CE');
        `}
      </Script>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    </Fragment>
  );
};

export default appWithTranslation(IAmEnough);
