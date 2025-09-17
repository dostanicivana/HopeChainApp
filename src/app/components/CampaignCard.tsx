import { client } from "@/app/client";
import Link from "next/link";
import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { useReadContract } from "thirdweb/react";
import { Card, CardContent, CardFooter } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Heart, Users, Clock } from "lucide-react";


type CampaignCardProps = {
    campaignAddress: string;
};

export const CampaignCard: React.FC<CampaignCardProps> = ({ campaignAddress }) => {
    const contract = getContract({
        client: client,
        chain: sepolia,
        address: campaignAddress,
    });

    // Get Campaign Name
    const {data: campaignName} = useReadContract({
        contract: contract,
        method: "function name() view returns (string)",
        params: []
    });

    // Get Campaign Description
    const {data: campaignDescription} = useReadContract({
        contract: contract,
        method: "function description() view returns (string)",
        params: []
    });

    // Goal amount of the campaign
    const { data: goal, isLoading: isLoadingGoal } = useReadContract({
        contract: contract,
        method: "function goal() view returns (uint256)",
        params: [],
    });

    // Total funded balance of the campaign
    const { data: balance, isLoading: isLoadingBalance } = useReadContract({
        contract: contract,
        method: "function getContractBalance() view returns (uint256)",
        params: [],
    });

    // Calulate the total funded balance percentage
    const totalBalance = balance?.toString();
    const totalGoal = goal?.toString();
    let balancePercentage = (parseInt(totalBalance as string) / parseInt(totalGoal as string)) * 100;

    // If balance is greater than or equal to goal, percentage should be 100
    if (balancePercentage >= 100) {
        balancePercentage = 100;
    }

    return (
          <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                    {/* Slika na vrhu */}
                   

                    {/* Sadržaj */}
                    <CardContent className="p-6">
                        {/* Naslov */}
                        <h3 className="font-semibold text-lg text-card-foreground mb-2 line-clamp-2">
                        {campaignName}
                        </h3>
                        {/* Opis */}
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {campaignDescription}
                        </p>

                        {/* progress bar */}
                        {!isLoadingBalance && !isLoadingGoal && (
                       <div className="w-full bg-gray-400 rounded-full h-2 dark:bg-gray-700 relative">
                            <div
                                className="bg-red-500 h-2 rounded-full"
                                style={{ width: `${balancePercentage?.toString()}%` }}
                            ></div>
                            <p className="absolute -bottom-5 left-0 text-gray-700 text-xs">
                                ${balance?.toString()}
                            </p>
                            <p className="absolute -bottom-5 right-0 text-gray-700 text-xs">
                                {balancePercentage >= 100 ? "" : `${balancePercentage?.toString()}%`}
                            </p>
                            </div>

                        )}
                    </CardContent>

                    {/* dugmme */}
                    <CardFooter className="p-6 pt-0">
                        <Link href={`/campaign/${campaignAddress}`} passHref={true}>
                        <Button className="w-full text-white group-hover:bg-primary-light transition-colors" size="lg">
                            <Heart className="mr-2 h-4 w-4 text-white" />
                            Support Campaign
                        </Button>
                        </Link>
                    </CardFooter>
       </Card>

)
};