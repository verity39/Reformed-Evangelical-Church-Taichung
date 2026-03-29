import QuickLinks from "@/components/QuickLinks";

type SubPageTemplateProps = {
  title: string;
  subtitle: string;
  sectionTitle: string;
  content: string;
};

export default function SubPageTemplate({
  title,
  subtitle,
  sectionTitle,
  content,
}: SubPageTemplateProps) {
  return (
    <main className="subpage">
      <div className="subpage-container">
        <header className="subpage-banner">
          <img src="/logo.png" alt="Logo" className="banner-logo" />
        </header>

        <QuickLinks />

        <section className="subpage-content">
          <h2>{sectionTitle}</h2>
          <p>{content}</p>
        </section>
      </div>
    </main>
  );
}
