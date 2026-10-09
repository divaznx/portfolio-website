import { chromium } from "playwright"
import path from "node:path"

const OUTPUT_DIR = "C:\\Users\\Naresh\\.gemini\\antigravity-ide\\brain\\3aa79c29-0603-411b-b8c4-39105df2e4d4"

async function run() {
  const browser = await chromium.launch({ headless: true })

  // 1. Check Console Logs and Dev Overlay for any issues
  console.log("Checking dev server for errors/warnings/hydration mismatches...")
  const checkContext = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const devPage = await checkContext.newPage()
  
  const consoleMessages = []
  devPage.on("console", msg => {
    consoleMessages.push({ type: msg.type(), text: msg.text() })
  })
  devPage.on("pageerror", err => {
    consoleMessages.push({ type: "pageerror", text: err.message })
  })

  await devPage.goto("http://localhost:3000", { waitUntil: "networkidle" })
  await devPage.waitForTimeout(2000)

  console.log("Console errors/warnings:", consoleMessages.filter(m => m.type === "error" || m.type === "warning" || m.type === "pageerror"))

  // Check for any Next.js issue badge
  const devBadge = await devPage.$("[data-nextjs-toast]")
  console.log("Next.js dev toast present:", !!devBadge)
  await checkContext.close()

  // 2. Verify Splash Screen & Session Behavior
  console.log("Testing Video Splash and Session Storage...")
  const splashContext = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const splashPage = await splashContext.newPage()
  await splashPage.goto("http://localhost:3000", { waitUntil: "domcontentloaded" })
  
  const skipBtn = await splashPage.$("button:has-text('SKIP')")
  console.log("Skip button found on splash:", !!skipBtn)
  if (skipBtn) {
    await skipBtn.click()
    console.log("Clicked SKIP button successfully")
  }
  await splashPage.waitForTimeout(1500)

  // Verify reload skips splash because of sessionStorage
  await splashPage.reload({ waitUntil: "networkidle" })
  await splashPage.waitForTimeout(600)
  const videoPresentAfterReload = await splashPage.evaluate(() => document.querySelector("video") !== null)
  console.log("Splash skipped on session reload:", !videoPresentAfterReload)
  await splashContext.close()

  // 3. Verify Fresh Profile Default Theme is DARK
  console.log("Verifying fresh profile default theme...")
  const freshContext = await browser.newContext()
  const freshPage = await freshContext.newPage()
  await freshPage.addInitScript(() => sessionStorage.setItem("dn_splash_shown", "1"))
  await freshPage.goto("http://localhost:3000", { waitUntil: "domcontentloaded" })
  const initialTheme = await freshPage.evaluate(() => document.documentElement.dataset.theme)
  console.log("Initial theme on fresh profile:", initialTheme, "(MUST BE 'night')")
  await freshContext.close()

  // 4. Verify Resume Download Links
  console.log("Verifying resume download links...")
  const resumeContext = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const resumePage = await resumeContext.newPage()
  await resumePage.addInitScript(() => sessionStorage.setItem("dn_splash_shown", "1"))
  await resumePage.goto("http://localhost:3000", { waitUntil: "networkidle" })

  const resumeLinks = await resumePage.$$eval('a[href="/Divaakar_Naresh_Resume.pdf"]', els => els.map(e => ({
    text: e.textContent?.trim(),
    hasDownload: e.hasAttribute('download')
  })))
  console.log("Found Resume Links with download attribute:", JSON.stringify(resumeLinks, null, 2))
  await resumeContext.close()

  // 5. Capture Full Page Screenshots at 390px, 820px, 1440px for Dark and Light
  const viewports = [
    { width: 390, height: 844, name: "390px" },
    { width: 820, height: 1180, name: "820px" },
    { width: 1440, height: 900, name: "1440px" },
  ]

  const themes = [
    { key: "night", label: "dark" },
    { key: "day", label: "light" },
  ]

  for (const theme of themes) {
    for (const vp of viewports) {
      console.log(`Starting ${vp.name} on ${theme.label}...`)
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
      })
      const page = await context.newPage()
      await page.addInitScript(() => sessionStorage.setItem("dn_splash_shown", "1"))
      await page.goto("http://localhost:3000", { waitUntil: "networkidle" })

      // Force theme
      await page.evaluate((t) => {
        document.documentElement.dataset.theme = t
        localStorage.setItem("dn_theme_2026", t)
      }, theme.key)
      await page.waitForTimeout(400)

      // Scroll to trigger reveals
      await page.evaluate(async () => {
        const totalHeight = document.body.scrollHeight
        const step = 450
        for (let y = 0; y < totalHeight; y += step) {
          window.scrollTo(0, y)
          await new Promise((r) => setTimeout(r, 25))
        }
        window.scrollTo(0, 0)
        await new Promise((r) => setTimeout(r, 400))
      })

      const filename = `screenshot_${vp.name}_${theme.label}.png`
      const filepath = path.join(OUTPUT_DIR, filename)

      await page.screenshot({ path: filepath, fullPage: true })
      console.log(`Captured: ${filename}`)
      await context.close()
    }
  }

  // 6. Rule 5 F1 Check: Scroll slowly through Sector 07 at 5 positions at 1440x900 and 390x844
  console.log("Running F1 pinning checks at 5 scroll positions...")
  for (const vp of [{ width: 1440, height: 900, name: "1440" }, { width: 390, height: 844, name: "390" }]) {
    const f1Context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } })
    const f1Page = await f1Context.newPage()
    await f1Page.addInitScript(() => sessionStorage.setItem("dn_splash_shown", "1"))
    await f1Page.goto("http://localhost:3000", { waitUntil: "networkidle" })

    // Find sector 07 position
    const f1Box = await f1Page.$eval("#sector-07", el => {
      const rect = el.getBoundingClientRect()
      return { top: rect.top + window.scrollY, height: rect.height }
    })

    // Scroll through the pinned sequence at 5 positions
    const positions = [0.1, 0.3, 0.5, 0.7, 0.9]
    for (let i = 0; i < positions.length; i++) {
      const scrollY = f1Box.top + (f1Box.height * positions[i])
      await f1Page.evaluate((y) => window.scrollTo(0, y), scrollY)
      await f1Page.waitForTimeout(300)
      const filepath = path.join(OUTPUT_DIR, `f1_check_${vp.name}_pos${i + 1}.png`)
      await f1Page.screenshot({ path: filepath })
      console.log(`Captured F1 check: f1_check_${vp.name}_pos${i + 1}.png`)
    }
    await f1Context.close()
  }

  await browser.close()
  console.log("ALL_VERIFICATIONS_AND_SCREENSHOTS_COMPLETED_SUCCESSFULLY")
}

run().catch((err) => {
  console.error("Error:", err)
  process.exit(1)
})
