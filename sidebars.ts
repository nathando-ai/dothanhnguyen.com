import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

export default {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Agent Guidelines',
      items: [
        'agents/domain',
        'agents/issue-tracker',
        'agents/triage-labels',
      ],
    },
  ],
} satisfies SidebarsConfig
