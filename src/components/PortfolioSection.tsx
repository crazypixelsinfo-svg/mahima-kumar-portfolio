import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoItem {
  id: string;
  vimeoId: string;
}

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const topVideos: VideoItem[] = [
    { id: "1", vimeoId: "1150118281" },
    { id: "2", vimeoId: "1150116896" },
    { id: "3", vimeoId: "1150116864" },
  ];

  const moreVideos: VideoItem[] = [
    { id: "4", vimeoId: "1150116846" },
    { id: "5", vimeoId: "1150116762" },
    { id: "6", vimeoId: "1150116741" },
    { id: "7", vimeoId: "1150116693" },
    { id: "8", vimeoId: "1150116610" },
    { id: "9", vimeoId: "1150116475" },
    { id: "10", vimeoId: "1150100962" },
  ];

  const VideoCard = ({
    video,
    isLarge = false,
  }: {
    video: VideoItem;
    isLarge?: boolean;
  }) => (
    <div
      className={`group relative rounded-lg overflow-hidden bg-muted ${
        isLarge ? "aspect-video" : "aspect-video"
      }`}
    >
      <iframe
        src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&background=1`}
        className="absolute inset-0 w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture"
        title={`Video ${video.id}`}
      />
      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-all duration-300" />
      <a
        href={`https://vimeo.com/${video.vimeoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span className="px-4 py-2 bg-background/90 rounded-full text-sm font-medium">
          Watch on Vimeo
        </span>
      </a>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="section-spacing border-t border-border"
    >
      <div className="section-container">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-12">
            Selected Works
          </h2>
        </div>

        {/* Top 3 Videos - Large Cards */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {topVideos.map((video) => (
            <VideoCard key={video.id} video={video} isLarge />
          ))}
        </div>

        {/* View More Button */}
        <div
          className={`flex justify-center mb-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="group"
          >
            {showAll ? "Show Less" : "View More"}
            {showAll ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>

        {/* More Videos Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 overflow-hidden ${
            showAll
              ? "opacity-100 max-h-[2000px]"
              : "opacity-0 max-h-0 pointer-events-none"
          }`}
        >
          {moreVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
