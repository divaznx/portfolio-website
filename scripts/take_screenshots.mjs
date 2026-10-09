import { chromium } from "playwright"
import path from "node:path"

const OUTPUT_DIR = "C:\\Users\\Naresh\\.gemini\\antigravity-ide\\brain\\3aa79c29-0603-411b-b8c4-39105df2e4d4"

async function run() {
  const browser = await chromium.launch({ headless: true })

  // 1. Verify Splash Screen & Session Behavior
  console.log("Testing Video Splash and Session Storage...")
  const splashContext = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  })
  const splashPage = await splashContext.newPage()
  await splashPage.goto("http://localhost:3000", { waitUntil: "domcontentloaded" })
  
  // Verify skip button exists when splash is active
  const skipBtn = await splashPage.$("button:has-text('SKIP')")
  console.log("Skip button found on splash:", !!skipBtn)
  if (skipBtn) {
    await skipBtn.click()
    console.log("Clicked SKIP button successfully")
  }
  await splashPage.waitForTimeout(1000)

  // Verify reload skips splash because of sessionStorage
  await splashPage.reload({ waitUntil: "domcontentloaded" })
  await splashPage.waitForTimeout(500)
  const skipBtnAfterReload = await splashPage.$("button:has-text('SKIP')")
  console.log("Splash skipped on session reload:", !skipBtnAfterReload)
  await splashContext.close()

  // 2. Capture Screenshots at 390px, 820px, 1440px for Dark and Light
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

      // Set sessionStorage so splash doesn't block page capture
      await page.addInitScript(() => {
        sessionStorage.setItem("dn_splash_shown", "1")
      })

      await page.goto("http://localhost:3000", { waitUntil: "networkidle" })

      // Set theme
      await page.evaluate((t) => {
        document.documentElement.dataset.theme = t
        localStorage.setItem("dn_story_theme", t)
      }, theme.key)

      await page.waitForTimeout(500)

      // Scroll to trigger reveals
      await page.evaluate(async () => {
        const totalHeight = document.body.scrollHeight
        const step = 500
        for (let y = 0; y < totalHeight; y += step) {
          window.scrollTo(0, y)
          await new Promise((r) => setTimeout(r, 30))
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

  // 3. Verify Download Resume links
  console.log("Verifying resume download links...")
  const checkContext = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const checkPage = await checkContext.newPage()
  await checkPage.addInitScript(() => sessionStorage.setItem("dn_splash_shown", "1"))
  await checkPage.goto("http://localhost:3000", { waitUntil: "networkidle" })

  const resumeLinks = await checkPage.$$eval('a[href="/Divaakar_Naresh_Resume.pdf"]', els => els.map(e => ({
    text: e.textContent?.trim(),
    hasDownload: e.hasAttribute('download')
  })))
  console.log("Found Resume Links with download attribute:", JSON.stringify(resumeLinks, null, 2))

  // 4. Verify Social Network image max width constraint
  const imgWidth = await checkPage.$eval('img[alt*="Social Network"]', img => img.getBoundingClientRect().width)
  console.log("Social Network image display width:", imgWidth, "px (<= 509px constraint)")

  await checkContext.close()
  await browser.close()
  console.log("ALL_TESTS_AND_SCREENSHOTS_COMPLETE")
}

run().catch((err) => {
  console.error("Error:", err)
  process.exit(1)
})
