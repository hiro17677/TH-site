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
        <div className="grid grid-cols-1 pt-4 md:grid-cols-2 lg:grid-cols-3 lg:space-x-24">
          <div className="mb-8">
            <a
              id="footer-brand-name"
              href="/"
              className="mb-8 block text-3xl tracking-wider text-white"
            >
              Tai
            </a>
            <p
              id="footer-brand-subtext"
              className="text-left font-light tracking-wider text-gray-100"
            >
              Committed to Excellence
            </p>
            <div
              id="footer-social-links"
              className="my-8 flex flex-row justify-center text-gray-400 md:justify-start"
            >
              <a
                id="footer-facebook-link"
                href="/"
                className="mr-3"
                aria-label="Visit our Facebook"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <i className="primary-color-text fa-brands fa-facebook-f text-green-500" />
                </div>
              </a>
              <a
                id="footer-twitter-link"
                href="/"
                className="mr-3"
                aria-label="Visit our Twitter"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <i className="primary-color-text fa-brands fa-twitter text-green-500" />
                </div>
              </a>
              <a
                id="footer-instagram-link"
                href="/"
                className="mr-3"
                aria-label="Visit our Instagram"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <i className="primary-color-text fa-brands fa-instagram text-green-500" />
                </div>
              </a>
            </div>
          </div>
          <div className="mb-8">
            <div className="primary-color-border mb-8 border-b-2 pb-4 text-xl tracking-wide text-white border-green-500">
              Contact Info
            </div>
            <div className="mb-2 flex flex-row font-light tracking-wider text-white">
              <i className="primary-color-text fa-solid fa-phone mr-2 w-6 flex-none text-green-500" />
              <span id="footer-phone">+1 800-123-4567</span>
            </div>
            <div className="mb-2 flex flex-row font-light tracking-wider text-white">
              <i className="primary-color-text fa-solid fa-envelope mr-2 w-6 flex-none text-green-500" />
              <span id="footer-email" className="w-[90%] break-words">
                info@taifactory.com
              </span>
            </div>
            <div className="mb-2 flex flex-row font-light tracking-wider text-white">
              <i className="primary-color-text fa-solid fa-location-dot mr-2 w-6 flex-none text-green-500" />
              <span id="footer-address">
                1234 Plastic Avenue, Industrial City, USA
              </span>
            </div>
            <div className="mb-2 flex flex-row font-light tracking-wider text-white">
              <i className="primary-color-text fa-solid fa-clock mr-2 w-6 flex-none text-green-500" />
              <span id="footer-hours">Open 24 hours, 7 Days a Week</span>
            </div>
          </div>
        </div>
        <p
          id="footer-copyright"
          className="border-t-2 border-gray-600 py-4 text-left text-sm text-gray-500"
        >
          © 2023 Tai, Inc. All rights reserved.
        </p>
      </div>
    </footer>
      </div>
    </>
  )
}

export default Layout
