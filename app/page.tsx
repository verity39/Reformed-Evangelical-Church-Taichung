import Link from "next/link";

const links = [
  { name: "關於基督教", href: "/christianity" },
  { name: "關於我們", href: "/about" },
  { name: "聚會與服務", href: "/events" },
  { name: "訂閱與關注", href: "#subscribe" },
  { name: "拜訪我們", href: "#visit" },
  { name: "精選專題", href: "/topics" },
  { name: "進修資源", href: "#resources" },
];

export default function Page() {
  return (
    <main>
      <header className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <img src="/logo.png" alt="Reformed Evangelical Church Taichung" className="hero-logo" />
            <p>週三線上 以弗所書查經課程</p>
            <Link href="/about" className="primary-btn">關於查經</Link>
          </div>
        </div>
      </header>

      <section className="red-links">
        <div className="red-links-container">
          <nav className="links-grid" aria-label="快速連結">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="link-card">
                <span>{l.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="gray-section-fullwidth">
        <div className="gray-container-content">
          <h2>近期活動</h2>
          <p className="subtitle">UPCOMING EVENTS</p>
          <div className="events-grid">
            <article className="event-card">
              <img src="/01.png" alt="主日崇拜" className="event-image" />
              <div className="event-content">
                <h3>主日崇拜</h3>
                <div className="event-date">每週日 10:00 AM</div>
                <p className="event-description">歡迎參加我們的主日崇拜，一起敬拜讚美神，聆聽神的話語。</p>
              </div>
            </article>
            <article className="event-card">
              <img src="/02.jpeg" alt="核心課程" className="event-image" />
              <div className="event-content">
                <h3>核心課程</h3>
                <div className="event-date">每週三 7:30 PM</div>
                <p className="event-description">深入學習聖經，與弟兄姊妹一同成長，建立彼此的關係。</p>
              </div>
            </article>
            <article className="event-card">
              <img src="/03.jpg" alt="聚會活動" className="event-image" />
              <div className="event-content">
                <h3>聚會活動</h3>
                <div className="event-date">每週五 7:00 PM</div>
                <p className="event-description">透過活動和分享建立在主裡的關係。</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="three-features">
        <div className="features-container">
          <div className="features-grid">
            <article className="feature">
              <img src="/31.png" alt="我們的信仰" className="feature-image" />
              <h3>我們的信仰</h3>
            </article>
            <article className="feature">
              <img src="/church.png" alt="我們的教會" className="feature-image" />
              <h3>我們的教會</h3>
            </article>
            <article className="feature">
              <img src="/Pigeon.png" alt="我們的使命" className="feature-image" />
              <h3>我們的使命</h3>
            </article>
          </div>
        </div>
      </section>

      <footer className="footer-inside">
          <div className="footer-content">
            <div>Copyright © 2026, Reformed Evangelical Church Taichung. 台中歸正福音教會 版權所有，禁止直接引用網站內容</div>
            <div className="footer-links">
              <a href="/news">新聞發佈前</a>
              <span className="footer-separator">|</span>
              <a href="/newsletter">訂閱電子報</a>
              <span className="footer-separator">|</span>
              <a href="/location">交通地圖</a>
              <span className="footer-separator">|</span>
              <a href="/contact">聯絡我們</a>
              <span className="footer-separator">|</span>
              <a href="/membership">總會暨全球分會</a>
              <span className="footer-separator">|</span>
              <a href="/privacy">著作權暨個資保護聲明</a>
            </div>
          </div>
        </footer>
    </main>
  );
}