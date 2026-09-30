import React, { useState } from 'react'
import { Icon } from '@iconify/react'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = 'contact@dothanhnguyen.com'

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    }
  }

  return (
    <section id="lien-he" className="py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-b from-white/90 to-zinc-50/80 p-8 shadow-xl backdrop-blur-md md:p-12 dark:border-zinc-800/80 dark:from-zinc-900/90 dark:to-zinc-950/80">
          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 size-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
            <Icon icon="ri:shake-hands-line" className="size-3.5" />
            <span>Hợp tác & Kết nối</span>
          </div>

          <h2 className="mb-4 text-2xl font-extrabold text-zinc-900 md:text-3xl dark:text-white">
            Bạn đang tìm kiếm một Lập trình viên hoặc giải pháp Automation?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base dark:text-zinc-400">
            Hãy trao đổi với tôi về ý tưởng dự án, quy trình cần tự động hóa bằng n8n hoặc đơn giản là một cuộc trò chuyện về công nghệ và kiến trúc hệ thống.
          </p>

          {/* Action Buttons */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 active:scale-95"
            >
              <Icon icon={copied ? 'ri:check-line' : 'ri:file-copy-line'} className="size-4" />
              <span>{copied ? 'Đã sao chép Email!' : email}</span>
            </button>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/80 px-5 py-3 text-sm font-semibold text-zinc-800 backdrop-blur-md transition-all hover:bg-zinc-100 hover:text-blue-600 hover:no-underline dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-200 dark:hover:bg-zinc-700"
            >
              <Icon icon="ri:mail-send-line" className="size-4" />
              <span>Gửi Email trực tiếp</span>
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            <a
              href="https://github.com/nathando-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-600 hover:no-underline dark:hover:text-blue-400"
            >
              <Icon icon="ri:github-fill" className="size-4" />
              <span>GitHub</span>
            </a>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <a
              href="https://www.facebook.com/d0thanhnguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-600 hover:no-underline dark:hover:text-blue-400"
            >
              <Icon icon="ri:facebook-box-fill" className="size-4" />
              <span>Facebook</span>
            </a>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <a
              href="https://linkedin.com/in/dothanhnguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-600 hover:no-underline dark:hover:text-blue-400"
            >
              <Icon icon="ri:linkedin-box-fill" className="size-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
