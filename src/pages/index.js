import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import backgroundImage from '../images/S__434198.jpg';

const IndexPage = () => (
  <Layout>
    <div className="frame-root">
      <div className="frame-content">
      <section
        className="code-section overflow-hidden font-['Heebo']"
      >
        <div className="relative md:h-[700px]">
          <div className="seo-image absolute inset-0 z-0 h-full w-full bg-cover bg-center object-cover brightness-75 lg:brightness-100 hovered-element"
             data-media='{"id":"1163745545","src":"iStock","type":"image"}'
          >
            <StaticImage
              className="h-full w-full object-cover "
              src="../images/S__434200.jpg"
              alt="描述文本"
              placeholder="blurred"
              layout="fullWidth"
            />
          </div>
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
                  專業塑膠射出代工廠
                </h1>
                <p
                  id="hero-subtext"
                  className="mb-8 text-base font-normal tracking-wide text-white"
                >
                  太樺工業股份有限公司成立於1989年，已是成立多年專業各式塑膠製品代工廠，貫徹"品質第一"，"誠信至上"，"服務客戶"精神，不斷追求公司成長與創新並持續朝工廠自動化發展
                </p>
                <a
                  id="hero-cta-button"
                  href="#contact-us"
                  className="primary-color-bg inline-block px-8 py-4 text-base font-semibold uppercase tracking-widest text-white hover:text-black bg-green-500 no-underline"
                >
                  聯絡我們
                </a>
              </div>
            </div>
          </div>
          <div className="relative -top-[5.8rem] z-20 hidden lg:block">            
          </div>
        </div>
      </section>
      <section className="code-section py-4 font-['Heebo'] md:py-8">
        <div
          id="services"
          className="container mx-auto py-12 sm:py-20 xl:px-12 2xl:px-36"
        >
          <div className="flex flex-col">
            <h3
              id="services-mini-header"
              className="primary-color-text pb-8 text-center text-base font-medium uppercase tracking-widest lg:text-left text-green-500"
            >
              服務項目
            </h3>
            <div className="flex flex-col pb-8 sm:flex-row">
              <div
                id="services-header"
                className="mb-8 flex-1 text-center text-4xl font-semibold lg:text-left"
              >
                各種塑膠成型代工
              </div>
              <div
                id="services-text"
                className="flex-1 px-6 text-center text-xl lg:text-left"
              >
                  太樺工業成立多年服務多家代工，對於各種塑膠成型擁有相當經驗，配合模具開發到塑膠
                  射出提供整體服務
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
              <div className="flex flex-1 flex-col border border-gray-300">
              <StaticImage
                src="../images/injection.jpg"
                alt="描述"
                className="h-44 object-cover lg:max-h-none"
                placeholder="blurred"
                layout="constrained"
              />
                <div
                  id="service-1-header"
                  className="py-4 text-center text-2xl font-semibold"
                >
                  射出成型
                </div>
                <div id="service-1-text" className="px-8 pb-4 text-center">
                我們為各行各業提供塑膠射出成型服務，憑藉多年豐富經驗，確保每一件產品都達到客戶要求。
                </div>
              </div>
              <div className="flex flex-1 flex-col border border-gray-300">
              <StaticImage
                src="../images/S__9535493.jpg"
                alt="描述"
                className="h-44 object-cover lg:max-h-none"
                placeholder="blurred"
                layout="constrained"
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
              <StaticImage
                src="../images/S__9535497.jpg"
                alt="描述"
                className="h-44 object-cover lg:max-h-none"
                placeholder="blurred"
                layout="constrained"
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
              <StaticImage
                src="../images/S__434362.jpg"
                alt="描述"
                className="h-44 object-cover lg:max-h-none"
                placeholder="blurred"
                layout="constrained"
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
      <section className="code-section font-['Heebo']">
        <div id="service-one" className="primary-color-bg bg-blue-600">
          <div className="container relative z-10 mx-auto py-12 lg:py-40 xl:px-12 2xl:px-36">
            <div className="flex flex-col-reverse lg:flex-row lg:space-x-12">
              <div className="flex-1 text-white px-6">
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
                <StaticImage
                  className="max-h-64 w-full object-cover lg:max-h-none"
                  src="../images/S__9535498.jpg"
                  alt="描述文本"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="code-section relative font-['Heebo']">
          <StaticImage
            className="absolute inset-0 h-full w-full bg-cover bg-center object-cover brightness-[0.2]"
            src="../images/S__434198.jpg"
            alt="描述文本"
          />
        <div id="service-two" className="">
          <div className="container relative z-10 mx-auto py-12 lg:py-40 xl:px-12 2xl:px-36">
            <div className="flex flex-col lg:flex-row lg:space-x-12">
              <div className="mb-12 flex-1">
                <StaticImage
                  className="max-h-64 w-full object-cover lg:max-h-none"
                  src="../images/S__9535495.jpg"
                  alt="描述文本"
                />
              </div>
              <div className="flex-1 text-white px-6">
                <div
                  id="big-service-2-header"
                  className="mb-6 text-center text-5xl font-semibold lg:text-left"
                >
                  多年OEM代工經驗 您的專業夥伴
                </div>
                <div
                  id="big-service-2-text"
                  className="text-center text-xl font-light lg:text-left"
                >
                  我們的工廠配備了多種射出成形機，從50噸射出機到260噸射出機台，專注於各項塑膠成型，我們的團隊不斷的創新和開發新客戶，包含文具商品，工安類別，汽車配件
                  <br />
                  <br />
                  ，環境用藥塑膠製品，小家電塑膠製品至五金塑膠類別等，我們服務各行各業只要是塑膠製品都能完成客戶需求                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section className="code-section font-['Heebo']">
      <div id="service-three" className="bg-white">
        <div className="container relative z-10 mx-auto py-12 lg:py-40 xl:px-12 2xl:px-36">
          <div className="flex flex-col-reverse lg:flex-row lg:space-x-12">
            <div className="flex-1 text-black px-6">
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
                客戶滿意是我們的首要任務。我們承諾提供卓越的客戶服務和達到客戶要求產品質量。
                <br />
                <br />
                從原材料選擇到最終產品的檢驗，我們嚴格控制每一個生產環節。與我們合作，您將擁有一個可靠、靈活和專業的塑膠射出成型合作夥伴。              
              </div>
            </div>
            <div className="mb-12 flex-1 text-white">
              <StaticImage
                className="max-h-64 w-full object-cover lg:max-h-none"
                src="../images/S__434360.jpg"
                alt="描述文本"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="code-section relative bg-stone-100 font-['Heebo']"
    >
      <div className="container relative z-10 mx-auto px-6 py-12 lg:py-40 xl:px-12 2xl:px-36">
        <div className="flex flex-col-reverse lg:flex-row lg:space-x-12">
          <div className="flex flex-1 flex-col text-black lg:block">
            <div
              id="about-header"
              className="mb-6 text-center text-5xl font-semibold lg:text-left"
            >
              關於太樺
            </div>
            <div
              id="about-text"
              className="pb-12 text-center text-xl font-light lg:text-left"
            >
              太樺工業股份有限公司，自1989年起，就以其卓越專業知識和技術在塑膠製品生產領域中。堅持「品質第一、誠信至上、服務客戶」的經營理念，我們不僅生產各式塑膠產品，更致力於為客戶提供全面的解決方案。
              <br />
              <br />
              在過去的幾十年裡，我們積極擴展業務範圍，涵蓋從小型定制部件到大規模生產需求的廣泛服務。我們的專業團隊擁有深厚的行業經驗，能夠快速響應市場變化，並提供符合最高標準的產品。太樺工業致力於成為您在塑膠製造過程中的堅實後盾，無論是產品設計的初期階段還是最終生產，我們都能提供專業的建議和支持。
              <br />
              <br />
              歡迎與我們聯繫，探索如何利用我們的專業技能和豐富經驗來推動您的業務發展。選擇太樺工業，意味著選擇一個有遠見、靈活且具備強大實力的合作夥伴。
            </div>
            <a
              href="/#contact-us"
              className="primary-color-bg inline-block px-8 py-4 text-center text-base font-semibold uppercase tracking-widest text-white hover:text-green-500 bg-blue-600 no-underline"
            >
              聯絡我們
            </a>
          </div>
          <div className="relative hidden flex-1 text-white lg:block">
            <StaticImage
              className="aspect-square object-cover"
              src="../images/S__434198.jpg"
              alt="描述文本"
            />
            <div className="absolute bottom-0 left-0 z-[1] h-1/4 w-1/2 bg-stone-100 pt-3">
              <div className="primary-color-bg flex h-full flex-col items-center justify-center bg-blue-600">
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
              <StaticImage
                className="aspect-square object-cover"
                src="../images/S__9535499.jpg"
                alt="描述文本"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="code-section relative bg-white font-['Heebo']"
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
                className="h-80 w-full"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d638.7575344297768!2d121.43638578471132!3d25.089730758993184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a6053d80d101%3A0xd028c359e2ab0715!2z5aSq5qi65bel5qWt6IKh5Lu95pyJ6ZmQ5YWs5Y-4KOWhkeiGoOWwhOWHuuaIkOWei-W7oCk!5e0!3m2!1szh-TW!2sus!4v1705687067431!5m2!1szh-TW!2sus"
                title="Google Maps Iframe"
                aria-label="Google Maps Iframe"
              />
            </div>
          </div>
          <div className="primary-color-bg relative flex-1 bg-blue-600">
            <form
              id="contact-us-form"
              action="https://formspree.io/f/mjvngpqz"
              method="POST"
              className="space-y-6 p-8"
            >
              <div id="contact-us-name-field">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="姓名"
                  className="mt-2 w-full rounded bg-white p-2 shadow-sm"
                />
              </div>
              <div id="contact-us-email-field">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="電子郵件"
                  className="mt-2 w-full rounded bg-white p-2 shadow-sm"
                />
              </div>
              <div id="contact-us-phone-field">
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="電話"
                  className="mt-2 w-full rounded bg-white p-2 shadow-sm"
                />
              </div>
              <div id="contact-us-message-field">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="有甚麼需求?"
                  className="mt-2 w-full rounded bg-white p-2 shadow-sm"
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  id="contact-us-submit-button"
                  type="submit"
                  className="w-full rounded bg-green-500 px-4 py-3 text-sm font-normal uppercase tracking-wider text-white hover:bg-red-600"
                >
                  送出資料
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
