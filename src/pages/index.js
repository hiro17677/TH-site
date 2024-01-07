import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//   },
//   {
//     text: "Examples",
//     url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
//     description:
//       "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     description:
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//   },
// ]

// const samplePageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
//   { text: "TypeScript", url: "using-typescript" },
//   { text: "Server Side Rendering", url: "using-ssr" },
//   { text: "Deferred Static Generation", url: "using-dsg" },
// ]

// const moreLinks = [
//   { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
//   {
//     text: "Documentation",
//     url: "https://gatsbyjs.com/docs/",
//   },
//   {
//     text: "Starters",
//     url: "https://gatsbyjs.com/starters/",
//   },
//   {
//     text: "Showcase",
//     url: "https://gatsbyjs.com/showcase/",
//   },
//   {
//     text: "Contributing",
//     url: "https://www.gatsbyjs.com/contributing/",
//   },
//   { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
// ]

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className="frame-root">
      <div className="frame-content">
      <section
        className="code-section overflow-hidden font-['Heebo']"
      >
        <div className="relative md:h-[700px]">
          <div
            className="seo-image absolute inset-0 z-0 h-full w-full bg-cover bg-center object-cover brightness-75 lg:brightness-100 hovered-element"
            style={{
              backgroundImage:
                "url(https://media.gettyimages.com/id/1163745545/photo/plastic-sprue-gate-cutting-and-sucction-pad-for-plastic-injection-manufacturing-process.jpg?b=1&s=612x612&w=0&k=20&c=HRk9HG5XO6E3QAd5RNvLquocSAeAnrg_sVTRRxZ-r6M=)"
            }}
            data-media='{"id":"1163745545","src":"iStock","type":"image"}'
          ></div>
          <div className="absolute inset-0 z-10 hidden w-3/5 bg-gradient-to-r from-black to-transparent lg:block"></div>
          <div className="container relative z-10 mx-auto px-6 py-6 xl:px-12 2xl:px-36">
            <div className="flex h-full flex-col pt-10 lg:flex-row">
              <div className="p-10 text-center lg:w-1/2 lg:text-left">
                <h3
                  id="hero-welcome-text"
                  className="primary-color-text pb-8 text-base font-medium uppercase tracking-widest text-green-500"
                >
                  Welcome
                </h3>
                <h1
                  id="hero-header-text"
                  className="mb-6 text-3xl font-semibold text-white lg:text-6xl"
                >
                  可靠的塑膠射出解決方案
                </h1>
                <p
                  id="hero-subtext"
                  className="mb-8 text-base font-normal tracking-wide text-white"
                >
                  我們專注於提供高品質的塑膠射出成型服務，結合精密技術和創新工藝，為工業採購經理、產品設計師和小型企業所有者帶來定制且高效的塑膠部件。
                </p>
                <a
                  id="hero-cta-button"
                  href="#contact-us"
                  className="primary-color-bg inline-block px-8 py-4 text-base font-semibold uppercase tracking-widest text-white hover:text-black bg-green-500"
                >
                  聯絡我們
                </a>
              </div>
              <div className="hidden p-10 text-center lg:block lg:w-1/2 lg:text-left">
                <div className="primary-color-bg primary-opacity-[80] flex flex-col space-y-4 bg-green-500/80">
                  <form
                    id="hero-contact-us-form"
                    action="#"
                    method="post"
                    className="space-y-6 pt-8 sm:p-8"
                  >
                    <div id="hero-contact-us-name-field">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="mt-2 w-full rounded bg-gray-200 p-2 shadow-sm"
                      />
                    </div>
                    <div id="hero-contact-us-email-field" className="">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="mt-2 w-full rounded bg-gray-200 p-2 shadow-sm"
                      />
                    </div>
                    <div id="hero-contact-us-phone-field">
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        className="mt-2 w-full rounded bg-gray-200 p-2 shadow-sm"
                      />
                    </div>
                    <div id="hero-contact-us-message-field" className="">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="What Can We Help You With?"
                        className="mt-2 w-full rounded bg-gray-200 p-2 shadow-sm"
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <button
                        id="hero-contact-us-submit-button"
                        type="submit"
                        className="w-full rounded bg-red-500 px-4 py-3 text-sm font-normal uppercase tracking-wider text-white hover:bg-red-600"
                      >
                        Request Service
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="relative -top-[5.8rem] z-20 hidden lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              className="relative left-1/2 h-[150px] w-[150%] -translate-x-1/2 transform"
            >
              <path
                className="fill-white"
                d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <section className="code-section py-4 font-['Heebo'] md:py-8" id="obuzed">
        <div
          id="services"
          className="container mx-auto py-12 sm:py-20 xl:px-12 2xl:px-36"
        >
          <div className="flex flex-col">
            <h3
              id="services-mini-header"
              className="primary-color-text pb-8 text-center text-base font-medium uppercase tracking-widest lg:text-left text-green-500"
            >
              Our Services
            </h3>
            <div className="flex flex-col pb-8 sm:flex-row">
              <div
                id="services-header"
                className="mb-8 flex-1 text-center text-4xl font-semibold lg:text-left"
              >
                體驗尖端服務的全方位組合
              </div>
              <div
                id="services-text"
                className="flex-1 text-center text-xl lg:text-left"
              >
                我們提供從設計、模具製作到組裝和包裝的一站式塑膠射出解決方案。
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
              <div className="flex flex-1 flex-col border border-gray-300">
                <img
                  className="h-44 object-cover lg:max-h-none"
                  alt=""
                  src="https://media.gettyimages.com/id/1145647671/photo/plastic-sprue-gate-cutting-and-sucction-pad-for-plastic-injection-manufacturing-process.jpg?b=1&s=612x612&w=0&k=20&c=2KHyTV7VKThF4Uw3opG1OM5MKIOxnpwrPjpWOoGxOXk="
                  data-media='{"id":"1145647671","src":"iStock","type":"image"}'
                />
                <div
                  id="service-1-header"
                  className="py-4 text-center text-2xl font-semibold"
                >
                  射出成型
                </div>
                <div id="service-1-text" className="px-8 pb-4 text-center">
                我們為各行各業提供高精度的塑膠射出成型服務，憑藉先進的技術和豐富經驗，確保每一件產品都達到行業領先水準。
                </div>
              </div>
              <div className="flex flex-1 flex-col border border-gray-300">
                <img
                  className="h-44 object-cover lg:max-h-none"
                  alt=""
                  src="https://media.gettyimages.com/id/1163745545/photo/plastic-sprue-gate-cutting-and-sucction-pad-for-plastic-injection-manufacturing-process.jpg?b=1&s=612x612&w=0&k=20&c=HRk9HG5XO6E3QAd5RNvLquocSAeAnrg_sVTRRxZ-r6M="
                  data-media='{"id":"1163745545","src":"iStock","type":"image"}'
                />
                <div
                  id="service-2-header"
                  className="py-4 text-center text-2xl font-semibold"
                >
                  組裝
                </div>
                <div id="service-2-text" className="px-8 pb-4 text-center">
                我們嚴格的品質控制系統保證了無瑕疵的組裝工藝，即使是最嚴苛的規格要求，我們也能完美符合。
                </div>
              </div>
              <div className="flex flex-1 flex-col border border-gray-300">
                <img
                  className="h-44 object-cover lg:max-h-none"
                  alt=""
                  src="https://media.gettyimages.com/id/1153157935/photo/plastic-sprue-gate-cutting-and-sucction-pad-for-plastic-injection-manufacturing-process.jpg?b=1&s=612x612&w=0&k=20&c=ZIIpWMTEe0BMqMvPrH7wvLUtgloqdYrZWlZQNF5TMeU="
                  data-media='{"id":"1153157935","src":"iStock","type":"image"}'
                />
                <div
                  id="service-3-header"
                  className="py-4 text-center text-2xl font-semibold"
                >
                  包裝
                </div>
                <div id="service-3-text" className="px-8 pb-4 text-center">
                我們提供量身定制的包裝解決方案，不僅滿足產品功能需求，同時在視覺設計上也充滿吸引力。
                </div>
              </div>
              <div className="flex flex-1 flex-col border border-gray-300">
                <img
                  className="h-44 object-cover lg:max-h-none"
                  alt=""
                  src="https://media.gettyimages.com/id/1145648424/photo/plastic-sprue-gate-cutting-and-sucction-pad-for-plastic-injection-manufacturing-process.jpg?b=1&s=612x612&w=0&k=20&c=kPsv4O4Yvrgpjn7Fk7qhWVbiDwldtlRbkbXUJNTghFE="
                  data-media='{"id":"1145648424","src":"iStock","type":"image"}'
                />
                <div
                  id="service-4-header"
                  className="py-4 text-center text-2xl font-semibold"
                >
                  流程設計
                </div>
                <div id="service-4-text" className="px-8 pb-4 text-center">
                我們的流程設計服務集合了豐富經驗和專業知識，旨在優化生產流程，提升效率和成本效益，從而為客戶創造最大價值。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="code-section font-['Heebo']" id="qimfzn">
        <div id="service-one" className="primary-color-bg bg-green-500">
          <div className="container relative z-10 mx-auto py-12 lg:py-40 xl:px-12 2xl:px-36">
            <div className="flex flex-col-reverse lg:flex-row lg:space-x-12">
              <div className="flex-1 text-white">
                <div
                  id="big-service-1-header"
                  className="mb-6 text-center text-5xl font-semibold lg:text-left"
                >
                  定制塑膠射出成型 - 您的理想選擇
                </div>
                <div
                  id="big-service-1-text"
                  className="text-center text-xl font-light lg:text-left"
                >
                  作為領先的塑膠射出成型代工廠，我們提供從設計到生產的一站式服務。我們的專業團隊使用先進的塑膠模具技術，為您的產品設計提供量身定制的解決方案。
                  <br />
                  <br />
                  無論是小批量還是大規模生產，我們都能滿足您的需求，確保產品質量和交付速度。
                </div>
              </div>
              <div className="mb-12 flex-1 text-white">
                <img
                  className="max-h-64 w-full object-cover lg:max-h-none"
                  alt=""
                  src="https://media.gettyimages.com/id/1145647671/photo/plastic-sprue-gate-cutting-and-sucction-pad-for-plastic-injection-manufacturing-process.jpg?b=1&s=612x612&w=0&k=20&c=2KHyTV7VKThF4Uw3opG1OM5MKIOxnpwrPjpWOoGxOXk="
                  data-media='{"id":"1145647671","src":"iStock","type":"image"}'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="code-section relative font-['Heebo']" id="pt1t1o">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center object-cover brightness-[0.2]"
          style={{
            backgroundImage:
              "url(https://media.gettyimages.com/id/1153157935/photo/plastic-sprue-gate-cutting-and-sucction-pad-for-plastic-injection-manufacturing-process.jpg?b=1&s=612x612&w=0&k=20&c=ZIIpWMTEe0BMqMvPrH7wvLUtgloqdYrZWlZQNF5TMeU=)"
          }}
          data-media='{"id":"1153157935","src":"iStock","type":"image"}'
        ></div>
        <div id="service-two" className="">
          <div className="container relative z-10 mx-auto py-12 lg:py-40 xl:px-12 2xl:px-36">
            <div className="flex flex-col lg:flex-row lg:space-x-12">
              <div className="mb-12 flex-1">
                <img
                  className="max-h-64 w-full object-cover lg:max-h-none"
                  alt=""
                  src="https://media.gettyimages.com/id/1163745545/photo/plastic-sprue-gate-cutting-and-sucction-pad-for-plastic-injection-manufacturing-process.jpg?b=1&s=612x612&w=0&k=20&c=HRk9HG5XO6E3QAd5RNvLquocSAeAnrg_sVTRRxZ-r6M="
                  data-media='{"id":"1163745545","src":"iStock","type":"image"}'
                />
              </div>
              <div className="flex-1 text-white">
                <div
                  id="big-service-2-header"
                  className="mb-6 text-center text-5xl font-semibold lg:text-left"
                >
                  創新和精確 - 塑膠產品的未來
                </div>
                <div
                  id="big-service-2-text"
                  className="text-center text-xl font-light lg:text-left"
                >
                  我們的工廠裝備了最新的塑膠射出成型機器，專注於生產精密和高質量的塑膠部件。
                  <br />
                  <br />
                  我們的專業團隊不斷創新，尋求提高效率和精度的方法，以確保我們的客戶獲得最佳的產品性能。從汽車零件到醫療設備，我們的產品廣泛應用於各種行業。                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
</div>
    <section className="code-section font-['Heebo']" id="7jnrlk">
      <div id="service-three" className="bg-white">
        <div className="container relative z-10 mx-auto py-12 lg:py-40 xl:px-12 2xl:px-36">
          <div className="flex flex-col-reverse lg:flex-row lg:space-x-12">
            <div className="flex-1 text-black">
              <div
                id="big-service-3-header"
                className="mb-6 text-center text-5xl font-semibold lg:text-left"
              >
                品質和服務 - 您值得信賴的合作夥伴
              </div>
              <div
                id="big-service-3-text"
                className="text-center text-xl font-light lg:text-left"
              >
                客戶滿意是我們的首要任務。我們承諾提供卓越的客戶服務和無與倫比的產品質量。
                <br />
                <br />
                從原材料選擇到最終產品的檢驗，我們嚴格控制每一個生產環節。與我們合作，您將擁有一個可靠、靈活和專業的塑膠射出成型合作夥伴。              
              </div>
            </div>
            <div className="mb-12 flex-1 text-white">
              <img
                className="max-h-64 w-full object-cover lg:max-h-none"
                alt=""
                src="https://media.gettyimages.com/id/1153157935/photo/plastic-sprue-gate-cutting-and-sucction-pad-for-plastic-injection-manufacturing-process.jpg?b=1&s=612x612&w=0&k=20&c=ZIIpWMTEe0BMqMvPrH7wvLUtgloqdYrZWlZQNF5TMeU="
                data-media='{"id":"1153157935","src":"iStock","type":"image"}'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="code-section relative font-['Heebo']" id="7j46q">
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center object-cover brightness-[0.2]"
        style={{
          backgroundImage:
            "url(https://media.gettyimages.com/id/1145648424/photo/plastic-sprue-gate-cutting-and-sucction-pad-for-plastic-injection-manufacturing-process.jpg?b=1&s=612x612&w=0&k=20&c=kPsv4O4Yvrgpjn7Fk7qhWVbiDwldtlRbkbXUJNTghFE=)"
        }}
        data-media='{"id":"1145648424","src":"iStock","type":"image"}'
      ></div>
      <div
        id="testimonials"
        className="container relative z-10 mx-auto px-4 py-12 lg:py-32 xl:px-12 2xl:px-36"
      >
        <h3 className="primary-color-text pb-12 text-center text-3xl font-medium uppercase tracking-widest text-green-500">
          Our Best Testimonials!
        </h3>
        <div
          id="carousel"
          className="flex flex-col items-center justify-center space-y-12 lg:flex-row lg:space-x-6 lg:space-y-0"
        >
          <div className="carousel-card max-w-96 relative flex flex-col items-center justify-center border border-white py-12 lg:w-1/2">
            <div className="mb-8">
              <i
                className="fa-solid fa-star fa-xl"
                style={{ color: "rgb(245, 191, 63)" }}
              />
              <i
                className="fa-solid fa-star fa-xl"
                style={{ color: "rgb(245, 191, 63)" }}
              />
              <i
                className="fa-solid fa-star fa-xl"
                style={{ color: "rgb(245, 191, 63)" }}
              />
              <i
                className="fa-solid fa-star fa-xl"
                style={{ color: "rgb(245, 191, 63)" }}
              />
              <i
                className="fa-solid fa-star fa-xl"
                style={{ color: "rgb(245, 191, 63)" }}
              />
            </div>
            <div
              id="testimonials-1-quote"
              className="mb-4 px-10 text-center text-2xl font-thin tracking-wide text-white"
            >
              Working with Tai has powered our product lines to new levels.
              Their precision, quality, and stellar turnaround times have truly
              won us over.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="code-section relative bg-stone-100 font-['Heebo']"
      id="9ve3x"
    >
      <div className="container relative z-10 mx-auto px-6 py-12 lg:py-40 xl:px-12 2xl:px-36">
        <div className="flex flex-col-reverse lg:flex-row lg:space-x-12">
          <div className="flex flex-1 flex-col text-black lg:block">
            <div
              id="about-header"
              className="mb-6 text-center text-5xl font-semibold lg:text-left"
            >
              About Tai
            </div>
            <div
              id="about-text"
              className="pb-12 text-center text-xl font-light lg:text-left"
            >
              太樺工業股份有限公司，自1989年起，就以其卓越的專業知識和技術在塑膠製品生產領域中佔據領導地位。堅持「品質第一、誠信至上、服務客戶」的經營理念，我們不僅生產各式塑膠產品，更致力於為客戶提供全面的解決方案。
              <br />
              <br />
              在過去的幾十年裡，我們積極擴展業務範圍，涵蓋從小型定制部件到大規模生產需求的廣泛服務。我們的專業團隊擁有深厚的行業經驗，能夠快速響應市場變化，並提供符合最高標準的產品。太樺工業致力於成為您在塑膠製造過程中的堅實後盾，無論是產品設計的初期階段還是最終生產，我們都能提供專業的建議和支持。
              <br />
              <br />
              歡迎與我們聯繫，探索如何利用我們的專業技能和豐富經驗來推動您的業務發展。選擇太樺工業，意味著選擇一個有遠見、靈活且具備強大實力的合作夥伴。
            </div>
            <a
              href="/#contact-us"
              className="primary-color-bg inline-block px-8 py-4 text-center text-base font-semibold uppercase tracking-widest text-white hover:text-black bg-green-500"
            >
              聯絡我們
            </a>
          </div>
          <div className="relative hidden flex-1 text-white lg:block">
            <img
              className="aspect-square object-cover"
              alt=""
              src="https://media.gettyimages.com/id/1145648424/photo/plastic-sprue-gate-cutting-and-sucction-pad-for-plastic-injection-manufacturing-process.jpg?b=1&s=612x612&w=0&k=20&c=kPsv4O4Yvrgpjn7Fk7qhWVbiDwldtlRbkbXUJNTghFE="
              data-media='{"id":"1145648424","src":"iStock","type":"image"}'
            />
            <div className="absolute bottom-0 left-0 z-[1] h-1/4 w-1/2 bg-stone-100 pt-3">
              <div className="primary-color-bg flex h-full flex-col items-center justify-center bg-green-500">
                <div
                  id="about-number-estimate"
                  className="text-3xl font-medium"
                >
                  100+
                </div>
                <div
                  id="about-number-qualifier"
                  className="text-2xl font-medium"
                >
                  全球合作夥伴
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 z-[1] w-1/2 bg-stone-100 pl-3 pt-3">
              <img
                className="aspect-square object-cover"
                src="https://media.gettyimages.com/id/1145647671/photo/plastic-sprue-gate-cutting-and-sucction-pad-for-plastic-injection-manufacturing-process.jpg?b=1&s=612x612&w=0&k=20&c=2KHyTV7VKThF4Uw3opG1OM5MKIOxnpwrPjpWOoGxOXk="
                alt="Hero"
                data-media='{"id":"1145647671","src":"iStock","type":"image"}'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="code-section relative bg-white font-['Heebo']"
      id="6nhpjs"
    >
      <div
        id="contact-us"
        className="container relative z-10 mx-auto px-6 py-12 lg:py-40 xl:px-12 2xl:px-36"
      >
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="flex flex-1 flex-col text-black">
            <div
              id="contact-us-header"
              className="mb-6 flex-none text-center text-5xl font-semibold lg:text-left"
            >
              聯絡我們的專家
            </div>
            <div
              id="contact-us-text"
              className="flex-none pb-12 text-center text-xl font-light lg:text-left"
            >
              與我們經驗豐富的團隊討論您的製造需求
            </div>
            <div className="mb-12 flex-1">
              <iframe
                id="contact-us-google-maps-iframe-src-override"
                className="h-full w-full"
                loading="lazy"
                src="https://maps.google.com/maps?q=Tai%20Factory&t=m&z=11&output=embed&iwloc=near"
                title="Google Maps Iframe"
                aria-label="Google Maps Iframe"
              />
            </div>
          </div>
          <div className="primary-color-bg relative flex-1 bg-green-500">
            <form
              id="contact-us-form"
              action="#"
              method="post"
              className="space-y-6 p-8"
            >
              <div id="contact-us-name-field">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="mt-2 w-full rounded bg-white p-2 shadow-sm"
                />
              </div>
              <div id="contact-us-email-field">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="mt-2 w-full rounded bg-white p-2 shadow-sm"
                />
              </div>
              <div id="contact-us-phone-field">
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="mt-2 w-full rounded bg-white p-2 shadow-sm"
                />
              </div>
              <div id="contact-us-message-field">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="What Can We Help You With?"
                  className="mt-2 w-full rounded bg-white p-2 shadow-sm"
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  id="contact-us-submit-button"
                  type="submit"
                  className="w-full rounded bg-red-500 px-4 py-3 text-sm font-normal uppercase tracking-wider text-white hover:bg-red-600"
                >
                  Request Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
