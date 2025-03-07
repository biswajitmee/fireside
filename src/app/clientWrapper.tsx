'use client'

import React from 'react'
import SmoothScroller from './components/smoothScroller'

export default function ClientWrapper ({
  children
}: {
  children: React.ReactNode
}) {
  return <SmoothScroller>{children}</SmoothScroller>
}
