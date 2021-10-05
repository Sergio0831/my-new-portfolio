import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/SEO"
import Error from "../components/UIComponents/Error"

const ErrorPage = () => {
  return (
    <Layout>
      <Seo title="Error" />
      <Error />
    </Layout>
  )
}

export default ErrorPage
