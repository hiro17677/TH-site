// src/pages/contact.js
import React from "react"
import { Link } from "gatsby"
import Linkify from 'react-linkify';

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const ContactPage = () => (
  <Layout>
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">太樺工業股份有限公司</h1>
      <div className="flex flex-wrap-reverse -mx-4 pb-32">
        <div className="w-full md:w-1/2 lg:w-1/2 px-6 mb-8">
          <iframe
            id="contact-us-google-maps-iframe-src-override"
            className="h-80 w-full"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d638.7575344297768!2d121.43638578471132!3d25.089730758993184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a6053d80d101%3A0xd028c359e2ab0715!2z5aSq5qi65bel5qWt6IKh5Lu95pyJ6ZmQ5YWs5Y-4KOWhkeiGoOWwhOWHuuaIkOWei-W7oCk!5e0!3m2!1szh-TW!2sus!4v1705687067431!5m2!1szh-TW!2sus"
            title="Google Maps Iframe"
            aria-label="Google Maps Iframe"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8 flex flex-col justify-center pl-6">
          <Linkify>
            <p className="mb-2 pb-2"><span className="font-bold">電話:</span> <a href="tel:0911508775" className="text-black">0911-508-775</a></p>
            <p className="mb-2 pb-2"><span className="font-bold">電子郵件:</span> <a href="TAIHUAWUGU@gmail.com" className="text-black">TAIHUAWUGU@gmail.com</a></p>
            <p className="mb-2 pb-2 font-bold"><span className="font-bold">地址:</span> 新北市五股區成泰路二段147巷34號之36號</p>
            <p className="mb-2 pb-2 font-bold"><span className="font-bold">營業時間:</span> 星期一至五 08:30~17:30</p>
            <p className="mb-2 pb-2"><span className="font-bold">Line:</span> <a href="http://line.me/ti/p/~yourlineid" className="text-black">yourlineid</a></p>
          </Linkify>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage