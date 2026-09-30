import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes } from 'prism-react-renderer'
import { siteInfo } from './data/site'
import type { GiscusConfig } from './src/components/Comment'

const config: Config = {
  title: 'Đỗ Thành Nguyên',
  url: siteInfo.url,
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'nathando-ai',
  projectName: 'dothanhnguyen.com',
  customFields: {
    bio: 'Full-Stack Developer & Automation Engineer',
    description: 'Portfolio & Blog của Đỗ Thành Nguyên — Lập trình viên full-stack & Automation Engineer tại Hồ Chí Minh. Dự án web, quy trình n8n automation, mẹo kỹ thuật và bài viết công nghệ.',
  },
  themeConfig: {
    // announcementBar: {
    //   id: 'announcementBar-3',
    //   content: ``,
    // },
    image: 'img/og.png',
    metadata: [
      {
        name: 'author',
        content: 'Đỗ Thành Nguyên',
      },
      {
        name: 'keywords',
        content: 'Đỗ Thành Nguyên, Full-Stack Developer, n8n Automation, Portfolio, Web Developer Ho Chi Minh, Go, React, Tailwind, Software Architecture',
      },
      {
        name: 'description',
        content: 'Tôi xây dựng các sản phẩm web nhanh, gọn và bền vững — từ kiến trúc backend đến các quy trình n8n automation tự động hóa.',
      },
    ],
    navbar: {
      title: 'Đỗ Thành Nguyên',
      logo: {
        alt: 'Đỗ Thành Nguyên',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      hideOnScroll: true,
      items: [
        { label: 'Dự án', position: 'right', to: '/#du-an' },
        { label: 'Bài viết', position: 'right', to: '/blog' },
        { label: 'Giới thiệu', position: 'right', to: '/about' },
      ],
    },
    footer: {
      style: 'dark',
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
      additionalLanguages: ['bash', 'json', 'java', 'python', 'php', 'graphql', 'rust', 'toml', 'protobuf', 'diff'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    giscus: {
      repo: 'kuizuo/blog',
      repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
      category: 'General',
      categoryId: 'DIC_kwDOF7NJDM4CPK95',
      theme: 'light',
      darkTheme: 'dark_dimmed',
    } satisfies Partial<GiscusConfig>,
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    liveCodeBlock: { playgroundPosition: 'top' },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css', './src/css/tweet-theme.css'],
        },
        sitemap: {
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        },
        debug: process.env.NODE_ENV === 'development',
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-image-zoom',
    '@docusaurus/plugin-ideal-image',
    // ['docusaurus-plugin-baidu-tongji', { token: 'c9a3849aa75f9c4a4e65f846cd1a5155' }],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: process.env.NODE_ENV === 'development',
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#12affa' },
        ],
      },
    ],
    [
      'vercel-analytics',
      {
        debug: process.env.NODE_ENV === 'development',
        mode: 'auto',
      },
    ],
    [
      './src/plugin/plugin-content-blog', // Để có dữ liệu blog toàn cục
      {
        path: 'blog',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/nathando-ai/dothanhnguyen.com/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: 'Chia sẻ kiến thức lập trình full-stack, thiết kế hệ thống và n8n automation',
        blogSidebarCount: 12,
        blogSidebarTitle: 'Bài viết gần đây',
        postsPerPage: 18,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'Đỗ Thành Nguyên',
          description: 'Blog công nghệ & quy trình Automation của Đỗ Thành Nguyên',
          copyright: `Copyright © ${new Date().getFullYear()} Đỗ Thành Nguyên Built with Docusaurus.`,
        },
      },
    ],
    async function tailwindcssPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('@tailwindcss/postcss'))
          return postcssOptions
        },
      }
    },
    async function injectMotto() {
      return {
        name: 'docusaurus-motto',
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: 'script',
                innerHTML: `
    (${function () {
      console.log(
        `%c Đỗ Thành Nguyên %c https://dothanhnguyen.com`,
        'color: #fff; margin: 1em 0; padding: 5px 0; background: #2563eb;',
        'margin: 1em 0; padding: 5px 0; background: #efefef;',
      )

      const motto = `
Website của Đỗ Thành Nguyên — Full-Stack Developer & Automation Engineer.
dothanhnguyen.com — Tối ưu tốc độ, tự động hóa quy trình.
`

      if (document.firstChild?.nodeType !== Node.COMMENT_NODE) {
        document.prepend(document.createComment(motto))
      }
    }.toString()})();`,
              },
            ],
          }
        },
      }
    },
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Portfolio & Blog của Đỗ Thành Nguyên — Full-Stack Developer & Automation Engineer',
      },
    },
  ],
  storage: {
    type: 'localStorage',
    namespace: true,
  },
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Normal.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Medium.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Semibold.min.css',
  ],
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },
  onBrokenLinks: 'warn',
  onBrokenAnchors: 'ignore',
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: false,
      siteStorageNamespacing: true,
      fasterByDefault: true,
      mdx1CompatDisabledByDefault: true,
    },
    faster: {
      ssgWorkerThreads: true,
      rspackBundler: true,
      rspackPersistentCache: true,
      gitEagerVcs: true,
    },
  },
}

export default config
