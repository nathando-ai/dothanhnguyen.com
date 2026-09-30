import { type Variants, motion } from 'framer-motion'
import Translate from '@docusaurus/Translate'
import Link from '@docusaurus/Link'

import HeroSvg from './img/hero.svg'
import SocialLinks from '@site/src/components/SocialLinks'
import styles from './styles.module.css'

const variants: Variants = {
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 100,
      duration: 0.3,
      delay: i * 0.15,
    },
  }),
  hidden: { opacity: 0, y: 30 },
}

function Circle() {
  return <div className={styles.circle} />
}

export default function Hero() {
  return (
    <motion.div className={styles.hero}>
      <div className={styles.intro}>
        {/* Status Badge */}
        <motion.div custom={0} initial="hidden" animate="visible" variants={variants} className="mb-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-600 backdrop-blur-md dark:text-emerald-400">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Đang nhận dự án Web & Tư vấn n8n Automation</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          className={styles.hero_text}
          custom={1}
          initial="hidden"
          animate="visible"
          variants={variants}
          onMouseMove={(e) => {
            e.currentTarget.style.setProperty('--x', `${e.clientX}px`)
            e.currentTarget.style.setProperty('--y', `${e.clientY}px`)
          }}
        >
          <Translate id="homepage.hero.greet">Xin chào! Tôi là</Translate>
          {' '}
          <span className={styles.name}>
            <Translate id="homepage.hero.name">Đỗ Thành Nguyên</Translate>
          </span>
          <span className="ml-1">⚡</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p custom={2} initial="hidden" animate="visible" variants={variants} className="text-base max-lg:px-4 md:text-lg">
          <Translate id="homepage.hero.text">
            Tôi là n8n Automation Expert & Full-Stack Developer — chuyên thiết kế landing page tối ưu chuyển đổi và tự động hóa quy trình doanh nghiệp với n8n, Make.com.
          </Translate>
        </motion.p>

        {/* Action Buttons */}
        <motion.div custom={3} initial="hidden" animate="visible" variants={variants} className="my-4 flex flex-wrap items-center gap-3">
          <Link
            to="/#du-an"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:text-white hover:no-underline"
          >
            <span>Xem dự án</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/#trick-tip"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/70 px-5 py-2.5 text-sm font-semibold text-zinc-800 backdrop-blur-md transition-all hover:bg-white hover:text-blue-600 hover:no-underline dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <span>Mẹo kỹ thuật</span>
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/70 px-5 py-2.5 text-sm font-semibold text-zinc-800 backdrop-blur-md transition-all hover:bg-white hover:text-blue-600 hover:no-underline dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <span>Đọc bài viết</span>
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <motion.div custom={4} initial="hidden" animate="visible" variants={variants} className="my-5 grid max-w-lg grid-cols-3 gap-3">
          <div className="rounded-xl border border-zinc-200/60 bg-white/40 p-3 text-center backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-900/40">
            <div className="text-xl font-bold text-blue-600 md:text-2xl dark:text-blue-400">10+</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Dự án Landing Page</div>
          </div>
          <div className="rounded-xl border border-zinc-200/60 bg-white/40 p-3 text-center backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-900/40">
            <div className="text-xl font-bold text-blue-600 md:text-2xl dark:text-blue-400">3 năm</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Kinh nghiệm thực chiến</div>
          </div>
          <div className="rounded-xl border border-zinc-200/60 bg-white/40 p-3 text-center backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-900/40">
            <div className="text-xl font-bold text-blue-600 md:text-2xl dark:text-blue-400">n8n & Make</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Tự động hóa quy trình</div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div custom={5} initial="hidden" animate="visible" variants={variants}>
          <SocialLinks />
        </motion.div>
      </div>

      <motion.div className={styles.background}>
        <HeroSvg />
        <Circle />
      </motion.div>
    </motion.div>
  )
}
