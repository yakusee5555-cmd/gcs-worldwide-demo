import Hero from "../components/Hero";
import { Areas, Contact } from "../components/Sections";
import { FullBleed, Stacked, Work } from "../components/Showcase";
import { Marquee } from "../components/MotionBits";
import { RouteFX } from "../components/PageBits";

const MARQUEE_ITEMS = [
  "Brick Repair",
  "Repointing",
  "Stone & Pavers",
  "Chimneys",
  "Concrete Flatwork",
  "Retaining Walls",
  "Restoration",
  "Cranford, NJ",
  "Union County",
  "Free Estimates",
];

export default function Home() {
  return (
    <>
      <RouteFX
        title="GCS Worldwide LLC | Masonry Contractor — Cranford, NJ"
        description="GCS Worldwide LLC — masonry contractor in Cranford, NJ. Brick repair & repointing, stone & paver work, chimney repair, concrete flatwork, retaining walls, and masonry restoration. Free estimates."
      />
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <Stacked />
      <FullBleed />
      <Work />
      <Areas />
      <Contact />
    </>
  );
}
