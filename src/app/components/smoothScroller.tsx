'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroller({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true,
      normalizeScroll: true,  // Ensures consistent scrolling behavior
    smoothTouch: 0.1,  // Enables smooth scrolling on touch devices
       
    });

    return () => smoother.kill(); // Cleanup on unmount
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
