import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title="Privacy Policy" />
                <h1>Privacy Policy</h1>
                <p>Your privacy is important to us. It is https://deepakness.com’s policy to respect your privacy regarding any information we may collect from you across our website, https://deepakness.com, and other sites we own and operate.</p>

                <p>Like any other website, https://deepakness.com uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.</p>

                <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>

                <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>

                <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>

                <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>

                <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

                <p>https://deepakness.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

                <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>

                <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>

                <p>Sometimes https://deepakness.com may show some advertisement to its visitors. Some of the advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</p>

                <ul>
                    <li>Google: <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></li>
                </ul>

                <p>Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on https://deepakness.com, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

                <p>Note that https://deepakness.com has no access to or control over these cookies that are used by third-party advertisers.</p>

                <p>By using our website, you hereby consent to our Privacy Policy and agree to its <a href="https://deepakness.com/terms-conditions">Terms and Conditions</a>.</p>

                <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at deepak[at]deepakness.com</p>

                <p>This policy is effective as of 1 March 2021.</p>

            </Layout>
        )
    }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
