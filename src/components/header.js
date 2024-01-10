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
                    className="primary-color-text text-3xl font-semibold text-green-500"
                  >
                    太樺工業股份有限公司
                  </a>
                </div>
                <div
                  id="nav-phone"
                  className="hidden text-right text-4xl font-semibold text-gray-500 lg:block"
                >
                  0911-123-4567
                </div>
                <div>
                  <div id="nav-cta-call" className="hidden lg:flex">
                    <div className="flex flex-col space-y-2">
                      <div
                        id="nav-hours"
                        className="text-right font-semibold text-blue-900"
                      >
                        Open 24 hours, 7 Days a Week
                      </div>
                      <div className="flex justify-end">
                        <a
                          href="/#contact-us"
                          className="rounded bg-red-500 px-4 py-2 font-semibold uppercase tracking-wider text-white"
                        >
                          Schedule Today
                        </a>
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
          <div className="primary-color-bg hidden lg:block bg-green-500">
            <div className="container mx-auto px-6 py-5">
              <div className="flex items-center justify-center">
                <div
                  id="nav-links"
                  className="hidden items-center space-x-6 lg:flex"
                >
                  <Link to="/about/">公司簡介</Link>

                  <a
                    id="nav-service-two"
                    href="/#service-two"
                    className="text-xs font-semibold uppercase tracking-widest text-white 2xl:text-sm"
                  >
                    設備介紹
                  </a>
                  <a
                    id="nav-service-three"
                    href="/#service-three"
                    className="text-xs font-semibold uppercase tracking-widest text-white 2xl:text-sm"
                  >
                    產品介紹
                  </a>
                  <a
                    href="/#testimonials"
                    className="testimonials-link text-xs font-semibold uppercase tracking-widest text-white 2xl:text-sm"
                  >
                    專業知識
                  </a>
                  <a
                    href="/#contact-us"
                    className="text-xs font-semibold uppercase tracking-widest text-white 2xl:text-sm"
                  >
                    聯絡我們
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
)


export default Header
