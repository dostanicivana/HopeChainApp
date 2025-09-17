'use client';
import { useReadContract } from "thirdweb/react";
import { client } from "./client";
import { sepolia } from "thirdweb/chains";
import { getContract } from "thirdweb";
import { CampaignCard } from "./components/CampaignCard";
import { CROWDFUNDING_FACTORY } from "./constants/contracts";
import StatsSection from "@/app/components/StatsSection";
import { Button } from "@/app/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Footer } from "@/app/components/Footer"; 
import { Heart, Users, Shield, Globe } from "lucide-react";

export default function Home() {
  // Get CrowdfundingFactory contract
  const contract = getContract({
    client: client,
    chain: sepolia,
    address: CROWDFUNDING_FACTORY,
  });

  // Get all campaigns deployed with CrowdfundingFactory
  const {data: campaigns, isLoading: isLoadingCampaigns, refetch: refetchCampaigns } = useReadContract({
    contract: contract,
    method: "function getAllCampaigns() view returns ((address campaignAddress, address owner, string name)[])",
    params: []
  });

 return (
  <>
    <main className="mx-auto max-w-7xl px-4 mt-4 sm:px-6 lg:px-8">
      <div className="py-10">
        <StatsSection />

         {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-background via-secondary/20 to-primary/5 rounded-3xl p-12 mb-16 overflow-hidden border border-border/50">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Humanitarian Crowdfunding</span>
            </div>
            
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Making a <span className="text-primary">Difference</span> Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Support humanitarian campaigns that bring hope, healing, and help to communities worldwide. 
              Every contribution creates lasting impact and transforms lives.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search campaigns..." 
                  className="pl-12 py-6 text-lg border-0 bg-background/80 backdrop-blur-sm shadow-sm"
                />
              </div>
              <Button size="lg" variant="outline" className="px-8 py-6 border-0 bg-background/80 backdrop-blur-sm hover:bg-primary/10">
                <Filter className="h-5 w-5 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-semibold text-foreground">Active Campaigns</h3>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {!isLoadingCampaigns && campaigns && (
            campaigns.length > 0 ? (
              campaigns.map((campaign) => (
                <CampaignCard
                  key={campaign.campaignAddress}
                  campaignAddress={campaign.campaignAddress}
                />
              ))
            ) : (
              <p>No Campaigns</p>
            )
          )}
        </div>
      </div>

       {/* Call to Action */}
        <div className="relative bg-card border border-border rounded-3xl p-12 shadow-lg overflow-hidden mt-16">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-soft via-background to-accent opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Make an Impact</span>
            </div>
            
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to <span className="text-primary">Change Lives?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Join our community of changemakers and help us create a more compassionate world, 
              one campaign at a time. Your impact starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-primary text-white px-10 py-4 rounded-2xl hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3">
                <Heart className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                Start Your Campaign
              </button>
              <button className="group bg-background border-2 border-primary/20 text-foreground px-10 py-4 rounded-2xl hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 font-semibold flex items-center gap-3">
                <Search className="h-5 w-5  group-hover:scale-110 transition-transform duration-300" />
                Explore More
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">1K+</div>
                <div className="text-sm text-muted-foreground">Active Campaigns</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">$500K+</div>
                <div className="text-sm text-muted-foreground">Raised This Month</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">5K+</div>
                <div className="text-sm text-muted-foreground">Contributors</div>
              </div>
            </div>
          </div>
        </div>
    </main>

    {/*Footer*/}
    <Footer />
  </>
);
}
