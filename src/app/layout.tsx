import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'BlueCharter Documentation',
    template: '%s - BlueCharter Docs',
  },
  description:
    'User documentation for BlueCharter - Yacht charter document and invoice management platform',
  icons: {
    icon: '/favicon.png',
  },
}

const logo = (
  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <img src="/images/logo-full.svg" alt="BlueCharter" height={28} style={{ height: '28px' }} />
    <span style={{ fontSize: '14px', color: '#888', fontWeight: 400 }}>Docs</span>
  </span>
)

const navbar = <Navbar logo={logo} projectLink="https://myblue.bluecharter.fr" />

const footer = (
  <Footer>
    <span>
      {new Date().getFullYear()} &copy; BlueCharter by{' '}
      <a href="https://bluecharter.fr" target="_blank" rel="noopener noreferrer">
        BlueCharter
      </a>
      . All rights reserved.
    </span>
  </Footer>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="" />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/SoftWhale-Studio/docs-bluecharter"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          editLink="Edit this page on GitHub"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
