# Portfolio Story — Content & Asset Placeholders (TODO)

Every item below marks a real personal detail, consent check, copyright consideration, or asset slot required from Divaakar before final production deployment. All components render gracefully with clean fallbacks until provided.

---

## 1. Chapter 01: The Spark (`components/chapters/ch1-spark.tsx`)
- [ ] **Film-Still Copyright & Takedown Risk**:
  - The still from *The Social Network* (`/public/images/social-network.jpeg`) is copyrighted by Sony Pictures / Columbia Pictures. While framed under fair use commentary/editorial citation with attribution in the site footer, there is always potential copyright/DMCA risk.
  - **How to swap**: To swap out the image, replace the file path in `components/chapters/ch1-spark.tsx` at line 11:
    ```ts
    export const FILM_STILL_IMAGE = "/images/social-network.jpeg" // update to replacement image
    ```
- [ ] **Real Personal Detail**: One specific scene, memory, or feeling from the night you watched *The Social Network* (e.g., "I was 15", "I rewatched it three times that week", "I stayed up until dawn trying to write my first HTML file and it was completely broken"). Slot marked as `[TODO-REAL-DETAIL]` in `ch1-spark.tsx` (renders nothing visible if missing).

---

## 2. Chapter 02: The Roots (`components/chapters/ch2-roots.tsx`)
- [ ] **Real Moment from Gomatha Milk**: One authentic operational memory from the dairy in Chennai (e.g., "The month feed prices spiked and we had to recalculate route margins overnight", "The customer in Mylapore who stayed for five years because we never missed a 6 AM delivery in the rain", "The notebook spreadsheet I kept before knowing what databases were"). Slot marked as `[TODO-REAL-DETAIL]` in `ch2-roots.tsx` (renders nothing visible if missing).

---

## 3. Chapter 03: Learning to Build (`components/chapters/ch3-learning.tsx`)
- [ ] **eNTrust Internship End Date**: Confirm whether the eNTrust internship was strictly 1 month (June 2024 – June 2024) or spanned a longer duration (resume repeats 06/2024; currently displayed as `JUN 2024`).

---

## 4. Chapter 04: Out of the Comfort Zone (`components/chapters/ch4-comfort.tsx`)
- [ ] **Ullas Photos Consent (`ullas-2.jpg`, `ullas-3.jpg`)**: Confirm with Ullas Trust / the schools that publishing these two photos (students visible in the classroom/auditorium) is OK.

---

## 5. Chapter 05: Freelance (`components/chapters/ch5-freelance.tsx`)
- [ ] **Freelance Start Date vs Resume**: Confirm exact start date for freelance work (resume says 09/2026 – 10/2026; currently displayed as `January 2026 – now` per prompt instructions).

---

## 6. Chapter 06: Personal Projects (`components/chapters/ch6-projects.tsx`)
- [ ] **GitHub Repository Links & Screenshots**:
  - Legal Document RAG System: replace placeholder `https://github.com/divaznx` with specific public repository URL.
  - Multi-Agent Travel Booking Agent: replace placeholder `https://github.com/divaznx` with specific public repository URL.
  - Video Threat Detection System: replace placeholder `https://github.com/divaznx` with specific public repository URL.

---

## 7. Chapter 07: The Turning Point (`components/chapters/ch7-f1.tsx`)
- [ ] **F1 Quote Speaker**: Confirm attribution/speaker for &ldquo;Giving up is not in the blood, sir&rdquo; (currently rendered without attribution per prompt specification).

---

## 8. Chapter 08: Now (`components/chapters/ch8-now.tsx`)
- [ ] **Product Name & One-Liner**: Real codename or product launch title and 1-line thesis to announce when ready.
- [ ] **Consent for Person in `building-2.jpg`**: Confirm the person sitting beside Divaakar in `building-2.jpg` is OK with appearing on the public site.

---

## 9. Global, Assets & Resume
- [ ] **Resume PDF Path**: Live file is at `/public/Divaakar_Naresh_Resume.pdf`, linked from the Introduction, sticky Nav, Recruiter Drawer, and Epilogue.
- [ ] **Theme Preference**: Dark (#1E1E1E) is default on first load; light mode (#FAF8F5) is fully supported with toggle.
