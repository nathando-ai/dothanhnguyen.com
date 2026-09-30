import Link from '@docusaurus/Link'
import IconExternalLink from '@theme/Icon/ExternalLink'
import social from '@site/data/social'
import { siteInfo } from '@site/data/site'
import styles from './styles.module.css'

type FooterLink = {
  label: string
  href?: string
  showExternalIcon?: boolean
  to?: string
}

const currentYear = new Date().getFullYear()

const linkGroups: Array<{ title: string, links: FooterLink[] }> = [
  {
    title: 'Về tôi',
    links: [
      { label: 'Trang chủ', to: '/' },
      { label: 'Giới thiệu', to: '/about' },
      { label: 'Mã nguồn website', href: siteInfo.repository },
    ],
  },
  {
    title: 'Khám phá',
    links: [
      { label: 'Dự án & Sản phẩm', to: '/#du-an' },
      { label: 'Bài viết / Blog', to: '/blog' },
      { label: 'Lưu trữ bài viết', to: '/blog/archive' },
    ],
  },
  {
    title: 'Kết nối',
    links: [
      { label: 'GitHub', href: social.github.href },
      { label: 'Facebook', href: social.facebook.href },
      { label: 'LinkedIn', href: social.linkedin.href },
      { label: 'Gửi Email', href: social.email.href },
    ],
  },
]

const utilityLinks: FooterLink[] = [
  { label: 'RSS Feed', href: `${siteInfo.url}${social.rss.href}`, showExternalIcon: false },
  { label: 'Sitemap', href: `${siteInfo.url}/sitemap.xml`, showExternalIcon: false },
]

function FooterAnchor({ link }: { link: FooterLink }): JSX.Element {
  const showExternalIcon = link.showExternalIcon ?? Boolean(link.href?.startsWith('http'))
  const linkProps = link.href ? { href: link.href } : { to: link.to }

  return (
    <Link {...linkProps} className={styles.link}>
      {link.label}
      {showExternalIcon && <IconExternalLink className={styles.externalIcon} />}
    </Link>
  )
}

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <section className={styles.brand} aria-label="Thông tin website">
            <h2 className={styles.title}>{siteInfo.name}</h2>
            <p className={styles.description}>{siteInfo.description}</p>
            <p className={styles.copyright}>
              <span>
                {`© ${siteInfo.copyrightStartYear}-${currentYear} ${siteInfo.name}`}
              </span>
              <br />
              <span>
                Phát triển với
                {' '}
                <Link href="https://docusaurus.io">Docusaurus 3</Link>
                {' '}
                & React.
              </span>
            </p>
          </section>

          <nav className={styles.groups} aria-label="Điều hướng chân trang">
            {linkGroups.map(group => (
              <section key={group.title} className={styles.group}>
                <h3 className={styles.groupTitle}>{group.title}</h3>
                <ul className={styles.groupList}>
                  {group.links.map(link => (
                    <li key={link.label}>
                      <FooterAnchor link={link} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <nav className={styles.utility} aria-label="Đăng ký và Sơ đồ trang">
            {utilityLinks.map(link => (
              <FooterAnchor key={link.label} link={link} />
            ))}
          </nav>

          <div className={styles.records}>
            <span>{siteInfo.location}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
