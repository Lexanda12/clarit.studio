'use client'

import Sidebar from './Sidebar'
import RightPanel from './RightPanel'

const homeRightPanel = [
  { label: 'About', value: 'Design engineer. Lagos, Nigeria.' },
  { label: 'Company', value: 'Clarit Studio', isLink: true, href: 'https://clarit.studio' },
  { label: 'Services', value: ['Design', 'Engineering'] },
  { label: 'Contact', value: 'alex@clarit.studio', isLink: true, href: 'mailto:alex@clarit.studio' },
  { label: 'Links', value: 'LinkedIn', isLink: true, href: 'https://linkedin.com/in/eniolaalex' },
]

export default function ShellClient() {
  return (
    <>
      <Sidebar />
      <RightPanel items={homeRightPanel} />
    </>
  )
}
