'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Sidebar.module.css';

const sidebarLinks = [
  { href: '/', label: 'Home', icon: '⌂' },
  { href: '/about', label: 'About', icon: '◎' },
  { href: '/gallery', label: 'Gallery', icon: '▣' },
  { href: '/contacts', label: 'Contacts', icon: '✉' },
  { href: '/resumebuilder', label: 'Resume Builder', icon: '✎' },
  { href: '/games', label: 'Games', icon: '♢' },
  { href: '/agency', label: 'Agency', icon: '✦' },
  { href: '/news-letter', label: 'Newsletter', icon: '☏' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}> 
      <div className={styles.sidebarHeader}>
        <Link href="/" className={styles.brandBlock} aria-label="Anand Raj home">
          <span className={styles.brandIcon}>AR</span>
          {!collapsed && <span className={styles.brandText}>Anand Raj</span>}
        </Link>

        <button
          type="button"
          className={styles.collapseButton}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          aria-expanded={!collapsed}
          aria-controls="sidebar-navigation"
          onClick={() => setCollapsed((current) => !current)}
        >
          {collapsed ? '›' : '‹'}
        </button>
      </div>

      <nav id="sidebar-navigation" className={styles.sideNav} aria-label="Sidebar navigation">
        <ul className={styles.sideList}>
          {sidebarLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.sideLink}>
                <span className={styles.sideIcon} aria-hidden="true">
                  {item.icon}
                </span>
                {!collapsed && <span className={styles.sideLabel}>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
