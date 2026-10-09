import { Nav } from "@/components/atmosphere/nav"
import { ChapterProgress } from "@/components/atmosphere/chapter-progress"
import { VideoSplash } from "@/components/atmosphere/video-splash"
import { Introduction } from "@/components/chapters/introduction"
import { ChapterSpark } from "@/components/chapters/ch1-spark"
import { ChapterRoots } from "@/components/chapters/ch2-roots"
import { ChapterLearning } from "@/components/chapters/ch3-learning"
import { ChapterComfort } from "@/components/chapters/ch4-comfort"
import { ChapterFreelance } from "@/components/chapters/ch5-freelance"
import { ChapterProjects } from "@/components/chapters/ch6-projects"
import { ChapterTurning } from "@/components/chapters/ch7-f1"
import { ChapterNow } from "@/components/chapters/ch8-now"
import { Epilogue } from "@/components/chapters/epilogue"
import { Mascot } from "@/components/atmosphere/mascot"

export default function Home() {
  return (
    <div className="flex flex-1 flex-col min-h-screen">
      <VideoSplash />
      <Nav />
      <ChapterProgress />
      <main className="flex-1">
        <Introduction />
        <ChapterSpark />
        <ChapterRoots />
        <ChapterLearning />
        <ChapterComfort />
        <ChapterFreelance />
        <ChapterProjects />
        <ChapterTurning />
        <ChapterNow />
      </main>
      <Epilogue />
      <Mascot />
    </div>
  )
}
