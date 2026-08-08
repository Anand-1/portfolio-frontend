import styles from './page.module.css';

export default function NewsLetterPage() {
  return (
    <main className="sitePageShell">
      <section className={styles.newsletterShell}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Weekly Engineering Brief</span>
          <h1 className="siteHeroTitle">Join the newsletter</h1>
          <p className="siteHeroText">
            Get product ideas, frontend architecture notes, cloud delivery patterns,
            and practical engineering lessons in your inbox every week.
          </p>

          <div className={styles.metrics}>
            <div>
              <span className={styles.metricValue}>48k</span>
              <span className={styles.metricLabel}>Readers</span>
            </div>
            <div>
              <span className={styles.metricValue}>12</span>
              <span className={styles.metricLabel}>Issues / year</span>
            </div>
            <div>
              <span className={styles.metricValue}>1x</span>
              <span className={styles.metricLabel}>Per week</span>
            </div>
          </div>

          <form className={styles.signupForm}>
            <label className={styles.label} htmlFor="email">
              Work email
            </label>
            <div className={styles.formRow}>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.input}
                placeholder="you@example.com"
              />
              <button className={styles.button} type="button">
                Subscribe
              </button>
            </div>
          </form>

          <div className={styles.footerCopy}>
            <span>No spam — just useful engineering signal.</span>
          </div>
        </div>

        <aside className={styles.panel}>
          <div className={styles.panelHeader}>
            <span className={styles.panelTitle}>This week</span>
            <span className={styles.panelTag}>Issue #24</span>
          </div>
          <div className={styles.articleList}>
            <article className={styles.articleItem}>
              <span className={styles.articleIndex}>01</span>
              <div>
                <h3>Shipping better frontend systems</h3>
                <p>Designing for observability, accessibility, and performance.</p>
              </div>
            </article>
            <article className={styles.articleItem}>
              <span className={styles.articleIndex}>02</span>
              <div>
                <h3>Modern cloud delivery</h3>
                <p>From CI pipelines to production safety checks.</p>
              </div>
            </article>
            <article className={styles.articleItem}>
              <span className={styles.articleIndex}>03</span>
              <div>
                <h3>Full stack architecture patterns</h3>
                <p>Making internal platforms that developers actually trust.</p>
              </div>
            </article>
          </div>
        </aside>
      </section>
    </main>
  );
}
