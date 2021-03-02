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
                <SEO title="Terms and Conditions" />
                <h1>Terms and Conditions</h1>

                <p><strong>1. Terms</strong></p>

                <p>By accessing the website at https://deepakness.com, you are agreeing to be bound by these terms of service, all applicable laws, and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>

                <p><strong>2. Use License</strong></p>

                <ol>
                    <li>Permission is granted to temporarily download one copy of the materials (information or software) on https://deepakness.com’s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:

                        <ol>

                            <li>modify or copy the materials;</li>

                            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>

                            <li>attempt to decompile or reverse engineer any software contained on https://deepakness.com’s website;</li>

                            <li>remove any copyright or other proprietary notations from the materials; or</li>

                            <li>transfer the materials to another person or “mirror” the materials on any other server.</li>

                        </ol>
                    </li>

                    <li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by https://deepakness.com at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li>

                </ol>

                <p><strong>3. Disclaimer</strong></p>

                <ol>

                    <li>The materials on https://deepakness.com’s website are provided on an ‘as is’ basis. https://deepakness.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>

                    <li>Further, https://deepakness.com does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</li>

                </ol>

                <p><strong>4. Limitations</strong></p>

                <p>In no event shall https://deepakness.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on https://deepakness.com’s website, even if https://deepakness.com or a https://deepakness.com authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>

                <p><strong>5. Accuracy of materials</strong></p>

                <p>The materials appearing on https://deepakness.com’s website could include technical, typographical, or photographic errors. https://deepakness.com does not warrant that any of the materials on its website are accurate, complete or current. https://deepakness.com may make changes to the materials contained on its website at any time without notice. However, https://deepakness.com does not make any commitment to update the materials.</p>

                <p><strong>6. Links</strong></p>

                <p>https://deepakness.com has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by https://deepakness.com of the site. Use of any such linked website is at the user’s own risk.</p>

                <p><strong>7. Modifications</strong></p>

                <p>https://deepakness.com may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>

                <p><strong>8. Governing Law</strong></p>

                <p>These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

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
