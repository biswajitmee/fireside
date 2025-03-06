import React from 'react'
import ScrollOneSection from './components/scrollOneSection'
import ScrollTwoSection from './components/scrollTwoSection'
import ScrollThreeSection from './components/scrollThreeSection'
import ScrollFourSection from './components/scrollFourSection'
import ScrollFiveSection from "./components/ScrollFiveSection";
export default function Home() {
  return (
    <>
      <ScrollOneSection />
      {/* <ScrollTwoSection />
      <ScrollThreeSection /> */}
      <ScrollFourSection />
      <ScrollFiveSection />
    </>
  )
}
