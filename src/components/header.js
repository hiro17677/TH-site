import * as React from "react"
import { Link } from "gatsby"

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
                  <button
                    className="text-gray-800"
                    aria-label="Navigation Dropdown Menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-menu"
                    >
                      <line x1={3} y1={12} x2={21} y2={12} />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <line x1={3} y1={18} x2={21} y2={18} />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-center text-center lg:hidden">
                <a
                  id="nav-phone-href-override"
                  href="tel:+18001234567"
                  className="h-full w-full bg-blue-900 px-4 py-2 font-semibold uppercase tracking-wider text-white"
                >
                  <i className="fa-solid fa-phone" />
                  <span> CALL US </span>
                  <span id="nav-phone2">+1 800-123-4567</span>
                </a>
              </div>
              <div className="flex justify-center text-center lg:hidden">
                <a
                  href="/#contact-us"
                  className="h-full w-full bg-red-500 px-4 py-2 font-semibold uppercase tracking-wider text-white"
                >
                  Schedule Now
                </a>
              </div>
              <div id="nav-links-mobile" className="mt-4 hidden lg:hidden">
                <div className="flex flex-col space-y-2">
                  <a
                    id="nav-mobile-service-one"
                    href="/#service-one"
                    className="text-sm font-semibold uppercase tracking-widest text-gray-800"
                  >
                    Injection
                  </a>
                  <a
                    id="nav-mobile-service-two"
                    href="/#service-two"
                    className="text-sm font-semibold uppercase tracking-widest text-gray-800"
                  >
                    Assembly
                  </a>
                  <a
                    id="nav-mobile-service-three"
                    href="/#service-three"
                    className="text-sm font-semibold uppercase tracking-widest text-gray-800"
                  >
                    Packaging
                  </a>
                  <a
                    href="/#testimonials"
                    className="testimonials-link text-sm font-semibold uppercase tracking-widest text-gray-800"
                  >
                    Testimonials
                  </a>
                  <a
                    href="/#contact-us"
                    className="text-sm font-semibold uppercase tracking-widest text-gray-800"
                  >
                    Contact Us
                  </a>
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
