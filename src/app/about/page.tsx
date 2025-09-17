'use client';
import { client } from "@/app/client";
import { Footer } from "@/app/components/Footer";
import { Heart, Users, Shield, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
     
      
      <main className="container mx-auto px-4 py-16">
         {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary-soft via-background to-accent rounded-3xl p-12 mb-20">
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Humanitarian Crowdfunding</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              About <span className="text-primary">HopeChain</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connecting compassionate hearts with humanitarian causes worldwide through secure, transparent crowdfunding that makes real impact possible.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-2xl"></div>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-foreground mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              We believe in the power of collective compassion. HopeChain was created to bridge the gap between those who need help and those willing to help, making humanitarian aid more accessible and transparent.
            </p>
            <p className="text-muted-foreground">
              Every donation matters, every campaign tells a story, and every contributor becomes part of a global movement for positive change.
            </p>
          </div>
          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">Making a Difference</h3>
            <p className="text-muted-foreground">Together, we've helped thousands of people worldwide</p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Trust & Security</h3>
              <p className="text-muted-foreground">Your donations are protected with the highest security standards.</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Community</h3>
              <p className="text-muted-foreground">Building a global community of caring individuals.</p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Global Impact</h3>
              <p className="text-muted-foreground">Making humanitarian aid accessible worldwide.</p>
            </div>
          </div>
        </div>

          {/* CTA */}
        <div className="relative bg-card border border-border rounded-3xl p-12 shadow-lg overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-soft via-background to-accent opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Join the Movement</span>
            </div>
            
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Make a <span className="text-primary">Difference?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Every journey begins with a single step. Whether you're looking to help or need support, 
              your story matters and your impact is waiting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-primary text-white px-10 py-4 rounded-2xl hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3">
                  <Heart className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  Start a Campaign
             </button>

              <button className="group bg-background border-2 border-primary/20 text-foreground px-10 py-4 rounded-2xl hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 font-semibold flex items-center gap-3">
                <Globe className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Explore Campaigns
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Lives Touched</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">$2M+</div>
                <div className="text-sm text-muted-foreground">Funds Raised</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;