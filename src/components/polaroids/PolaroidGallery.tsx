import { PolaroidCard } from "./PolaroidCard";
import { Polaroid } from "@/lib/types/polaroid";

interface PolaroidGalleryProps {
  polaroids: Polaroid[];
}

export const PolaroidGallery = ({ polaroids }: PolaroidGalleryProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 px-2 sm:px-0">
    {polaroids.map((polaroid, index) => (
      <PolaroidCard
        key={`${polaroid.src}-${index}`}
        polaroid={polaroid}
        index={index}
      />
    ))}
  </div>
);
