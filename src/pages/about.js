// src/pages/about.js
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const AboutPage = () => (
    <Layout>
      <div className="container mx-auto text-center py-8 px-6">
        <h1 className={`text-4xl font-bold text-gray-800 mb-4 ${styles.titleUnderline}`}>關於我們</h1>
        <p className="text-lg text-gray-600 mb-4 mx-auto pb-32">太樺工業股份有限公司，自1989年起，就以其卓越專業知識和技術在塑膠製品生產領域中。堅持「品質第一、誠信至上、服務客戶」的經營理念，我們不僅生產各式塑膠產品，更致力於為客戶提供全面的解決方案。
        <br/>
        <br/>
        在過去的幾十年裡，我們積極擴展業務範圍，涵蓋從小型定制部件到大規模生產需求的廣泛服務。我們的專業團隊擁有深厚的行業經驗，能夠快速響應市場變化，並提供符合最高標準的產品。太樺工業致力於成為您在塑膠製造過程中的堅實後盾，無論是產品設計的初期階段還是最終生產，我們都能提供專業的建議和支持。
        <br/>
        <br/>
        歡迎與我們聯繫，探索如何利用我們的專業技能和豐富經驗來推動您的業務發展。選擇太樺工業，意味著選擇一個有遠見、靈活且具備強大實力的合作夥伴。
        </p>
      </div>
    </Layout>
)

export default AboutPage
