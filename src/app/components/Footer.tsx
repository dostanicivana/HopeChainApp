import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary rounded-lg p-2">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">HopeChain</h3>
                <p className="text-xs text-muted-foreground">Humanitarian Crowdfunding</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Connecting compassionate hearts with humanitarian causes worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground">
                  About Us
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground">
                  How It Works
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground">
                  Start Campaign
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground">
                  Success Stories
                </Button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground">
                  Help Center
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground">
                  Safety & Trust
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@hopechain.org</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+381 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Belgrade, BG</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2025 HopeChain. All rights reserved. Making the world a better place, one campaign at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
