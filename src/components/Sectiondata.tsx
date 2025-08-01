import React from 'react'
import Section from './Section'
import XuvSide from "@/../public/XUV 700 - blackjpg.webp"
import XuvRed from "@/../public/XUV 700 - red.webp"
import XuvInner from "@/../public/XUV 700 - innner.webp"
import XuvFront from "@/../public/XUV 700 - front.webp"
const Sectiondata = () => {
  return (
    <div><Section 
    image={XuvSide}
    tag="design"
    title="Sculpted Boldness Meets Aerodynamic Precision"
    description="The XUV700's dynamic side profile blends aggressive lines with refined elegance, redefining modern SUV aesthetics."
  />

  <Section 
    image={XuvRed}
    tag="performance"
    title="Thrill in Every Turn"
    description="Powered by an advanced mStallion turbo engine, the XUV700 delivers an unmatched driving experience—responsive, powerful, and exhilarating."
  />

  <Section 
    image={XuvInner}
    tag="interior"
    title="Luxury That Listens to You"
    description="Step into a cabin that welcomes you with futuristic tech, voice-activated features, and crafted comfort designed around you."
  />

  <Section 
    image={XuvFront}
    tag="safety"
    title="Commanding Presence, Unyielding Safety"
    description="Built on a robust platform and equipped with ADAS, the XUV700 ensures confidence on every road, for every journey."
  /></div>
  )
}

export default Sectiondata