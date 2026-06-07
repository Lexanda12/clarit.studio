'use client'

import RightPanel from '@/components/layout/RightPanel'

const precisionPanel = [
  { label: 'Year', value: '2024' },
  { label: 'Services', value: ['Product Design', 'Engineering'] },
  {
    label: 'Live',
    value: 'app.tryprecisioncare.com',
    isLink: true,
    href: 'https://app.tryprecisioncare.com',
  },
  {
    label: 'Description',
    value:
      'Two-sided dermatology PWA connecting patients to dermatologists in Nigeria. Built solo — design through deployment.',
  },
  {
    label: 'Backed by',
    value: [
      'Moonshot by Techcabal',
      'Brave Fellowship',
      'OFO Founder Fellowship',
      'Nithub Accelerator',
    ],
  },
]

export default function RightPanelPrecision() {
  return <RightPanel items={precisionPanel} />
}
