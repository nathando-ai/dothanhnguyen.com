/* ==========================================================================
   Kinetic Glass Interactive Logic — dothanhnguyen.com
   ========================================================================== */

// Data Store for Modal Content
const modalData = {
    // Projects
    'n8nworkflows': {
        type: 'Dự án / Platform',
        title: 'n8nworkflows.vn — Thư viện Workflows n8n Tiếng Việt',
        content: `
            <p><strong>Bối cảnh & Thách thức:</strong> Cộng đồng n8n tại Việt Nam ngày càng phát triển nhưng thiếu một thư viện tổng hợp workflow mẫu chuẩn hóa bằng tiếng Việt. Việc tự học và cấu hình từ đầu tốn nhiều thời gian của các nhà phát triển và chủ doanh nghiệp.</p>
            <h4>Giải pháp & Kiến trúc:</h4>
            <p>Xây dựng nền tảng chia sẻ workflow trực quan, cho phép người dùng tìm kiếm theo loại tích hợp (Facebook, Zalo, Google Sheets, OpenAI, Webhook) và tải file JSON workflow về import trực tiếp chỉ với 1 click.</p>
            <h4>Kết quả đạt được:</h4>
            <ul>
                <li>• Hơn 100+ workflow tự động hóa phổ biến được phát hành.</li>
                <li>• Phục vụ hàng nghìn lượt tải và tái sử dụng workflow hàng tháng.</li>
                <li>• Giúp tiết kiệm hàng trăm giờ làm việc cho cộng đồng automation Việt Nam.</li>
            </ul>
            <div style="margin-top: 1.5rem;">
                <a href="https://n8nworkflows.vn" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    <span>Ghé thăm n8nworkflows.vn ↗</span>
                </a>
            </div>
        `
    },
    'dungcustore': {
        type: 'Landing Page & CRO',
        title: 'dungcu.store — Landing Page Tối Ưu Chuyển Đổi',
        content: `
            <p><strong>Bối cảnh & Thách thức:</strong> Đơn vị bán lẻ dụng cụ cần một trang đích với tốc độ tải siêu tốc dưới 1 giây trên mạng 4G di động và tối ưu giao diện bán hàng để chốt đơn ngay lập tức.</p>
            <h4>Giải pháp & Kiến trúc:</h4>
            <p>Thiết kế landing page chuẩn Kinetic Glass với nguyên lý Single Page, nén ảnh WebP tự động, tối ưu critical CSS và luồng đặt hàng đơn giản (2 bước checkout không cần đăng ký tài khoản).</p>
            <h4>Kết quả đạt được:</h4>
            <ul>
                <li>• Tốc độ Google PageSpeed Insights đạt 99/100 trên Mobile.</li>
                <li>• Tỷ lệ chuyển đổi (Conversion Rate) tăng 35% so với trang bán hàng cũ.</li>
            </ul>
            <div style="margin-top: 1.5rem;">
                <a href="https://dungcu.store" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    <span>Ghé thăm dungcu.store ↗</span>
                </a>
            </div>
        `
    },
    'seedinghub': {
        type: 'SaaS Platform',
        title: 'seedinghub.xyz — Nền tảng Review & Tuyển Dụng',
        content: `
            <p><strong>Bối cảnh & Thách thức:</strong> Ứng viên ngành công nghệ cần một nơi tra cứu trải nghiệm phỏng vấn và môi trường làm việc thực tế tại các công ty IT một cách minh bạch.</p>
            <h4>Giải pháp & Kiến trúc:</h4>
            <p>Phát triển hệ thống web app với backend REST API mạnh mẽ, cơ chế đánh giá ẩn danh bảo mật, tích hợp hệ thống phân duyệt nội dung chống spam.</p>
            <h4>Kết quả đạt được:</h4>
            <ul>
                <li>• Hơn 500+ đánh giá môi trường làm việc thực tế.</li>
                <li>• Trở thành địa chỉ tham khảo uy tín cho ứng viên trước khi nộp CV.</li>
            </ul>
            <div style="margin-top: 1.5rem;">
                <a href="https://seedinghub.xyz" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    <span>Ghé thăm seedinghub.xyz ↗</span>
                </a>
            </div>
        `
    },
    'facebookpages': {
        type: 'Social Automation',
        title: 'Hệ thống 20 Fanpages Facebook Affiliate Tự Động',
        content: `
            <p><strong>Bối cảnh & Thách thức:</strong> Quản lý 20 trang Facebook với lịch đăng bài dày đặc đòi hỏi nhân sự lớn nếu vận hành thủ công.</p>
            <h4>Giải pháp & Kiến trúc:</h4>
            <p>Xây dựng hệ thống tự động hóa bằng Python Script kết hợp n8n Workflow và Facebook Graph API. Tự động cào dữ liệu xu hướng, biên tập nội dung, tạo link affiliate và đặt lịch đăng bài trải dài 24/7.</p>
            <h4>Kết quả đạt được:</h4>
            <ul>
                <li>• Vận hành hoàn toàn tự động 20 fanpage mà không cần nhân sự trực.</li>
                <li>• Tạo nguồn lượng truy cập affiliate ổn định và đều đặn.</li>
            </ul>
            <div style="margin-top: 1.5rem;">
                <a href="https://www.facebook.com/d0thanhnguyen" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    <span>Xem Fanpages Facebook ↗</span>
                </a>
            </div>
        `
    },
    'n8nservices': {
        type: 'Dịch vụ Tư vấn',
        title: 'Dịch vụ Xây dựng n8n Automation theo yêu cầu',
        content: `
            <p><strong>Nội dung dịch vụ:</strong> Tư vấn kiến trúc và triển khai các quy trình tự động hóa cá nhân hóa cho doanh nghiệp:</p>
            <ul>
                <li>• Tự động đồng bộ đơn hàng từ Ecommerce về Google Sheets / Notion / CRM.</li>
                <li>• Gửi thông báo đơn hàng & CSKH tự động qua Zalo ZNS / Telegram Bot.</li>
                <li>• Tích hợp AI (ChatGPT, Claude) xử lý phản hồi comment và tin nhắn tự động.</li>
                <li>• Xây dựng báo cáo doanh thu gửi tự động 8:00 sáng mỗi ngày.</li>
            </ul>
            <div style="margin-top: 1.5rem;">
                <a href="https://www.facebook.com/d0thanhnguyen" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    <span>Liên hệ tư vấn Automation ↗</span>
                </a>
            </div>
        `
    },

    // Articles
    'article-go': {
        type: 'Bài viết Kỹ thuật',
        title: 'Kiến trúc Event-Driven với Go và NATS JetStream',
        content: `
            <p><em>Xuất bản ngày 12 tháng 03 năm 2026 • 6 phút đọc</em></p>
            <p>Trong các hệ thống phân tán hiện đại, kiến trúc Event-Driven (dựa trên sự kiện) giúp giải quấn (decouple) các dịch vụ và tăng khả năng mở rộng (scalability) lên gấp nhiều lần.</p>
            <h4>Tại sao lại là Go + NATS JetStream?</h4>
            <p>Go sở hữu mô hình concurrency cực nhẹ với Goroutines, kết hợp cùng NATS JetStream — một Message Broker siêu nhanh với độ trễ tính bằng microsecond và bộ nhớ tiêu thụ cực thấp.</p>
            <h4>Ví dụ mô hình xử lý:</h4>
            <pre><code>// Go Consumer NATS JetStream
js.Subscribe("ORDERS.created", func(m *nats.Msg) {
    var order OrderEvent
    json.Unmarshal(m.Data, &order)
    go processOrder(order)
    m.Ack()
})</code></pre>
            <p>Bằng cách ứng dụng cơ chế At-Least-Once Delivery của JetStream, hệ thống đảm bảo không bao giờ mất sự kiện ngay cả khi backend service bị crash đột ngột.</p>
        `
    },
    'article-tailwind': {
        type: 'Bài viết Kỹ thuật',
        title: 'Tailwind CSS v4: Những thay đổi quan trọng',
        content: `
            <p><em>Xuất bản ngày 28 tháng 02 năm 2026 • 4 phút đọc</em></p>
            <p>Tailwind CSS v4 mang đến cuộc cách mạng về hiệu năng biên dịch nhờ engine **Oxide** được viết bằng Rust.</p>
            <h4>Những điểm mới nổi bật:</h4>
            <ul>
                <li>• <strong>CSS-first Configuration:</strong> Bạn không cần file <code>tailwind.config.js</code> nữa. Tất cả theme, font, màu sắc đều khai báo trực tiếp trong file CSS bằng directive <code>@theme</code>.</li>
                <li>• <strong>Biên dịch nhanh gấp 10 lần:</strong> Oxide engine giúp rebuild CSS trong vài millisecond.</li>
                <li>• <strong>Container Queries tích hợp sẵn:</strong> Dễ dàng tạo responsive component theo kích thước container thay vì chỉ phụ thuộc vào viewport screen.</li>
            </ul>
        `
    },
    'article-resilience': {
        type: 'Bài viết Kỹ thuật',
        title: 'Thiết kế hệ thống chống lỗi (Fault-Tolerant Systems)',
        content: `
            <p><em>Xuất bản ngày 05 tháng 02 năm 2026 • 8 phút đọc</em></p>
            <p>Trong môi trường sản xuất, việc dịch vụ bên thứ ba (Third-party API) gặp sự cố là điều không thể tránh khỏi. Thiết kế hệ thống chống lỗi giúp ứng dụng vẫn hoạt động an toàn thay vì sụp đổ dây chuyền (cascading failure).</p>
            <h4>4 Mẫu thiết kế cốt lõi:</h4>
            <ol>
                <li><strong>1. Circuit Breaker:</strong> Ngắt kết nối tạm thời khi tỷ lệ lỗi vượt ngưỡng cho phép để bảo vệ tài nguyên.</li>
                <li><strong>2. Exponential Backoff & Jitter:</strong> Thử lại lệnh gọi API với khoảng thời gian ngẫu nhiên tăng dần nhằm tránh làm quá tải server.</li>
                <li><strong>3. Rate Limiting:</strong> Giới hạn số lượng request từ một client để chống tấn công DDoS và cạn kiệt tài nguyên.</li>
                <li><strong>4. Graceful Degradation:</strong> Trả về dữ liệu cache cũ hoặc giao diện tối giản khi service chính gián đoạn.</li>
            </ol>
        `
    }
};

// DOM Content Loaded Initializer
document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileNav();
    initProjectFilters();
    initSmoothScroll();
    initCopyEmail();
    initStatCounters();
});

// Header Scroll Glass Effect
function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile Menu Navigation
function initMobileNav() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileDrawer');
    const navLinks = document.querySelectorAll('.mobile-nav-link');

    if (!menuBtn || !drawer) return;

    menuBtn.addEventListener('click', () => {
        drawer.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            drawer.classList.remove('open');
        });
    });
}

// Project Filtering System
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category');
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Smooth Scroll & Active Link Tracking
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Modal Manager
function openModal(id) {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    const data = modalData[id];

    if (!data || !modalOverlay || !modalContent) return;

    modalContent.innerHTML = `
        <div class="modal-header-badge">${data.type}</div>
        <h3 class="modal-title">${data.title}</h3>
        <div class="modal-body">${data.content}</div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close Modal on Overlay Click
document.addEventListener('click', (e) => {
    const modalOverlay = document.getElementById('modalOverlay');
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Close Modal on Escape Key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Copy Email & Toast Notification
function initCopyEmail() {
    const copyBtn = document.getElementById('copyEmailBtn');
    if (!copyBtn) return;

    copyBtn.addEventListener('click', () => {
        const email = 'contact@dothanhnguyen.com';
        navigator.clipboard.writeText(email).then(() => {
            showToast('Đã sao chép địa chỉ Email: contact@dothanhnguyen.com');
        }).catch(err => {
            showToast('Lỗi khi sao chép Email');
        });
    });
}

function copyTipCode(tipId, btnElement) {
    let snippetText = "";
    if (tipId === 'tip1') {
        snippetText = `// React Dynamic Import & Bundle Optimization\nconst HeavyComponent = React.lazy(() => import('./HeavyComponent'));`;
    } else if (tipId === 'tip2') {
        snippetText = `// 3-Tier Cache Pattern\nL1: RAM (Go sync.Map) -> L2: Redis Cluster -> L3: Cache-Control: max-age=3600`;
    } else if (tipId === 'tip3') {
        snippetText = `# Multi-stage Dockerfile\nFROM golang:1.22-alpine AS builder\n...\nFROM alpine:latest\nCOPY --from=builder /app/server .`;
    }

    navigator.clipboard.writeText(snippetText).then(() => {
        const originalText = btnElement.innerText;
        btnElement.innerText = "Copied!";
        showToast("Đã sao chép Snippet mã nguồn!");
        setTimeout(() => {
            btnElement.innerText = originalText;
        }, 2000);
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');
    if (!toast || !toastMsg) return;

    toastMsg.innerText = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Animated Stat Counter
function initStatCounters() {
    const statValues = document.querySelectorAll('.stat-value');
    let animated = false;

    window.addEventListener('scroll', () => {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;

        const rect = heroSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && !animated) {
            animated = true;
            statValues.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                let count = 0;
                const speed = Math.ceil(target / 40);

                const updateCount = () => {
                    count += speed;
                    if (count >= target) {
                        if (target >= 1000) {
                            counter.innerText = (target / 1000).toFixed(0) + 'k+';
                        } else {
                            counter.innerText = target + (target === 40 ? '+' : target === 6 ? ' năm' : '');
                        }
                    } else {
                        counter.innerText = count;
                        requestAnimationFrame(updateCount);
                    }
                };
                updateCount();
            });
        }
    });
}
