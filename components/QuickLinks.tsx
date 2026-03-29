import Link from "next/link";

const quickLinks = [
  { name: "關於基督教", href: "/christianity" },
  { name: "關於我們", href: "/about" },
  { name: "聚會與服務", href: "/events" },
  { name: "訂閱與關注", href: "/#subscribe" },
  { name: "拜訪我們", href: "/#visit" },
  { name: "精選專題", href: "/topics" },
  { name: "進修資源", href: "/#resources" },
];

export default function QuickLinks() {
  return (
    <section className="red-links">
      <div className="red-links-container">
        <nav className="links-grid" aria-label="快速連結">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="link-card">
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}