# AGENTS.md

Tài liệu hướng dẫn dành cho AI coding agents (Codex, Antigravity, Claude Code, Cursor) khi làm việc trên repository này. Luôn ưu tiên tuân thủ hướng dẫn trong file `AGENTS.md` gần thư mục làm việc nhất.

## Tổng quan dự án

Website cá nhân và blog của **Đỗ Thành Nguyên** (dothanhnguyen.com), được xây dựng trên nền tảng **Docusaurus 3**, **React 19**, **TypeScript** và **TailwindCSS**. Nội dung chính bao gồm: Portfolio dự án, bài viết chia sẻ về quy trình tự động hóa (n8n, Make.com), tối ưu chuyển đổi Landing Page và trang thông tin cá nhân/chứng chỉ.

### Cấu trúc thư mục chính:

- `blog/`: Các bài viết công nghệ và hướng dẫn tự động hóa. Metadata bài viết sử dụng Front Matter (`slug`, `title`, `date`, `authors`, `tags`, `keywords`, `description`). Cắt đoạn tóm tắt bài viết bằng `{/* truncate */}`.
- `docs/`: Tài liệu và hướng dẫn agent (`docs/agents/`).
- `data/`: Dữ liệu cấu trúc cho website:
  - `site.ts`: Thông tin website, tác giả, mô tả chung.
  - `social.ts`: Danh sách liên kết mạng xã hội (Facebook, GitHub, Email...).
  - `projects.tsx`: Dữ liệu dự án thực tế (SaaS, Landing Page, Automation & AI).
  - `features.tsx`: Các khối giá trị cốt lõi / dịch vụ.
  - `skills.tsx`: Kỹ năng và công nghệ sử dụng.
- `src/pages/`: Các trang custom chính:
  - `index.tsx`: Trang chủ kết hợp giới thiệu, dự án tiêu biểu và dịch vụ.
  - `about.mdx`: Trang giới thiệu bản thân, kỹ năng và chứng chỉ (n8n Certification).
- `src/components/`: Các React component (Landing sections, Comment, Iconify, Motion...).
- `src/theme/`: Docusaurus theme overrides (Swizzled components: Navbar, Footer...). Hãy cẩn trọng khi sửa đổi để giữ nguyên các hành vi cốt lõi của Docusaurus.
- `src/css/`: CSS toàn cục và tích hợp TailwindCSS.
- `static/`: Tài nguyên tĩnh (`static/img/`, `static/manifest.json`, icon, logo). Khi nhúng hình ảnh cục bộ, sử dụng đường dẫn gốc, ví dụ: `/img/project/blog.png`.
- `i18n/`: Ngôn ngữ mặc định của trang web là `vi` (Tiếng Việt).

> **Lưu ý**: Tuyệt đối không chỉnh sửa trực tiếp các thư mục phụ thuộc hoặc sinh tự động: `node_modules/`, `.docusaurus/`, `build/`.

## Môi trường & Lệnh thực thi

Sử dụng **pnpm** (phiên bản `pnpm@9.15.4`, Node.js `>=24.0`).

Các lệnh thông dụng:
- Cài đặt dependencies: `pnpm install`
- Chạy môi trường dev: `pnpm dev`
- Đóng gói kiểm tra production: `pnpm build`
- Xem trước bản build: `pnpm serve`
- Kiểm tra lint: `pnpm lint`
- Tự động sửa lỗi lint: `pnpm lint:fix`
- Xóa cache & build directory: `pnpm clear`

## Quy ước lập trình & Code Style

- **TypeScript**: Bật `strict` mode. Giữ đầy đủ kiểu dữ liệu type/interface, tránh lạm dụng `any`.
- **Code Style**: Thụt lề 2 spaces, sử dụng single quotes (`'`), hạn chế dùng dấu chấm phẩy (semicolon) theo chuẩn Prettier của repo.
- **React**: Ưu tiên function components và React Hooks. Tái sử dụng các component và hook có sẵn.
- **Styling**: Sử dụng TailwindCSS kết hợp với CSS Modules (`styles.module.css`) cho các tùy biến cục bộ. Không tự ý cài đặt thêm thư viện styling khác.
- **Docusaurus APIs**: Ưu tiên dùng các API chuẩn từ `@docusaurus/core`, `@docusaurus/Link`, `useDocusaurusContext`...

## Quy ước nội dung & Ngôn ngữ

- Toàn bộ nội dung hiển thị cho người dùng (UI text, menu, footer, blog, landing page) sử dụng **Tiếng Việt**.
- Giữ phong cách hành văn chuyên nghiệp, súc tích, mang đậm tính thực chiến về tự động hóa và thiết kế web.
- Giao tiếp và báo cáo tiến độ với người dùng bằng **Tiếng Việt**.

## Quy trình kiểm tra & Xác thực

Trước khi bàn giao kết quả cho người dùng:
1. Đọc lại diff và các file đã chỉnh sửa để đảm bảo không sót cú pháp, biến thừa hay broken links.
2. Chạy `pnpm lint` khi sửa code TypeScript, React hoặc component.
3. Chạy `pnpm build` khi sửa cấu hình Docusaurus, routing, dữ liệu tĩnh hoặc plugins để đảm bảo không lỗi lúc build production.
4. Báo cáo kết quả ngắn gọn, chỉ rõ những file và tính năng đã thay đổi.

## Agent Skills & Integration

- **Issue tracker**: GitHub Issues tại https://github.com/nathando-ai/dothanhnguyen.com. Xem `docs/agents/issue-tracker.md`.
- **Triage labels**: Nhãn chuẩn (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). Xem `docs/agents/triage-labels.md`.
- **Domain docs**: Quản lý ngữ cảnh dự án tập trung tại `CONTEXT.md`.
