import Translate, { translate } from '@docusaurus/Translate'
import { Icon } from '@iconify/react'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import SpiderSvg from '@site/static/svg/undraw_spider.svg'
import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'

export type FeatureItem = {
  title: string | React.ReactNode
  description: string | React.ReactNode
  header: React.ReactNode
  icon?: React.ReactNode
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.fullstack',
      message: 'Full-Stack Web Development',
    }),
    description: (
      <Translate id="homepage.feature.fullstack.desc">
        Xây dựng các sản phẩm web tốc độ cao, giao diện chuẩn Kinetic hiện đại với React, Go, Node.js, TailwindCSS và kiến trúc hướng module bền vững.
      </Translate>
    ),
    header: <WebDeveloperSvg className="h-auto w-full" height={150} role="img" />,
    icon: <Icon icon="logos:typescript-icon" className="size-4 text-neutral-500" />,
  },
  {
    title: translate({
      id: 'homepage.feature.automation',
      message: 'n8n & Workflow Automation',
    }),
    description: (
      <Translate id="homepage.feature.automation.desc">
        Sáng lập n8nworkflows.vn — Chuyên gia tư vấn và thiết lập các kịch bản tự động hóa doanh nghiệp, tích hợp OpenAI, CRM, Zalo và Facebook 24/7.
      </Translate>
    ),
    header: <SpiderSvg className="h-auto w-full" height={150} role="img" />,
    icon: <Icon icon="simple-icons:n8n" className="size-4 text-orange-500" />,
  },
  {
    title: translate({
      id: 'homepage.feature.architecture',
      message: 'Kiến trúc & Tối ưu Hiệu năng',
    }),
    description: (
      <Translate id="homepage.feature.architecture.desc">
        Thiết kế hệ thống chịu tải với Go và NATS, mô hình Caching 3 tầng, Docker multi-stage gọn nhẹ và tối ưu Web Vitals điểm số 99+.
      </Translate>
    ),
    header: <OpenSourceSvg className="h-auto w-full" height={150} role="img" />,
    icon: <Icon icon="logos:docker-icon" className="size-4 text-blue-500" />,
  },
]

export default FEATURES
