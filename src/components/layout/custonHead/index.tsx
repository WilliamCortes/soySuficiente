import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";

type Props = {
  title: string;
  description: string;
  logo: string;
};

const mainLogo = "~/logoS.png";

const CustomHead: FC<Props> = ({ title, description, logo }) => {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="index,follow" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      <link rel="canonical" href="https://www.williamcortes.co/" />

      <link rel="icon" href={logo} />
      <link rel="shortcut icon" type="image/x-icon" href={logo} />
      <link rel="apple-touch-icon" sizes="180x180" href={logo} />
      <meta name="theme-color" content="#7b46f6" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={logo} />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logo} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.williamcortes.co/" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content={router.locale} />
      <meta property="og:site_name" content="William Cortés" />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Vercel" />
      <meta name="twitter:creator" content="@StevenTey" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logo} />
    </Head>
  );
};

export default CustomHead;
