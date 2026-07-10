import { CelestialToggle } from "@/components/atmosphere/celestial-toggle"
import { Hero } from "@/components/sections/hero"
import { Stack } from "@/components/sections/stack"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Manifesto } from "@/components/sections/manifesto"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <CelestialToggle />
      <Hero />
      <Stack />
      <Projects />
      <Experience />
      <Manifesto />
      <Footer />
    </div>
  )
}
