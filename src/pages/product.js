// src/pages/product.js
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const ProductPage = () => (
    <Layout>
      <h1>About Us</h1>
      <p>This is a bit about us...</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default ProductPage
