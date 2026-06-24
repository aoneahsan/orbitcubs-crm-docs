import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebar layout for OrbitCubs CRM docs.
 *
 * The baseline set documents every shipped feature area of the app. Long-tail
 * deep-enrichment pages (tracked in
 * docs/tracking/orbitcubs-crm-docs-content-tracker.json) are appended here as
 * they land.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/quick-start',
        'getting-started/core-concepts',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/contacts-and-accounts',
        'features/leads-and-opportunities',
        'features/cases-and-support',
        'features/products-quotes-orders',
        'features/activities-and-knowledge',
        'features/dashboards-and-reports',
        'features/ai-and-automation',
        'features/email-and-collaboration',
        'features/browser-extension',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        'guides/data-export-and-deletion',
        'guides/offline-and-mobile',
      ],
    },
    'architecture',
    'faq',
    'privacy',
    'changelog',
    'about-the-author',
  ],
};

export default sidebars;
