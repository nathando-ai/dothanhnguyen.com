import React, { useState } from 'react'
import { Section } from '../Section'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

type ProjectDetail = {
  id: string
  title: string
  category: 'saas' | 'landing' | 'automation' | 'all'
  categoryLabel: string
  icon: string
  summary: string
  role: string
  outcome: string
  techTags: string[]
  website: string
  modalType: string
  challenge: string
  solution: string
  results: string[]
}

const PROJECT_ITEMS: ProjectDetail[] = [
  {
    id: 'n8nworkflows',
    title: 'n8nworkflows.vn',
    category: 'saas',
    categoryLabel: 'Founder & Lead Dev',
    icon: '⚡',
    summary: 'Thư viện lưu trữ & chia sẻ workflows n8n bằng tiếng Việt — dễ tra cứu, tải về và áp dụng ngay cho doanh nghiệp.',
    role: 'Sáng lập & Thiết kế — Tự phát triển toàn bộ trang web từ A đến Z',
    outcome: 'Tạo ra kho mẫu tự động hóa bằng tiếng Việt giúp mọi người tải về dùng ngay mà không cần biết lập trình.',
    techTags: ['n8n', 'Node.js', 'React', 'TailwindCSS'],
    website: 'https://n8nworkflows.vn',
    modalType: 'Dự án / Platform',
    challenge: 'Cộng đồng n8n tại Việt Nam ngày càng phát triển nhưng thiếu một thư viện tổng hợp workflow mẫu chuẩn hóa bằng tiếng Việt. Việc tự học và cấu hình từ đầu tốn nhiều thời gian của các nhà phát triển và chủ doanh nghiệp.',
    solution: 'Xây dựng nền tảng chia sẻ workflow trực quan, cho phép người dùng tìm kiếm theo loại tích hợp (Facebook, Zalo, Google Sheets, OpenAI, Webhook) và tải file JSON workflow về import trực tiếp chỉ với 1 click.',
    results: [
      'Hơn 100+ workflow tự động hóa phổ biến được phát hành.',
      'Phục vụ hàng nghìn lượt tải và tái sử dụng workflow hàng tháng.',
      'Giúp tiết kiệm hàng trăm giờ làm việc cho cộng đồng automation Việt Nam.',
    ],
  },
  {
    id: 'dungcustore',
    title: 'dungcu.store',
    category: 'landing',
    categoryLabel: 'E-Commerce & CRO',
    icon: '🛒',
    summary: 'Landing page bán hàng với nội dung thu hút và luồng mua hàng được tối ưu hóa nhằm nâng cao tỷ lệ chuyển đổi chốt đơn.',
    role: 'Phát triển Frontend & Tối ưu CRO — Thiết kế Single Page tối giản',
    outcome: 'Đạt điểm Google PageSpeed 99/100, tăng 35% tỷ lệ chốt đơn hàng trên thiết bị di động.',
    techTags: ['Single Page', 'CRO', 'Web Vitals', 'Responsive'],
    website: 'https://dungcu.store',
    modalType: 'Landing Page & CRO',
    challenge: 'Đơn vị bán lẻ dụng cụ cần một trang đích với tốc độ tải siêu tốc dưới 1 giây trên mạng 4G di động và tối ưu giao diện bán hàng để chốt đơn ngay lập tức.',
    solution: 'Thiết kế landing page chuẩn Kinetic Glass với nguyên lý Single Page, nén ảnh WebP tự động, tối ưu critical CSS và luồng đặt hàng đơn giản (2 bước checkout không cần đăng ký tài khoản).',
    results: [
      'Tốc độ Google PageSpeed Insights đạt 99/100 trên Mobile.',
      'Tỷ lệ chuyển đổi (Conversion Rate) tăng 35% so với trang bán hàng cũ.',
    ],
  },
  {
    id: 'seedinghub',
    title: 'seedinghub.xyz',
    category: 'saas',
    categoryLabel: 'SaaS Platform',
    icon: '💼',
    summary: 'Chuyên trang tuyển dụng tích hợp reviews — nơi chia sẻ trải nghiệm ứng tuyển & môi trường làm việc thực tế.',
    role: 'Sáng lập & Quản trị — Xây dựng nền tảng đánh giá thực tế',
    outcome: 'Giúp người tìm việc có nơi tham khảo review môi trường làm việc chân thực trước khi nộp đơn.',
    techTags: ['Full-Stack', 'REST API', 'PostgreSQL', 'SEO Optimized'],
    website: 'https://seedinghub.xyz',
    modalType: 'SaaS Platform',
    challenge: 'Ứng viên ngành công nghệ cần một nơi tra cứu trải nghiệm phỏng vấn và môi trường làm việc thực tế tại các công ty IT một cách minh bạch.',
    solution: 'Phát triển hệ thống web app với backend REST API mạnh mẽ, cơ chế đánh giá ẩn danh bảo mật, tích hợp hệ thống phân duyệt nội dung chống spam.',
    results: [
      'Hơn 500+ đánh giá môi trường làm việc thực tế.',
      'Trở thành địa chỉ tham khảo uy tín cho ứng viên trước khi nộp CV.',
    ],
  },
  {
    id: 'facebookpages',
    title: 'Hệ thống 20 Fanpages Facebook',
    category: 'automation',
    categoryLabel: 'Social Automation',
    icon: '🤖',
    summary: 'Hệ thống 20 page Facebook chạy affiliate tự động hóa hoàn toàn luồng biên tập, lên lịch và đăng nội dung đa kênh.',
    role: 'Cấu hình tự động hóa — Thiết lập kịch bản tự đăng bài tự động',
    outcome: '20 fanpage tự đăng bài đều đặn 24/7 mà không cần người ngồi canh đăng thủ công.',
    techTags: ['Python Scripting', 'Graph API', 'n8n', 'Cron Workers'],
    website: 'https://www.facebook.com/d0thanhnguyen',
    modalType: 'Social Automation',
    challenge: 'Quản lý 20 trang Facebook với lịch đăng bài dày đặc đòi hỏi nhân sự lớn nếu vận hành thủ công.',
    solution: 'Xây dựng hệ thống tự động hóa bằng Python Script kết hợp n8n Workflow và Facebook Graph API. Tự động cào dữ liệu xu hướng, biên tập nội dung, tạo link affiliate và đặt lịch đăng bài trải dài 24/7.',
    results: [
      'Vận hành hoàn toàn tự động 20 fanpage mà không cần nhân sự trực.',
      'Tạo nguồn lượng truy cập affiliate ổn định và đều đặn.',
    ],
  },
  {
    id: 'n8nservices',
    title: 'n8n Automation theo yêu cầu',
    category: 'automation',
    categoryLabel: 'Client Service',
    icon: '⚙️',
    summary: 'Dịch vụ tư vấn & triển khai quy trình tự động hóa n8n chuyên sâu cho doanh nghiệp và chủ shop bán hàng online.',
    role: 'Tư vấn & Cài đặt — Lắng nghe nhu cầu và xây dựng quy trình tự động',
    outcome: 'Giúp chủ shop và doanh nghiệp tiết kiệm 70% thời gian làm việc tay chân mỗi ngày.',
    techTags: ['n8n Custom Nodes', 'Webhook', 'OpenAI API', 'CRM Integration'],
    website: 'https://www.facebook.com/d0thanhnguyen',
    modalType: 'Dịch vụ Tư vấn',
    challenge: 'Nhiều doanh nghiệp và chủ shop online tốn hàng giờ mỗi ngày để nhập liệu thủ công, nhắn tin thông báo đơn hàng và kiểm tra tồn kho.',
    solution: 'Thiết kế các kịch bản n8n tự động: đồng bộ đơn hàng về Google Sheets/CRM, gửi thông báo đơn hàng qua Zalo/Telegram bot, và tích hợp AI chatbot trả lời khách hàng 24/7.',
    results: [
      'Tiết kiệm hơn 70% thời gian xử lý đơn hàng thủ công.',
      'Phản hồi khách hàng tức thì qua bot tự động, không lo sót tin nhắn.',
    ],
  },
]

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'saas' | 'landing' | 'automation'>('all')
  const [activeProject, setActiveProject] = useState<ProjectDetail | null>(null)

  const filteredProjects = PROJECT_ITEMS.filter((item) => {
    if (filter === 'all') return true
    return item.category === filter
  })

  return (
    <div id="du-an" className="py-12">
      <Section
        title="Những sản phẩm tôi đã xây dựng"
        icon="ri:projector-line"
      >
        <p className="mb-6 text-base text-zinc-600 dark:text-zinc-400">
          Từ nền tảng SaaS, Landing Page tối ưu chuyển đổi cho đến hệ thống tự động hóa n8n quy mô lớn.
        </p>

        {/* Filter Tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {[
            { key: 'all', label: `Tất cả (${PROJECT_ITEMS.length})` },
            { key: 'saas', label: 'SaaS & Community' },
            { key: 'landing', label: 'Landing Page' },
            { key: 'automation', label: 'Automation & AI' },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`rounded-xl px-4 py-2 text-xs font-medium transition-all md:text-sm ${
                filter === tab.key
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:bg-zinc-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all hover:border-blue-500/40 hover:shadow-lg dark:border-zinc-800/80 dark:bg-zinc-900/60"
              >
                <div>
                  {/* Card Header */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                      {project.categoryLabel}
                    </span>
                    <span className="text-2xl">{project.icon}</span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="mb-4 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400">
                    {project.summary}
                  </p>

                  {/* Role & Outcome details */}
                  <div className="mb-4 space-y-2 rounded-xl bg-zinc-50/80 p-3 text-xs dark:bg-zinc-800/40">
                    <div>
                      <span className="font-semibold text-zinc-700 dark:text-zinc-300">Vai trò: </span>
                      <span className="text-zinc-600 dark:text-zinc-400">{project.role}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-zinc-700 dark:text-zinc-300">Kết quả: </span>
                      <span className="text-zinc-600 dark:text-zinc-400">{project.outcome}</span>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {project.techTags.map(tag => (
                      <span
                        key={tag}
                        className="rounded-md border border-zinc-200/60 bg-white/80 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:border-zinc-700/60 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 border-t border-zinc-100 pt-2 dark:border-zinc-800">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex-1 rounded-xl border border-zinc-200 bg-white/80 px-3 py-2 text-xs font-semibold text-zinc-700 transition-all hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-200 dark:hover:bg-zinc-700"
                  >
                    Xem chi tiết
                  </button>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition-all hover:bg-blue-700 hover:text-white hover:no-underline"
                  >
                    <span>Truy cập</span>
                    <Icon icon="ri:external-link-line" className="size-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
          {activeProject && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={e => e.stopPropagation()}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 rounded-full p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                >
                  <Icon icon="ri:close-line" className="size-5" />
                </button>

                <div className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  {activeProject.modalType}
                </div>
                <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-white">
                  {activeProject.title}
                </h3>

                <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
                  <div>
                    <h4 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-100">
                      Bối cảnh & Thách thức:
                    </h4>
                    <p>{activeProject.challenge}</p>
                  </div>

                  <div>
                    <h4 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-100">
                      Giải pháp & Kiến trúc:
                    </h4>
                    <p>{activeProject.solution}</p>
                  </div>

                  <div>
                    <h4 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-100">
                      Kết quả đạt được:
                    </h4>
                    <ul className="list-disc space-y-1 pl-5">
                      {activeProject.results.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <a
                    href={activeProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:text-white hover:no-underline"
                  >
                    <span>Truy cập dự án ↗</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Section>
    </div>
  )
}
