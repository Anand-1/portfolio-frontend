import styles from './page.module.css';

export default function AgencyPage() {
  return (
    <main className="sitePageShell">
      <section className="siteHeroLayout">
        <div className="siteHeroCopy">
          <span className={styles.kicker}>Digital Product Studio</span>
          <h1 className="siteHeroTitle">Engineering for ambitious teams</h1>
          <p className="siteHeroText">
            We design, build, and launch high-performing digital products that turn ideas into measurable outcomes.
          </p>

          <div className="siteCtaRow">
            <a className="sitePrimaryButton" href="#services">
              Explore services
            </a>
            <a className="siteSecondaryButton" href="mailto:anandrajj10@gmail.com">
              Book a call
            </a>
          </div>

          <div className={styles.metrics}>
            <div>
              <span className={styles.metricValue}>24+</span>
              <span className={styles.metricLabel}>Launches</span>
            </div>
            <div>
              <span className={styles.metricValue}>8 wks</span>
              <span className={styles.metricLabel}>Delivery window</span>
            </div>
            <div>
              <span className={styles.metricValue}>99.9%</span>
              <span className={styles.metricLabel}>Reliability target</span>
            </div>
          </div>
        </div>

        <aside className="sitePanelSurface">
          <div className={styles.panelHeader}>
            <span className={styles.panelTitle}>Studio Signals</span>
            <span className={styles.status}>Online</span>
          </div>
          <div className={styles.signalGrid}>
            <article>
              <span className={styles.signalLabel}>Growth Systems</span>
              <span className={styles.signalText}>Product strategy</span>
            </article>
            <article>
              <span className={styles.signalLabel}>Experience Layer</span>
              <span className={styles.signalText}>Frontend platforms</span>
            </article>
            <article>
              <span className={styles.signalLabel}>Delivery</span>
              <span className={styles.signalText}>Cloud-ready engineering</span>
            </article>
          </div>
        </aside>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Services</span>
          <h2>What we build</h2>
        </div>

        <div className={styles.serviceGrid}>
          <article className={styles.serviceCard}>
            <span className={styles.icon}>01</span>
            <h3>Product Engineering</h3>
            <p>Design systems, web applications, API-first backend delivery, and launch-ready UI flows.</p>
          </article>
          <article className={styles.serviceCard}>
            <span className={styles.icon}>02</span>
            <h3>Cloud Modernization</h3>
            <p>Infrastructure upgrades, CI/CD pipelines, automation, monitoring, and platform resilience.</p>
          </article>
          <article className={styles.serviceCard}>
            <span className={styles.icon}>03</span>
            <h3>Performance & QA</h3>
            <p>Accessibility, test automation, and measurable experience improvements for production teams.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
