import QuickLinks from "@/components/QuickLinks";

export default function VisitPage() {
  return (
    <main className="subpage">
      <div className="subpage-container">
        <header className="subpage-banner">
          <img src="/logo.png" alt="Logo" className="banner-logo" />
        </header>

        <QuickLinks />

        <section className="subpage-content visit-page-content">
          <div className="visit-item">
            <h2>教會地址</h2>
            <p>臺中市西區台灣大道二段186號11樓之2B<br />(中港通商大樓)</p>
          </div>

          <div className="visit-item">
            <h2>聯繫方式</h2>
            <div className="contact-links">
              <a href="https://line.me/ti/p/~lineaccount" target="_blank" rel="noreferrer" className="contact-btn">LINE</a>
              <a href="https://www.facebook.com/p/%E8%87%BA%E4%B8%AD%E6%AD%B8%E6%AD%A3%E7%A6%8F%E9%9F%B3%E6%95%99%E6%9C%83-61567725549761/" target="_blank" rel="noreferrer" className="contact-btn">Facebook</a>
              <a href="mailto:contact@example.com" className="contact-btn">Mail</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
