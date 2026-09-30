export const projects: Project[] = [
  {
    title: 'n8nworkflows.vn',
    description: '⚡ Thư viện lưu trữ & chia sẻ workflows n8n bằng tiếng Việt — dễ tra cứu, tải về và áp dụng ngay cho doanh nghiệp.',
    preview: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    website: 'https://n8nworkflows.vn',
    source: null,
    tags: ['product', 'favorite', 'opensource'],
    type: 'web',
  },
  {
    title: 'dungcu.store',
    description: '🛒 Landing page bán hàng tối ưu tỷ lệ chuyển đổi CRO, tốc độ tải siêu tốc 99/100 trên Mobile, checkout 2 bước.',
    preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    website: 'https://dungcu.store',
    source: null,
    tags: ['product', 'design'],
    type: 'commerce',
  },
  {
    title: 'seedinghub.xyz',
    description: '💼 Chuyên trang tuyển dụng tích hợp reviews — chia sẻ trải nghiệm ứng tuyển và môi trường làm việc thực tế.',
    preview: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    website: 'https://seedinghub.xyz',
    source: null,
    tags: ['product', 'favorite', 'large'],
    type: 'web',
  },
  {
    title: 'Hệ thống 20 Fanpages Facebook',
    description: '🤖 Hệ thống 20 page Facebook affiliate tự động hóa 100% luồng cào xu hướng, biên tập, gắn link và đăng bài 24/7.',
    preview: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
    website: 'https://www.facebook.com/d0thanhnguyen',
    source: null,
    tags: ['product', 'favorite'],
    type: 'app',
  },
  {
    title: 'n8n Automation theo yêu cầu',
    description: '⚙️ Dịch vụ tư vấn & triển khai quy trình tự động hóa n8n chuyên sâu cho doanh nghiệp và chủ shop bán hàng.',
    preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    website: 'https://www.facebook.com/d0thanhnguyen',
    source: null,
    tags: ['product', 'favorite'],
    type: 'commerce',
  },
  {
    title: 'dothanhnguyen.com',
    description: '⚡ Trang cá nhân & Blog công nghệ xây dựng trên nền tảng Docusaurus 3, React 19, TailwindCSS và Kinetic UI.',
    preview: '/img/project/blog.png',
    website: 'https://dothanhnguyen.com',
    source: 'https://github.com/nathando-ai/dothanhnguyen.com',
    tags: ['opensource', 'design', 'favorite'],
    type: 'web',
  },
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'design' | 'large' | 'personal'

export type ProjectType = 'web' | 'app' | 'commerce' | 'personal' | 'toy' | 'other'

export const projectTypeMap = {
  web: '🖥️ Website',
  app: '💫 Ứng dụng & Tool',
  commerce: '🛒 Thương mại & Dịch vụ',
  personal: '👨‍💻 Cá nhân',
  toy: '⚡ Thử nghiệm',
  other: '🗃️ Khác',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: 'Nổi bật',
    description: 'Dự án tâm đắc nhất!',
    color: '#e9669e',
  },
  opensource: {
    label: 'Open Source',
    description: 'Dự án mã nguồn mở đóng góp cộng đồng!',
    color: '#39ca30',
  },
  product: {
    label: 'Sản phẩm',
    description: 'Sản phẩm hoạt động thực tế!',
    color: '#dfd545',
  },
  design: {
    label: 'Giao diện',
    description: 'Thiết kế đẹp mắt, tối ưu UX/UI!',
    color: '#a44fb7',
  },
  large: {
    label: 'Hệ thống',
    description: 'Hệ thống quy mô lớn, kiến trúc phức tạp',
    color: '#8c2f00',
  },
  personal: {
    label: 'Cá nhân',
    description: 'Dự án cá nhân',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
