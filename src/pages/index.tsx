import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Head from '@docusaurus/Head'
import Hero from '../components/landing/Hero'
import ProjectsSection from '../components/landing/ProjectsSection'
import BlogSection from '../components/landing/BlogSection'
import ContactSection from '../components/landing/ContactSection'
import Particles from '../components/magicui/particles'

export default function Home() {
  const {
    siteConfig: { customFields, title },
  } = useDocusaurusContext()
  const { description } = (customFields as { description?: string }) || {}

  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Đỗ Thành Nguyên',
    'jobTitle': 'Full-Stack Developer & Automation Engineer',
    'url': 'https://dothanhnguyen.com',
    'sameAs': [
      'https://github.com/nathando-ai',
      'https://www.facebook.com/d0thanhnguyen',
      'https://linkedin.com/in/dothanhnguyen',
    ],
    'knowsAbout': [
      'Full-Stack Web Development',
      'n8n Automation',
      'Go',
      'React',
      'Node.js',
      'System Architecture',
    ],
    'description':
      'Lập trình viên full-stack tại Hồ Chí Minh chuyên xây dựng sản phẩm web tốc độ cao và tự động hóa quy trình.',
  }

  return (
    <Layout
      title={`${title} — Full-Stack Developer & Automation Engineer`}
      description={description}
    >
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(schemaJsonLd)}
        </script>
      </Head>

      <main className="relative overflow-hidden">
        <Hero />
        <Particles className="pointer-events-none absolute inset-0" quantity={60} ease={80} color="#2563eb" refresh />

        <div className="relative mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          {/* Section 01: Projects */}
          <ProjectsSection />

          {/* Section 02: Recent Articles & Insights */}
          <div id="bai-viet">
            <BlogSection />
          </div>

          {/* Section 03: Contact & Collaboration */}
          <ContactSection />
        </div>
      </main>
    </Layout>
  )
}
