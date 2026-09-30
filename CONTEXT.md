# Context & Domain Glossary — dothanhnguyen.com

Tài liệu ngữ cảnh và thuật ngữ thống nhất cho toàn bộ dự án `dothanhnguyen.com`.

## 1. Mục tiêu & Định danh dự án

- **Chủ sở hữu**: Đỗ Thành Nguyên (Nathan Do) — Automation Engineer & Chuyên gia Thiết kế Landing Page tối ưu chuyển đổi, làm việc tại TP. Hồ Chí Minh.
- **Website chính**: [https://dothanhnguyen.com](https://dothanhnguyen.com)
- **Kho mã nguồn**: `nathando-ai/dothanhnguyen.com`
- **Mục tiêu**: Nền tảng thống nhất bao gồm Portfolio giới thiệu dự án, blog công nghệ, thư viện tài nguyên tự động hóa và thông tin hồ sơ năng lực cá nhân.
- **Công nghệ nền tảng**: Docusaurus 3, React 19, TypeScript, TailwindCSS.

## 2. Khái niệm & Thuật ngữ cốt lõi

- **Portfolio Showcase (`#du-an`)**: Khu vực hiển thị các dự án tiêu biểu theo danh mục (SaaS, Landing Page, Tự động hóa & AI) với modal chi tiết bối cảnh, giải pháp và kết quả thực tế (ví dụ: `n8nworkflows.vn`, `seedinghub.xyz`, `dungcu.store`).
- **Quy trình Tự động hóa (n8n & Make.com)**: Thiết kế các luồng tự động kết nối webhooks, API bên thứ ba (AI, Zalo, Telegram, Facebook Graph API, CRM, Google Sheets) thành hệ thống chạy ngầm ổn định 24/7.
- **Landing Page CRO**: Thiết kế trang đích chuẩn chuyển đổi, tải trang nhanh, trải nghiệm thị giác hiện đại (Kinetic Glass / Glassmorphism), tối ưu trên cả desktop lẫn mobile.
- **Technical Blog (`/blog`)**: Chia sẻ kiến thức thực tế về tự động hóa, kiến trúc phần mềm và giải pháp số.
- **Hồ sơ & Chứng chỉ (`/about`)**: Thông tin giới thiệu năng lực cốt lõi, kinh nghiệm làm việc và các chứng nhận chuyên môn quốc tế (n8n Beginner & Intermediate Certifications).
- **GEO (Generative Engine Optimization)**: Tối ưu dữ liệu có cấu trúc Schema.org JSON-LD (Person, WebSite), tăng cường mức độ trích dẫn (citability) cho các công cụ tìm kiếm AI (ChatGPT, Perplexity, Gemini, Claude).

## 3. Kiến trúc thư mục dự án

```
├── blog/                   # Bài viết blog & tin tức (Markdown / MDX)
├── docs/                   # Tài liệu nội bộ & agent docs (docs/agents/)
├── data/                   # Dữ liệu có cấu trúc
│   ├── site.ts             # Metadata website, thông tin cá nhân
│   ├── social.ts           # Cấu hình mạng xã hội (Facebook, GitHub, Email)
│   ├── projects.tsx        # Danh mục & chi tiết các dự án thực tế
│   ├── features.tsx        # Các khối dịch vụ / năng lực cốt lõi
│   └── skills.tsx          # Kỹ năng và công cụ chuyên môn
├── src/
│   ├── components/         # React components (Landing sections, UI, Comment)
│   ├── pages/              # Các route chính (index.tsx, about.mdx)
│   ├── theme/              # Docusaurus theme overrides (Navbar, Footer, Layout)
│   └── css/                # CSS tùy biến & TailwindCSS 4
├── static/                 # Tài nguyên tĩnh (img/, icons/, manifest.json)
├── docusaurus.config.ts    # Cấu hình Docusaurus 3 (i18n vi, metadata, theme)
├── package.json            # Quản lý gói (pnpm@9.15.4, Node >= 24)
└── AGENTS.md               # Quy chuẩn vận hành dành cho coding agents
```

## 4. Các lệnh phát triển chuẩn

- `pnpm dev`: Khởi chạy môi trường phát triển local (`http://localhost:3000`).
- `pnpm build`: Đóng gói production static build (kiểm tra liên kết và biên dịch).
- `pnpm serve`: Chạy thử bản build production trên môi trường máy chủ nội bộ.
- `pnpm lint`: Kiểm tra chất lượng code với ESLint.
