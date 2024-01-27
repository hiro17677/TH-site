/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{data.site.siteMetadata?.title || `Title`}</title>
      </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        // style={{
        //   margin: `0 auto`,
        //   maxWidth: `var(--size-content)`,
        //   padding: `var(--size-gutter)`,
        // }}
      >
        <main>{children}</main>
        <footer className="code-section bg-black font-['Heebo']" id="kv0pfb">
      <div
        id="footer"
        className="container mx-auto px-6 py-24 xl:px-12 2xl:px-36"
      >
        <div className="grid grid-cols-1 pt-4 md:grid-cols-2 lg:grid-cols-2 lg:space-x-24">
          <div className="mb-8">
            <a
              id="footer-brand-name"
              href="/"
              className="mb-8 block text-3xl tracking-wider text-white no-underline"
            >
              太樺工業股份有限公司
            </a>
            <p
              id="footer-brand-subtext"
              className="text-left font-light tracking-wider text-gray-100"
            >
              品質第一‧致力卓越
            </p>
          </div>
          <div className="mb-8">
            <div className="primary-color-border mb-8 border-b-2 pb-4 text-xl tracking-wide text-white border-blue-600">
              聯絡資訊
            </div>
            <div className="mb-2 flex flex-row font-light tracking-wider text-white">
              <i className="primary-color-text fa-solid fa-phone mr-2 w-6 flex-none text-green-500" />
              <span id="footer-phone">0911-508-775</span>
            </div>
            <div className="mb-2 flex flex-row font-light tracking-wider text-white">
              <i className="primary-color-text fa-solid fa-envelope mr-2 w-6 flex-none text-green-500" />
              <span id="footer-email" className="w-[90%] break-words">
              TAIHUAWUGU@gmail.com
              </span>
            </div>
            <div className="mb-2 flex flex-row font-light tracking-wider text-white">
              <i className="primary-color-text fa-solid fa-location-dot mr-2 w-6 flex-none text-green-500" />
              <span id="footer-address">
                新北市五股區成泰路二段147巷34號之36號
              </span>
            </div>
            <div className="mb-2 flex flex-row font-light tracking-wider text-white">
              <i className="primary-color-text fa-solid fa-clock mr-2 w-6 flex-none text-green-500" />
              <span id="footer-hours">周一至五， 08:30~17:30</span>
            </div>
          </div>
        </div>
        <p
          id="footer-copyright"
          className="border-t-2 border-gray-600 py-4 text-left text-sm text-gray-500"
        >
          © 2024 Tai Hua, Inc. All rights reserved.
        </p>
      </div>
    </footer>
      </div>
    </>
  )
}

export default Layout
