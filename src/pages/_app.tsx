import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextTopLoader from 'nextjs-toploader';
import AppShell from '@/components/AppShell';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Anand Raj | Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio website for Anand Raj, a full stack developer focused on React, Node.js, cloud platforms, accessibility, and modern web engineering."
        />
        <meta
          name="keywords"
          content="Anand Raj, Full Stack Developer, Portfolio, React, Next.js, TypeScript, Node.js, AWS, Architecture"
        />
        <meta property="og:title" content="Anand Raj | Full Stack Developer" />
        <meta
          property="og:description"
          content="A portfolio and engineering profile for Anand Raj, a full stack developer and cloud-focused software professional."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anandraj.dev" />
      </Head>
      <NextTopLoader
        color="#9affac"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl
        easing="ease"
        speed={200}
        shadow="0 0 10px #9affac, 0 0 5px #9affac"
        template='<div class="bar" role="bar"><div class="peg"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </>
  );
}
