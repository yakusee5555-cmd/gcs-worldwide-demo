export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  img: string;
  body: string[];
}

export const POSTS: Post[] = [
  {
    slug: "signs-your-brick-needs-repointing",
    title: "Signs Your Brick Needs Repointing",
    excerpt:
      "Mortar is supposed to wear out before the brick does. Here's how to tell when your joints have stopped doing their job — and what waiting costs you.",
    date: "October 12, 2026",
    readTime: "4 min read",
    img: "/img/blog-repointing.jpg",
    body: [
      "Every brick homeowner in New Jersey eventually faces the same question: is that mortar just ugly, or is it a problem? Mortar joints are the sacrificial layer of your wall — they're designed to wear out over 25–30 years so your brick doesn't have to. When they go too long, water gets behind the brick, and a pointing job quietly becomes a brick-replacement job.",
      "Sign one: recessed joints. Run a finger along a mortar joint. If the mortar sits more than about a quarter-inch behind the face of the brick — or crumbles and feels sandy when you press it — it's done. Sound mortar is hard and sits nearly flush.",
      "Sign two: bricks are starting to suffer. Cracked, flaking, or rounded brick faces (that's called spalling) mean water is entering the brick itself and freezing inside it. Pointing protects brick; once the brick is spalling, those units need replacement too.",
      "Sign three: water inside. Stains on interior plaster near exterior walls, peeling paint that keeps coming back, or white powdery efflorescence on the brick all point to water traveling through failed joints.",
      "Sign four: open joints. Mortar missing deeply enough that you can see into the joint, or weeds sprouting from the wall, means the joint is open, not just worn.",
      "One warning that saves people real money: the fix has to match the building. Repointing a soft, older brick facade with modern high-strength mortar is a classic expensive mistake — the hard mortar traps moisture and the brick faces blow off within a few winters. The mortar should always be softer than the brick.",
      "If you're seeing two or more of these signs, get the wall looked at before winter. Freeze-thaw cycles are what turn worn joints into damaged brick, and pointing in fall is a lot cheaper than pointing plus brick replacement in spring. Estimates are free — we'd rather tell you 'you've got a few years left' than sell you work you don't need yet.",
    ],
  },
  {
    slug: "chimney-leaks-crown-or-flashing",
    title: "Chimney Leaks: It's Usually the Crown or the Flashing",
    excerpt:
      "A stain on the ceiling near your chimney is rarely a roof problem. The two failure points that cause most chimney leaks — and how to tell them apart.",
    date: "September 28, 2026",
    readTime: "4 min read",
    img: "/img/blog-chimney.jpg",
    body: [
      "When a homeowner finds a water stain on the ceiling or wall near a fireplace, the first call is usually to a roofer. Sometimes that's right. But masonry chimneys have two failure points that account for most of the leaks we see — and neither one is the roof.",
      "Suspect one: the crown. The crown is the concrete slab on top of the chimney that sheds water off the stack. It lives in full sun, full freeze, and full thaw — and it cracks. Once it does, every rain sends water straight down into the brickwork, where it freezes, expands, and starts popping brick faces off from the top down.",
      "Suspect two: the flashing. Where the chimney meets the roof, metal flashing keeps the joint watertight. Flashing that's rusted, pulled loose, or was only ever sealed with caulk will leak — and caulk 'repairs' typically buy one season, not a solution.",
      "How to tell from the ground: look at the top of the stack. Are there visible cracks in the cap? Bricks near the top flaking or mortar joints open? A chimney that leans even slightly, or one with vegetation growing out of it, is telling you water has been getting in for a while.",
      "What actually fixes it: a cracked crown gets replaced with a properly formed, overhanging crown (or repaired if the damage is minor). Failed flashing gets replaced — not re-caulked. And the open mortar joints that let water in get ground out and repointed. None of it is glamorous; all of it is cheaper than the interior damage a slow leak does over a few winters.",
      "If you've got a stain near the chimney, get it looked at with photos from the roofline — a straight assessment should always come with pictures of your actual chimney, not a stock diagram. Our inspections and estimates are free, and we'll tell you if it's a half-day repair or something bigger.",
    ],
  },
  {
    slug: "pavers-vs-poured-concrete-patios-walkways",
    title: "Pavers vs. Poured Concrete: Patios & Walkways in NJ",
    excerpt:
      "Both can last decades, and both can fail in five years. The honest comparison we give homeowners — and why the base matters more than the surface.",
    date: "September 10, 2026",
    readTime: "4 min read",
    img: "/img/blog-pavers.jpg",
    body: [
      "When a patio or walkway needs replacing, the first question is always the same: pavers or poured concrete? Both are good answers — under the right conditions. Here's the comparison we walk through with homeowners in Union County.",
      "Poured concrete: the budget-friendly workhorse. A properly built slab — excavated, compacted gravel base, reinforcement, control joints in the right places — lasts 25 years or more and costs less up front than pavers. Its weakness is repair: when a section cracks or settles, you're patching (and patches show) or replacing the whole slab.",
      "Pavers: the repairable surface. Individual units can be lifted, the base fixed, and the same pavers re-laid — a settled corner is an afternoon repair, not a demolition. Pavers also flex slightly with freeze-thaw instead of cracking. The tradeoff is cost: material and labor typically run above plain concrete, and cheap installations without edge restraints creep and spread.",
      "The base is the real decision. In New Jersey's freeze-thaw cycles, most patio failures — heaved slabs, settled pavers, puddles that never drain — trace back to a base that was too thin or never compacted. Four inches of compacted aggregate is a starting point, not a luxury. Any quote that doesn't mention excavation depth and base material is a quote for the surface only.",
      "Natural stone deserves a mention too. Bluestone patios and walkways are the classic North Jersey look, handle freeze-thaw beautifully, and outlast both options — at the highest material cost. For front walkways especially, it's the choice homeowners rarely regret.",
      "So which should you pick? If the budget is tight and the area is simple, poured concrete done right is the smart money. If you want repairability and looks, pavers earn their premium. Either way, judge the quote by the base it describes — and if a settled patio is your problem, come look at it with us. Repair vs. replacement is a judgment call we make standing on the actual patio, and the estimate is free either way.",
    ],
  },
];
