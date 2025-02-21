'use client'

import '../component/InputPhone/phone-input.css'
import {Content} from '@/component/Content/Content'
import Head from 'next/head'
import {config} from '@/app/config'

export default function Home() {
  return (
    <>
      <Head>
        <title>{config.seo.title} | MyWA Direct</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content={config.seo.desc}/>
        <meta name="keywords" content="WhatsApp, send message, direct chat, WA link, no save contact"/>
        <meta name="robots" content="index, follow"/>

        {/* Open Graph (Facebook & LinkedIn) */}
        <meta property="og:title" content={config.seo.title}/>
        <meta property="og:description" content={config.seo.desc}/>
        <meta property="og:image" content="/wa-logo.png"/>
        <meta property="og:url" content={config.baseUrl}/>
        <meta property="og:type" content="website"/>

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={config.seo.title}/>
        <meta name="twitter:description" content={config.seo.desc}/>
        <meta name="twitter:image" content="/wa-logo.png"/>
      </Head>
      <main>
        <Content/>
      </main>
    </>
  )
}
