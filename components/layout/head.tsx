import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title: string | any;
  desc: string | any;
  canonical: string | any;
};

export function CustomHead({ title, desc, canonical }: Props) {
  const URL = "https://mazmoon-app.vercel.app";
  const { locales } = useRouter();

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>

      <meta name="description" content={desc} />
      <link rel="canonical" href={`${URL}${canonical}`} />
      <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      {locales?.map((locale: string) => {
        return (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={`${URL}${canonical}/${locale}`}
          />
        );
      })}
    </Head>
  );
}
