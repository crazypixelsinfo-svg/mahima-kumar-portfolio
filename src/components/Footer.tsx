import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold text-gradient mb-1">
              Bellamkonda Mahima Kumar
            </p>
            <p className="text-muted-foreground text-sm">
              Creative Video Editor & Motion Graphics Designer
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://bellamkondamahimak.wixsite.com/carzypixels-1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center gap-1"
            >
              Portfolio
              <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://www.linkedin.com/in/bellamkonda-mahima-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center gap-1"
            >
              LinkedIn
              <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://vimeo.com/1150100962"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center gap-1"
            >
              Vimeo
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            2025 Mahima Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
