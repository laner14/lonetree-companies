import { featuredArticle, newsItems } from "@/data/news";

export default function NewsPage() {
  return (
    <>
      <header className="page-header">
        <div className="page-eyebrow">News &amp; Media</div>
        <h1>
          What&apos;s happening at <em>Lone Tree</em>
        </h1>
        <p className="subtitle">
          Project updates, media appearances, and insights on attainable housing
          development across America.
        </p>
      </header>

      <section className="section">
        <div className="section-inner">
          {/* FEATURED */}
          <div className="section-label">Featured</div>
          <div className="featured-news">
            <div className="featured-img">
              <div className="icon">{featuredArticle.icon}</div>
            </div>
            <div className="featured-body">
              <div className="tag">{featuredArticle.tag}</div>
              <h3>
                {featuredArticle.title} <em>{featuredArticle.titleEmphasis}</em>
              </h3>
              <p>{featuredArticle.description}</p>
              <a href={featuredArticle.ctaHref}>{featuredArticle.ctaLabel}</a>
            </div>
          </div>

          {/* NEWS GRID */}
          <div className="news-grid">
            {newsItems.map((item) => (
              <div className="news-card" key={item.title}>
                <div className="news-card-img">
                  <span className="placeholder">{item.category}</span>
                </div>
                <div className="news-card-body">
                  <div className="date">{item.date}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
