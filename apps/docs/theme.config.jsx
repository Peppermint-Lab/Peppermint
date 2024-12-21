import { useRouter } from 'next/router'
import seoConfig from './seo.config.js'

const config = {
  logo: "Peppermint",
  project: { link: 'https://github.com/Peppermint-Lab/peppermint' },
  useNextSeoProps() {
    const { route } = useRouter()
    const { url, images } = seoConfig.openGraph

    return {
      titleTemplate: seoConfig.title.template,
      openGraph: { url, images: [{ url: `${url}${images}` }] }
    }
  },
  docsRepositoryBase: 'https://github.com/Peppermint-Lab/docs',
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: false,
  },
  chat: {
    link: 'https://discord.gg/invite/cyj86Ncygn',
  },
  // i18n: [
  //   { locale: 'en', text: 'English' },
  // ],
  footer: {
    text: '',
    component: () => <></>
  },
   banner: {
    key: 'release',
    text: (
      <a href="https://github.com/Peppermint-Lab/peppermint/releases" target="_blank">
        🎉 Peppermint 0.4.5 is here! Check it out now! 🚀
      </a>
    )
  },
  head: () => {
    const title = seoConfig.title.template

    return (
      <>
        {seoConfig.icons.map((icon, index) => (
          <link key={index} rel={icon.rel} href={icon.url} />
        ))}
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={seoConfig.description}
        />
        <meta
          name="og:title"
          content={title ? title + ' – Panda' : seoConfig.title.default}
        />
        <meta
          name="og:description"
          content={seoConfig.description}
        />
        <meta name="og:image" content={seoConfig.openGraph.images} />
        <meta name="og:url" content={seoConfig.openGraph.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={seoConfig.twitter.site} />
        <meta name="twitter:creator" content={seoConfig.twitter.creator} />
        <meta name="apple-mobile-web-app-title" content="Panda" />
      </>
    )
  }
}

export default config
