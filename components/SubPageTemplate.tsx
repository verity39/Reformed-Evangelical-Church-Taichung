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
        <QuickLinks />

        <header className="subpage-banner">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </header>

        <section className="subpage-content">
          <h2>{sectionTitle}</h2>
          <p>{content}</p>
        </section>
      </div>
    </main>
  );
}
