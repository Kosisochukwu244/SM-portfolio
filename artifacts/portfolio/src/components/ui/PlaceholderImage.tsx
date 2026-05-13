import { useState } from "react";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function PlaceholderImage({ src, alt, className }: PlaceholderImageProps) {
  const [errored, setErrored] = useState(false);
  const showPlaceholder = !src || errored;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {showPlaceholder ? (
        <div className="absolute inset-0 bg-secondary flex items-center justify-center">
          <Camera className="w-8 h-8 text-primary/40" />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setErrored(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
}
