export const BUSINESS = {
  name: "GCS Worldwide LLC",
  shortName: "GCS Worldwide",
  phone: "(848) 256-2159",
  phoneHref: "tel:+18482562159",
  email: "gcsglobal@icloud.com",
  emailHref: "mailto:gcsglobal@icloud.com",
  address: "20 Commerce Dr, Suite 135, Cranford, NJ 07016",
  area: "Cranford & Union County, NJ",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const HERO_IMG = "/img/hero.jpg";
export const FULLBLEED_IMG = "/img/fullbleed.jpg";

/* Glass cards on full-bleed image (section 4) */
export interface GlassCard {
  title: string;
  desc: string;
  pos: string;
}

export const GLASS_CARDS: GlassCard[] = [
  {
    title: "Free estimates",
    desc: "On-site quotes with a firm, written price before any work starts.",
    pos: "left-[6%] top-[16%]",
  },
  {
    title: "Masonry first",
    desc: "Brick, stone, and block are the trade — concrete is the side work, not the other way around.",
    pos: "right-[8%] top-[24%]",
  },
  {
    title: "Cranford based",
    desc: "Office in Cranford, serving homeowners across Union County, NJ.",
    pos: "left-[10%] bottom-[20%]",
  },
  {
    title: "Straight answers",
    desc: "If a repair will hold, we say so. If it needs a rebuild, we show you why.",
    pos: "right-[10%] bottom-[14%]",
  },
];

/* Work gallery — captions describe the kind of work shown,
   never a specific job, customer, or town. */
export interface WorkShot {
  img: string;
  title: string;
  location: string;
}

export const WORK_SHOTS: WorkShot[] = [
  { img: "/img/work-brick-facade.jpg", title: "Brick facade in running bond", location: "Brickwork" },
  { img: "/img/work-stone-veneer.jpg", title: "Stone veneer wall", location: "Natural stone" },
  { img: "/img/work-paver-walkway.jpg", title: "Paver patio & walkway", location: "Stone & pavers" },
  { img: "/img/work-chimney.jpg", title: "Chimney stack & cap", location: "Chimney repair" },
  { img: "/img/work-brick-steps.jpg", title: "Herringbone brick steps", location: "Brickwork" },
  { img: "/img/work-concrete.jpg", title: "Fresh-poured concrete finish", location: "Concrete flatwork" },
  { img: "/img/work-retaining.jpg", title: "Dry-stack stone wall", location: "Retaining walls" },
  { img: "/img/work-brick-detail.jpg", title: "Mortar joints, up close", location: "Repointing" },
];

export interface Service {
  img: string;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    img: "/img/brick-repointing.jpg",
    title: "Brick Repair & Repointing",
    desc: "Cracked, crumbling mortar ground out and repointed; damaged brick replaced and matched.",
  },
  {
    img: "/img/stone-paver.jpg",
    title: "Stone & Paver Work",
    desc: "Patios, walkways, and steps in natural stone and pavers, set on a proper base.",
  },
  {
    img: "/img/chimney.jpg",
    title: "Chimney Repair",
    desc: "Crowns, flashing, pointing, and brick repair — from the roofline up.",
  },
  {
    img: "/img/concrete.jpg",
    title: "Concrete Flatwork",
    desc: "Driveways, walkways, patios, and slabs — excavated, based, reinforced, and finished clean.",
  },
  {
    img: "/img/retaining-wall.jpg",
    title: "Retaining Walls",
    desc: "Stone and block retaining walls built with the drainage that keeps them standing.",
  },
  {
    img: "/img/restoration.jpg",
    title: "Masonry Restoration",
    desc: "Older brick and stone brought back — matched mortar, replaced units, cleaned and sealed.",
  },
];

export const TOWNS = [
  "Cranford",
  "Westfield",
  "Kenilworth",
  "Garwood",
  "Roselle Park",
  "Clark",
  "Linden",
  "Union",
  "Scotch Plains",
  "Mountainside",
  "Springfield",
  "Berkeley Heights",
];

export interface ServiceCard {
  img: string;
  from: string;
  title: string;
  desc: string;
}

export const SERVICE_CARDS: ServiceCard[] = [
  {
    img: "/img/brick-repointing.jpg",
    from: "Free Estimate",
    title: "Brick Repair & Repointing",
    desc: "Failing mortar ground out to sound material and repointed with a match for your brick — and spalled brick replaced, not covered up.",
  },
  {
    img: "/img/stone-paver.jpg",
    from: "Free Estimate",
    title: "Stone & Paver Work",
    desc: "Patios, walkways, and steps in natural stone or pavers — properly based so they stay level through NJ winters.",
  },
  {
    img: "/img/chimney.jpg",
    from: "Free Estimate",
    title: "Chimney Repair",
    desc: "Crowns, flashing, pointing, and brick replacement — the repairs that keep water out of the stack and out of your house.",
  },
  {
    img: "/img/concrete.jpg",
    from: "Free Estimate",
    title: "Concrete Flatwork",
    desc: "Driveways, walkways, and slabs poured on a compacted base, reinforced, and pitched so water runs off — not in.",
  },
  {
    img: "/img/retaining-wall.jpg",
    from: "Free Estimate",
    title: "Retaining Walls",
    desc: "Natural stone and segmental block walls, built with gravel backfill and drainage — the parts that decide whether a wall stands or leans.",
  },
  {
    img: "/img/restoration.jpg",
    from: "Free Estimate",
    title: "Masonry Restoration",
    desc: "Full-facade restoration for older brick and stone: matched mortar, replaced units, and a finish that respects the original building.",
  },
];
