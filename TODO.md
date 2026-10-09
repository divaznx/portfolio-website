# Portfolio Story — Content & Asset Placeholders (TODO)

Every item below marks a real personal detail, consent check, copyright consideration, or asset slot required from Divaakar before final production deployment. All components render gracefully with clean fallbacks until provided.

---

## 1. Chapter 1: The Spark (`components/chapters/ch1-spark.tsx`)
- [ ] **Film-Still Copyright & Takedown Risk**:
  - The still from *The Social Network* (`/public/images/social-network.jpeg`) is copyrighted by Sony Pictures / Columbia Pictures. While framed under fair use commentary/editorial citation with attribution, there is always potential copyright/DMCA risk.
  - **How to swap**: To swap out the image, replace the file path in `components/chapters/ch1-spark.tsx` at line 11:
    ```ts
    const FILM_STILL_IMAGE = "/images/social-network.jpeg" // update to replacement image
    ```
- [ ] **Real Personal Detail**: One specific scene, memory, or feeling from the night you watched *The Social Network* (e.g., "I was 15", "I rewatched it three times that week", "I stayed up until dawn trying to write my first HTML file and it was completely broken"). Slot marked as `[TODO-REAL-DETAIL]` in `ch1-spark.tsx`.

---

## 2. Chapter 2: The Roots (`components/chapters/ch2-roots.tsx`)
- [ ] **Real Moment from Gomatha Milk**: One authentic operational memory from the dairy in Chennai (e.g., "The month feed prices spiked and we had to recalculate route margins overnight", "The customer in Mylapore who stayed for five years because we never missed a 6 AM delivery in the rain", "The notebook spreadsheet I kept before knowing what databases were"). Slot marked as `[TODO-REAL-DETAIL]` in `ch2-roots.tsx`.

---

## 3. Chapter 3: Learning to Build (`components/chapters/ch3-learning.tsx`)
- [ ] **eNTrust Internship End Date**: Confirm whether the eNTrust internship was strictly 1 month (June 2024 – June 2024) or spanned a longer duration (currently displayed as `JUN 2024 · INTERNSHIP`).

---

## 4. Chapter 4: Out of the Comfort Zone (`components/chapters/ch4-comfort.tsx`)
- [ ] **Student Photo Consent (`ullas.jpeg`)**: Verify that the students and school in `ullas.jpeg` consented to public web publication. If not, the component already applies a bottom gradient/vignette protectively, but replacing it with an unidentifiable stage angle or mentor-only shot is recommended if consent is unconfirmed.
- [ ] **Ullas Trust Role Exact Wording**: Confirm whether you prefer "Higher Education Scholar", "Student Mentor", or specific phrasing for your volunteer responsibilities at Touch The Soil and Ullas Summits.

---

## 5. Chapter 5: Shipping for Real (`components/chapters/ch5-shipping.tsx`)
- [ ] **GitHub Repository Links**:
  - Legal Document RAG System: replace placeholder `https://github.com/divaznx` with specific public/case-study repository URL.
  - Multi-Agent Travel Booking Agent: replace placeholder `https://github.com/divaznx` with specific repository URL.
- [ ] **Project Screenshots/Demos**: Provide interface or architecture diagram images if desired for case dossiers.
- [ ] **Own Ventures**: Confirm whether to publicly name any additional client case files or personal ventures.

---

## 6. Chapter 6: The Turning Point (`components/chapters/ch6-turning.tsx`)
- [ ] **F1 Quote Speaker**: Confirm attribution/speaker for &ldquo;Giving up is not in the blood, sir&rdquo; (currently rendered with clean telemetry styling without attribution per prompt specification).

---

## 7. Chapter 7: Now (`components/chapters/ch7-now.tsx`)
- [ ] **Product Name & One-Liner**: Real codename or product launch title and 1-line thesis to replace the stealth redaction effect when ready for public announcement.

---

## 8. Global, Career & Assets
- [ ] **Freelance Start Date**: Confirm exact start date for freelance/contract availability (currently displayed as Jan 2026).
- [ ] **Resume PDF Path**: Live file is at `/public/Divaakar_Naresh_Resume.pdf`, linked from the Introduction, sticky Nav, Recruiter Drawer, and Epilogue.
- [ ] **Accent Color Choice**: Default active accent is Electric Lime (`#A3E635` night / `#4D7C0F` day) with Signal Orange (`#FB923C` night / `#C2410C` day) available.
