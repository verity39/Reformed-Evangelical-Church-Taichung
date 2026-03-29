import Link from "next/link";
import QuickLinks from "@/components/QuickLinks";

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

      <QuickLinks />

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
              <img src="/02.jpeg" alt="核心教義課程" className="event-image" />
              <div className="event-content">
                <h3>核心教義課程</h3>
                <div className="event-date">每月第二和第四週，於主日崇拜會後開始</div>
                <p className="event-description">我們將深入了解重要的聖經原則，了解歸正神學所認信的信經信條，與弟兄姊妹們一同成長，建立純正的基督教信仰；提供給弟兄姊妹接受本會洗禮、轉會禮、堅振禮前必要的神學觀念。</p>
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
              <Link href="/about/faith" className="feature-link" aria-label="前往我們的信仰頁面">
                <img src="/31.png" alt="我們的信仰" className="feature-image" />
                <h3>我們的信仰</h3>
              </Link>
            </article>
            <article className="feature">
              <Link href="/church" className="feature-link" aria-label="前往我們的教會頁面">
                <img src="/church.png" alt="我們的教會" className="feature-image" />
                <h3>我們的教會</h3>
              </Link>
            </article>
            <article className="feature">
              <Link href="/topics" className="feature-link" aria-label="前往我們的使命頁面">
                <img src="/Pigeon.png" alt="我們的使命" className="feature-image" />
                <h3>我們的使命</h3>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}