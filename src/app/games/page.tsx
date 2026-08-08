import styles from './page.module.css';

const gameLibrary = [
  {
    sequence: '01',
    title: 'React Memory Map',
    summary: 'Pattern matching, UI state, and responsive layout challenge.',
    url: 'https://react.dev/learn',
  },
  {
    sequence: '02',
    title: 'Cloud Sprint',
    summary: 'Architecture decisions, deployment readiness, and delivery flow.',
    url: 'https://learn.microsoft.com/azure/architecture/',
  },
  {
    sequence: '03',
    title: 'Skill Radar',
    summary: 'Career profile analytics and technical capability measurement.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility',
  },
];

export default function GamesPage() {
  return (
    <main className="sitePageShell">
      <section className="siteHeroLayout">
        <div className="siteHeroCopy">
          <span className={styles.eyebrow}>Playground</span>
          <h1 className="siteHeroTitle">Games & Experiments</h1>
          <p className="siteHeroText">
            Browse code-driven mini experiences, interaction prototypes, and creative engineering experiments.
          </p>

          <div className="siteCtaRow">
            <a className="sitePrimaryButton" href="#library">
              Explore library
            </a>
            <a className="siteSecondaryButton" href="mailto:anandrajj10@gmail.com">
              Suggest a game
            </a>
          </div>
        </div>

        <aside className="sitePanelSurface">
          <div className={styles.panelHeader}>
            <span className={styles.panelTitle}>Featured Lab</span>
            <span className={styles.liveTag}>Live</span>
          </div>
          <div className={styles.gamePreview}>
            <div className={styles.gameIcon}>∞</div>
            <div>
              <h3>Interactive Algorithms</h3>
              <p>Explore UI models, search patterns, and visual systems.</p>
            </div>
          </div>
          <div className={styles.statusRow}>
            <span>Status</span>
            <span className={styles.statusText}>Online</span>
          </div>
        </aside>
      </section>

      <section className={styles.library} id="library">
        <div className={styles.sectionHeading}>
          <h2>Challenge Library</h2>
          <span>Current track</span>
        </div>

        <div className={styles.cardGrid}>
          {gameLibrary.map((game) => (
            <article className={styles.gameCard} key={game.title}>
              <span className={styles.gameNumber}>{game.sequence}</span>
              <h3>{game.title}</h3>
              <p>{game.summary}</p>
              <a className={styles.gameUrl} href={game.url} target="_blank" rel="noreferrer">
                Play now
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.rankingSection} aria-labelledby="online-ranking">
        <div className={styles.sectionHeading}>
          <h2 id="online-ranking">Online Games Ranking</h2>
          <span>Live leaderboard</span>
        </div>

        <div className={styles.rankingTable}>
          <article className={styles.rankingRow}>
            <span className={styles.rank}>01</span>
            <div>
              <span className={styles.gameTitle}>React Memory Map</span>
              <span className={styles.gameMeta}>14.2k active players</span>
            </div>
            <span className={styles.score}>9.8</span>
          </article>
          <article className={styles.rankingRow}>
            <span className={styles.rank}>02</span>
            <div>
              <span className={styles.gameTitle}>Cloud Sprint</span>
              <span className={styles.gameMeta}>11.9k active players</span>
            </div>
            <span className={styles.score}>9.3</span>
          </article>
          <article className={styles.rankingRow}>
            <span className={styles.rank}>03</span>
            <div>
              <span className={styles.gameTitle}>Skill Radar</span>
              <span className={styles.gameMeta}>8.7k active players</span>
            </div>
            <span className={styles.score}>8.9</span>
          </article>
        </div>
      </section>

      <section className={styles.eventsSection}>
        <div className={styles.sectionHeading}>
          <h2>Upcoming Events</h2>
          <span>Community calendar</span>
        </div>

        <div className={styles.eventGrid}>
          <article className={styles.eventCard}>
            <span className={styles.eventDate}>Aug 14</span>
            <h3>Algorithm Sprint Jam</h3>
            <p>Build a visual challenge and compete with other players across the lab.</p>
            <a className={styles.eventLink} href="mailto:anandrajj10@gmail.com?subject=Algorithm%20Sprint%20Jam%20Registration">Register now</a>
          </article>
          <article className={styles.eventCard}>
            <span className={styles.eventDate}>Aug 24</span>
            <h3>Architecture Showdown</h3>
            <p>Design a resilient product flow, ship a launch plan, and unblock a path to production.</p>
            <a className={styles.eventLink} href="mailto:anandrajj10@gmail.com?subject=Architecture%20Showdown%20Agenda">View agenda</a>
          </article>
          <article className={styles.eventCard}>
            <span className={styles.eventDate}>Sep 02</span>
            <h3>Night of Experiments</h3>
            <p>Join a rapid-fire gallery of prototype systems, mini UIs, and game mechanics.</p>
            <a className={styles.eventLink} href="mailto:anandrajj10@gmail.com?subject=Night%20of%20Experiments%20Seat">Save seat</a>
          </article>
        </div>
      </section>
    </main>
  );
}
