export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  img: string;
  description: string[];
  included: string[];
  steps: { title: string; desc: string }[];
  pricingHint: string;
  faqs: { q: string; a: string }[];
  meta: string;
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "brick-repair-repointing",
    title: "Brick Repair & Repointing",
    tagline: "Stop water before it starts.",
    img: "/img/brick-repointing.jpg",
    description: [
      "Mortar is the sacrificial layer of your brickwork — it's supposed to wear out so the brick doesn't. When joints crack, crumble, or wash out, water gets behind the brick and the real damage starts: spalling faces, leaks, and interior plaster failure.",
      "We grind out failing mortar to the right depth — never skim-coated over — and repoint with mortar matched to your brick and your home's age. Brick that's too far gone gets replaced with a matched unit, so the repair blends in instead of announcing itself.",
    ],
    included: [
      "Full & spot repointing",
      "Mortar matched to brick & era",
      "Spalled & cracked brick replacement",
      "Lintel & sill repair",
      "Parapet repair & rebuilding",
      "Full site cleanup on completion",
    ],
    steps: [
      { title: "On-site estimate", desc: "We look at the wall, the mortar, and what's causing the damage — then quote firm and free." },
      { title: "Grind out", desc: "Failed mortar removed to sound material, to a consistent depth — the step that decides how long the new joints last." },
      { title: "Repoint", desc: "New mortar packed in lifts and tooled to match the original joints." },
      { title: "Cure & clean", desc: "Joints cured properly and the wall left clean." },
    ],
    pricingHint: "Repointing is quoted free on-site by the area and condition of the wall. Spot repairs and full elevations are very different scopes — we'll measure, explain, and give you a firm written price before we start.",
    faqs: [
      { q: "How do I know if I need repointing?", a: "Mortar that's recessed, cracked, sandy, or falling out in chunks — plus interior leaks or white efflorescence on the brick — are the classic signs. We confirm with a free on-site look." },
      { q: "How long does repointing last?", a: "Done with the right mortar and proper depth, pointing should last decades. The wrong (too-hard) mortar can damage brick within a few winters, which is why matching matters." },
      { q: "Can you repoint just one wall?", a: "Yes. Spot pointing is common — we repoint the elevations that need it and leave sound joints alone." },
      { q: "Can you match my existing brick?", a: "Yes. Matching brick and mortar color is a core part of brick repair, especially on older New Jersey homes." },
    ],
    meta: "Brick repair & repointing in Cranford, NJ. Mortar repair, spalled brick replacement, parapets. Free estimates — (848) 256-2159.",
  },
  {
    slug: "stone-paver-work",
    title: "Stone & Paver Work",
    tagline: "Set on a base that lasts.",
    img: "/img/stone-paver.jpg",
    description: [
      "A patio or walkway is only as good as what's under it. Stone and pavers laid on a thin, uncompacted base shift, settle, and hold puddles within a few seasons — and in New Jersey, every freeze-thaw cycle makes it worse.",
      "We excavate to depth, compact a proper aggregate base, screed the bedding layer, and set natural stone or pavers level and tight — with edge restraints and joint sand that keep the whole field locked together.",
    ],
    included: [
      "Paver patios & walkways",
      "Natural stone patios (bluestone & more)",
      "Stone & paver front steps",
      "Pool decks & copings",
      "Driveway aprons & borders",
      "Re-leveling of settled pavers",
    ],
    steps: [
      { title: "Measure & quote", desc: "We measure the area, talk materials and pattern, and quote firm and free." },
      { title: "Excavate & base", desc: "Old material out, aggregate base compacted in lifts — the part nobody sees is the part that matters." },
      { title: "Set & level", desc: "Stone or pavers set tight, level, and pitched so water sheds off the surface." },
      { title: "Joint & finish", desc: "Joints swept with sand, edges restrained, and the site left clean." },
    ],
    pricingHint: "Stone and paver work is quoted free on-site by square footage, material, and access. You get one firm written price covering excavation, base, materials, and setting — no per-piece surprises.",
    faqs: [
      { q: "Natural stone or pavers — which should I pick?", a: "Natural stone (like bluestone) wins on looks and longevity; concrete pavers win on budget and uniformity. Both last when the base is right. We'll show you samples and price both ways." },
      { q: "My existing pavers have settled. Can they be fixed?", a: "Usually, yes. We lift the settled area, rebuild the base, and re-lay the same pavers — far cheaper than a new patio." },
      { q: "How long before I can use it?", a: "Patios and walkways are usable as soon as the joints are sanded — typically the day we finish." },
    ],
    meta: "Stone & paver work in Cranford, NJ — patios, walkways, steps, pool decks. Free estimates — (848) 256-2159.",
  },
  {
    slug: "chimney-repair",
    title: "Chimney Repair",
    tagline: "From the crown down.",
    img: "/img/chimney.jpg",
    description: [
      "Chimneys live the hardest life on the house — full weather on all four sides, freeze-thaw every winter, and no roof protecting them. Cracked crowns, failed flashing, and crumbling mortar let water straight into the structure, where it shows up as ceiling stains and damaged plaster rooms away from the source.",
      "We repair chimneys from the roofline up: crowns, flashing, pointing, brick replacement, and caps — and we'll show you photos of what we find before you decide on anything.",
    ],
    included: [
      "Chimney crown repair & replacement",
      "Flashing repair & replacement",
      "Chimney repointing",
      "Spalled brick replacement",
      "Chimney cap installation",
      "Partial chimney rebuilds",
    ],
    steps: [
      { title: "Roofline inspection", desc: "We get up there and look — crown, flashing, joints, and brick condition." },
      { title: "Straight assessment", desc: "Repair vs. rebuild, explained with photos of your actual chimney." },
      { title: "The work", desc: "Done safely, with the roof and yard protected below." },
      { title: "Seal & finish", desc: "Crowned, flashed, and pointed to shed water for years." },
    ],
    pricingHint: "Chimney work is quoted free after inspection — pricing depends on height, access, and how much of the stack needs work. You'll see photos of the damage and a firm price before deciding.",
    faqs: [
      { q: "My chimney leaks into the house. Is it the flashing?", a: "Often — flashing failure and cracked crowns are the two most common leak sources. Both are standard repairs for us." },
      { q: "How do I know if my chimney needs a partial rebuild?", a: "Deep mortar loss and bricks spalling across the whole stack point to rebuilding the top courses. Localized crown or joint failure is usually a repair. We'll show you photos and tell you which one you have." },
      { q: "Do you install chimney caps?", a: "Yes. A cap keeps water, animals, and debris out of the flue — cheap insurance for the masonry below it." },
      { q: "Can you match the brick on an older chimney?", a: "Yes — matching brick and mortar is standard on our chimney work, so the repair doesn't stand out from the street." },
    ],
    meta: "Chimney repair in Cranford, NJ — crowns, flashing, repointing, caps, partial rebuilds. Free estimates — (848) 256-2159.",
  },
  {
    slug: "concrete-flatwork",
    title: "Concrete Flatwork",
    tagline: "Poured right. Finished clean.",
    img: "/img/concrete.jpg",
    description: [
      "Concrete fails for boring reasons: a thin base, no reinforcement, water pitched the wrong way. We pour driveways, walkways, patios, and slabs the un-boring way — excavated, based, reinforced, and finished so water runs off and the slab survives freeze-thaw winters.",
      "Concrete is our side work to masonry — and we hold it to the same standard: proper preparation, honest thickness, and control joints placed so cracks go where we tell them to.",
    ],
    included: [
      "Driveways & parking pads",
      "Walkways & sidewalks",
      "Patios & backyard slabs",
      "Concrete steps & landings",
      "Demo & haul-away of old concrete",
      "Expansion joints & proper grading",
    ],
    steps: [
      { title: "Measure & quote", desc: "We measure, check the base and drainage, and quote firm and free." },
      { title: "Demo & base", desc: "Old concrete out, sub-base compacted — the part nobody sees is the part that matters." },
      { title: "Pour & finish", desc: "Reinforced pour, finished and jointed so cracks go where we tell them to." },
      { title: "Cure", desc: "Proper curing and a straight answer on when you can park on it." },
    ],
    pricingHint: "Concrete is quoted free on-site by square footage, thickness, and access. No per-yard surprises — you get one firm written price covering demo, materials, pour, and cleanup.",
    faqs: [
      { q: "How thick do you pour?", a: "Walkways and patios typically 4 inches; driveways heavier with reinforcement — set by the job, not by a one-size rule." },
      { q: "How long before I can use it?", a: "Foot traffic in about a day, vehicles after a proper cure — we'll give you exact timing for your pour." },
      { q: "Do you remove the old concrete?", a: "Yes. Demo and haul-away are part of the quote, not an add-on." },
      { q: "My concrete is cracked but not sunken. Can it be patched?", a: "Surface cracks can be filled, but patches are cosmetic and temporary. If the slab is heaving or settling, replacement is the honest recommendation — we'll tell you which one you're looking at." },
    ],
    meta: "Concrete flatwork in Cranford, NJ — driveways, walkways, patios, steps. Free estimates — (848) 256-2159.",
  },
  {
    slug: "retaining-walls",
    title: "Retaining Walls",
    tagline: "Built against the hill — and the water behind it.",
    img: "/img/retaining-wall.jpg",
    description: [
      "Retaining walls don't usually fail because the stone or block was weak. They fail because of what's behind them: soil pressure and trapped water pushing a wall that was built without drainage. A leaning or bulging wall is telling you that story.",
      "We build and rebuild retaining walls in natural stone and segmental block with the unglamorous parts done right — a compacted gravel footing, drainage stone and pipe behind the wall, and geogrid where the height calls for it.",
    ],
    included: [
      "Natural stone retaining walls",
      "Segmental block retaining walls",
      "Rebuilds of leaning & failed walls",
      "Garden & terraced walls",
      "Drainage systems behind walls",
      "Wall caps & step tie-ins",
    ],
    steps: [
      { title: "Assess the slope", desc: "We look at the grade, the soil, and where the water goes — then quote firm and free." },
      { title: "Footing", desc: "Trench dug below frost depth, gravel footing compacted level." },
      { title: "Build & drain", desc: "Courses laid level and battered back, drainage stone and pipe installed as we go." },
      { title: "Backfill & cap", desc: "Backfilled in lifts, capped, and the grade restored around the wall." },
    ],
    pricingHint: "Retaining walls are quoted free on-site by length, height, and material. Rebuilds are priced after we see how the old wall was put together — you'll get a firm written price either way.",
    faqs: [
      { q: "My wall is leaning. Can it be repaired or does it need rebuilding?", a: "A leaning wall almost always needs to come down and be rebuilt with proper drainage — straightening the face without fixing what's behind it just restarts the clock. We'll assess it honestly on-site." },
      { q: "Stone or block — which lasts longer?", a: "Both outlast a badly drained wall by decades. Segmental block is engineered and uniform; natural stone wins on looks. The drainage decides the lifespan more than the material does." },
      { q: "Do taller walls need permits or engineering?", a: "In many New Jersey towns, walls above a certain height (often 4 feet) need a permit, and taller walls may need engineering. We'll tell you what your town requires before we start." },
    ],
    meta: "Retaining walls in Cranford, NJ — natural stone & block, rebuilds, drainage. Free estimates — (848) 256-2159.",
  },
  {
    slug: "masonry-restoration",
    title: "Masonry Restoration",
    tagline: "Bring the original back.",
    img: "/img/restoration.jpg",
    description: [
      "Older brick and stone buildings across Union County were built with softer brick and lime-rich mortar — and they get damaged by exactly the repairs meant to save them: hard modern mortar, sandblasting, and sealers that trap moisture inside the wall.",
      "Restoration means working the way the building was built. We analyze the existing mortar, match it in strength and color, replace only the units that are truly gone, and clean with methods that don't eat the face off historic brick.",
    ],
    included: [
      "Full-facade repointing with matched lime mortar",
      "Historic brick & stone replacement",
      "Parapet & cornice restoration",
      "Gentle facade cleaning (no sandblasting)",
      "Stone lintel & sill restoration",
      "Structural masonry repairs",
    ],
    steps: [
      { title: "Survey", desc: "We document the facade — mortar condition, damaged units, and where water is getting in." },
      { title: "Match", desc: "Mortar matched for strength, color, and texture — softer than the brick, like the original." },
      { title: "Restore", desc: "Failed joints ground out and repointed; damaged brick and stone replaced with matched units." },
      { title: "Clean & protect", desc: "Facade cleaned gently and left to breathe — no coatings that trap moisture." },
    ],
    pricingHint: "Restoration is quoted free after an on-site survey. The honest number depends on facade area, access, and how much unit replacement is involved — you'll get a firm written price with the scope spelled out.",
    faqs: [
      { q: "Why does mortar matching matter so much on old brick?", a: "Old brick is soft. Modern high-strength mortar is harder than the brick itself, so freeze-thaw movement breaks the brick faces instead of the joints. Matched mortar wears sacrificially, the way the original did." },
      { q: "Can you restore just the front facade?", a: "Yes. Front-elevation restorations are common — we restore the elevations that need it and leave sound masonry alone." },
      { q: "Do you sandblast to clean brick?", a: "No. Sandblasting strips the hard fired skin off old brick and accelerates decay. We use gentle cleaning methods appropriate to historic masonry." },
    ],
    meta: "Masonry restoration in Cranford, NJ — historic brick & stone, matched mortar, facade restoration. Free estimates — (848) 256-2159.",
  },
];
