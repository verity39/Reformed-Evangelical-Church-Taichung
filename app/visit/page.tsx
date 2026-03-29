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
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.9234567890123!2d120.64519!3d24.16432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fb9251f8f8f8f8f%3A0x1234567890abcdef!2z55SF56eH5Li65Yi255SP5rW35bCr5pS25Z6L!5e0!3m2!1szh-TW!2stw!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
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
