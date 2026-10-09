import { notFound } from "next/navigation";

// Sends unknown paths to [locale]/not-found.tsx, so the 404 page is localised
export default function CatchAll() {
  notFound();
}
