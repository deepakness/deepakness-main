import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Deepak K"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`Deepak`, `Deepakness`, `Deepak K`, `Deepakness Blog`]}
        />
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
        <h1>
          <span role="img" aria-label="wave emoji">👋</span>
          {" "} Hey, I’m Deepak.
        </h1>

        <p>Mainly, I write and develop business strategies.</p>
        <p>
          I’ve been writing on the internet since 2015 and have learned a certain set of business skills on the way.
        </p>
        <p>Here’s what I exactly do:</p>

        <h2>I write...</h2>
        <p>I’ve always loved <a href="https://deepakness.com/blog">writing</a>. Whether it’s my personal journal or a public blog post – it’s fun to write. Also, writing pays my bills.</p>
        <p>Some of the best ones that I’ve written:</p>
        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://compile.blog/2021/02/05/marketing-technopologist/">Who is a Marketing Technopologist?</a></p>
        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://deepakness.medium.com/why-is-your-blog-not-growing-9-tips-199f590a462d">Why is Your Blog Not Growing?</a></p>
        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://compile.blog/2019/04/04/high-performing-digital-contents/">30+ Types of High Performing Content Marketing Ideas</a></p>
        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://deepakness.medium.com/why-manjaro-linux-is-the-best-linux-distribution-3ff79a50708f">Why Manjaro Linux is the Best Linux Distribution</a></p>
        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://deepakness.medium.com/what-it-was-like-to-be-colonized-by-the-british-6a03eea701fb">What It was Like to be Colonized by the British</a></p>

        <h2>I read...</h2>
        <p>I love to read too.</p>
        <p>Here’s a list of blogs that produce high-quality contents and that I really love:</p>
        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://compile.blog/the-blogs-database/">The Blogs Database</a></p>

        <h2>I create...</h2>
        <p>I create stuff on the internet.</p>
        <p><span role="img" aria-label="rocket emoji">🚀 </span>Started <a href="https://compile.blog">compile.blog</a> (in 2015) where I share technology and blogging tips.</p>
        <p><span role="img" aria-label="rocket emoji">🚀 </span>Started <a href="https://aspiringyouths.com">Aspiring Youths</a> as a side project but with time, have transformed it into a huge knowledge library for students.</p>

        <h2>I travel...</h2>
        <p>I travel too, occasionally.</p>
        <img style={{ margin: 0 }} src="Deepak-at-Hirakud.jpg" alt="Deepak at Hirakud" />

        <p>Here’s me at the longest earthen dam in the world – Hirakud, Sambalpur, India.</p>


        <h2>Currently...</h2>
        <p><span role="img" aria-label="rocket emoji">🚀 </span>Taking <a href="https://notes.deepakness.com">public raw notes</a> on things I learn</p>
        <p><span role="img" aria-label="rocket emoji">🚀 </span>Learning to code</p>
        <p><span role="img" aria-label="rocket emoji">🚀 </span>Reading “Outliers” by Malcolm Gladwell</p>

        <Link to="/blog/">
          <Button marginTop="35px">Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
