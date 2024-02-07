import * as React from "react"
import { Link } from "gatsby"
import DropdownMenu from "../components/DropdownMenu";

const Header = ({ siteTitle }) => (
  <header
        className="code-section sticky top-0 z-50 font-['Heebo']"
      >
        <div id="top" className="w-full bg-white">
          <div className="">
            <div className="mx-auto lg:container lg:px-6 lg:py-6 xl:px-12 2xl:px-36">
              <div className="flex items-center justify-between p-6 lg:p-0">
                <div>
                  <a
                    id="nav-name-text"
                    href="/"
                    className="primary-color-text text-2xl font-semibold text-black no-underline"
                  >
                    太樺工業股份有限公司
                  </a>
                </div>
                <div
                  id="nav-phone"
                  className="hidden text-right text-4xl font-semibold text-gray-500 lg:block"
                >
                  0911-508-775
                </div>
                <div>
                  <div id="nav-cta-call" className="hidden lg:flex">
                    <div className="flex flex-col space-y-2">
                      <div
                        id="nav-hours"
                        className="text-right font-semibold text-blue-900"
                      >
                        周一至五， 08:30~17:30
                      </div>
                      <div className="flex justify-end">
                      <Link to="/contact/" className="rounded bg-green-500 px-4 py-2 font-semibold uppercase tracking-wider text-white no-underline">立刻諮詢</Link>                
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="mobile-menu-icon"
                  className="flex items-center lg:hidden"
                >
                  <DropdownMenu />
                </div>
              </div>
            </div>
          </div>
          <div className="primary-color-bg hidden lg:block bg-blue-600">
            <div className="container mx-auto px-6 py-5">
              <div className="flex items-center justify-center">
                <div
                  id="nav-links"
                  className="hidden items-center space-x-6 lg:flex"
                >
                  <Link to="/about/" className="no-underline text-white font-bold">公司簡介</Link>                
                  <Link to="/machines/" className="no-underline text-white font-bold">設備介紹</Link> 
                  <Link to="/contact/" className="no-underline text-white font-bold">聯絡我們</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
)


export default Header
