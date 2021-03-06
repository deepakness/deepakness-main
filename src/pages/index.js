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
          title="Business Strategist and Blogger"
          keywords={[`Deepak`, `Deepak's Blog`, `Deepakness`, `Deepak K`, `Deepakness Blog`]}
        />
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
        {/* <h1>
          <span role="img" aria-label="wave emoji">👋</span>
          {" "} Yo!
        </h1> */}
        <p><span role="img" aria-label="wave emoji">👋 </span><strong>Yo! I’m Deepak.</strong></p>
        <p>Mainly, I write about business and technology.</p>

        <p>
          I’ve been paying my bills by writing on the internet since 2015. Plus, I'm exploring some other things too.
        </p>

        <p>Here’s what I exactly do:</p>

        <h2>I write...</h2>
        <p>I’ve always loved <a href="https://deepakness.com/blog">writing</a>. Whether it’s my personal journal or a public blog post – it’s fun to write. Initially, I struggled with writing but it got better with time (you'll see 😋).</p>

        <p>Some of the best ones that I’ve written:</p>

        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://deepakness.com/blog/hitbik-story/">Hitbik Story - Lessons Learned from a Failed Startup</a></p>

        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://deepakness.com/blog/engineering-as-marketing/">Engineering as Marketing - The Ultimate Growth Hack</a></p>

        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://deepakness.com/blog/cost-price-value/">Cost - Price - Value</a></p>

        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://deepakness.com/blog/marketing-technopologist/">Everything about a Marketing Technopologist</a></p>

        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://deepakness.com/blog/millennianls-and-internet/">What a Millennial Wants from the Internet?</a></p>

        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://deepakness.com/blog/product-hunt-launch-checklist/">Product Hunt Launch Checklist</a></p>

        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://deepakness.com/blog/how-i-started-writing/">How I got Started with Writing</a></p>

        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://compile.blog/why-your-blog-is-not-growing/" rel="noreferrer" target="_blank">10 Reasons Why Your Blog is NOT Growing</a></p>

        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://compile.blog/2019/04/04/high-performing-digital-contents/" rel="noreferrer" target="_blank">30+ Types of High Performing Content Marketing Ideas</a></p>

        <Link to="/blog/">
          <Button marginTop="35px" marginBottom="40px">All Posts →</Button>
        </Link>

        <h2>I read...</h2>
        <p>I love to read too - mostly online articles but also <a href="https://deepakness.com/blog/books/">books</a> sometimes.</p>
        <p>Here’s a list of blogs that produce high-quality contents and that I really love:</p>
        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://compile.blog/the-blogs-database/" rel="noreferrer" target="_blank">The Blogs Database</a></p>

        <h2>I create...</h2>
        <p>I create stuff on the internet.</p>
        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://compile.blog" rel="noreferrer" target="_blank">compile.blog</a>: A blog on blogging and technology tips.</p>

        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://www.personalwebsites.top/" rel="noreferrer" target="_blank">Personal Websites List</a>: A list of 100+ personal websites with 15+ data points.</p>

        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://100.exposed" rel="noreferrer" target="_blank">100 Exposed</a>: Useful and detailed lists for makers.</p>

        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://aspiringyouths.com" rel="noreferrer" target="_blank">Aspiring Youths</a>: A huge knowledge library for students.</p>

        <p><span role="img" aria-label="rocket emoji">🚀 </span><a href="https://enrzi.in" rel="noreferrer" target="_blank">enrzi.in</a>: A blog about electric vehicles.</p>

        <h2>I travel...</h2>
        <p>I travel too, occasionally.</p>
        <img style={{ margin: 0 }} src="Deepak-at-Hirakud.jpg" alt="Deepak at Hirakud" />

        <p>Here’s me at the longest earthen dam in the world – Hirakud, Sambalpur, India.</p>


        <h2>Currently...</h2>
        <p><span role="img" aria-label="rocket emoji">🚀 </span>Creating <a href="https://100.exposed" rel="noreferrer" target="_blank">100 Exposed</a></p>
        <p><span role="img" aria-label="rocket emoji">🚀 </span>Taking <a href="https://notes.deepakness.com" rel="noreferrer" target="_blank">public raw notes</a> on things I learn</p>
        <p><span role="img" aria-label="rocket emoji">🚀 </span>Learning to code</p>
        <p><span role="img" aria-label="rocket emoji">🚀 </span>Reading “The Lessons of History”</p>

        <Link to="/blog/">
          <Button marginTop="35px" marginBottom="40px">Blog →</Button>
        </Link>
        {/* 
        <hr />

        <p><a href="https://deepakness.com/privacy-policy/">Privacy Policy</a> | <a href="https://deepakness.com/terms-conditions/">Terms and Conditions</a></p> */}

      </Layout>
    )
  }
}

export default IndexPage
