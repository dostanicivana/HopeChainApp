'use client';
import { client } from "@/app/client";
import { CROWDFUNDING_FACTORY } from "@/app/constants/contracts";
import CrowdfundingFactoryABI from "@/app/contracts/CrowdfundingFactory.json";
import { MyCampaignCard } from "@/app/components/MyCampaignCard";
import { useState } from "react";
import { getContract, prepareContractCall } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { deployPublishedContract } from "thirdweb/deploys";
import { useActiveAccount, useReadContract, useSendTransaction } from "thirdweb/react"
import { Footer } from "@/app/components/Footer";
import { Plus } from "lucide-react";
import { Abi } from "viem"; 





export default function DashboardPage() {
    const account = useActiveAccount();
    
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const contract = getContract({
        client: client,
        chain: sepolia,
        address: CROWDFUNDING_FACTORY,
    });

    // Get Campaigns
    const { data: myCampaigns, isLoading: isLoadingMyCampaigns, refetch } = useReadContract({
        contract: contract,
        method: "function getUserCampaigns(address _user) view returns ((address campaignAddress, address owner, string name, uint256 creationTime)[])",
        params: [account?.address as string]
    });
    
    return (
        <div className="mx-auto max-w-7xl px-4 mt-16 sm:px-6 lg:px-8">
            <div className="flex flex-row justify-between items-center mb-8">
                {/* Dashboard Header */}
                 <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                      Dashboard
                    </h1>
                    <p className="text-muted-foreground">
                      Manage your humanitarian campaigns and make a difference
                    </p>
                </div>
                <button
                    className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md"
                    onClick={() => setIsModalOpen(true)}
                 >  
                    <Plus className="w-4 h-4 mr-2" /> 
                          Create Campaign
                </button>
            </div>
             {/* My Campaigns Section */}
       
            <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-semibold text-foreground">
                My Campaigns
            </h2>
            <div className="h-px bg-gray-300 flex-1"></div>
            </div>

           {/* <p className="text-2xl font-semibold mb-4">My Campaigns:</p> */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {!isLoadingMyCampaigns && (
                    myCampaigns && myCampaigns.length > 0 ? (
                        myCampaigns.map((campaign, index) => (
                            <MyCampaignCard
                                key={index}
                                contractAddress={campaign.campaignAddress}
                            />
                        ))
                    ) : (
                        <p>No campaigns</p>
                    )
                )}
            </div>
            
            {isModalOpen && (
                <CreateCampaignModal
                    setIsModalOpen={setIsModalOpen}
                    refetch={refetch}
                />
            )}
        </div>
    )
}

type CreateCampaignModalProps = {
    setIsModalOpen: (value: boolean) => void
    refetch: () => void
}

export const CreateCampaignModal = ({
  setIsModalOpen,
  refetch,
}: CreateCampaignModalProps) => {
  const account = useActiveAccount();
  const [campaignName, setCampaignName] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [campaignGoal, setCampaignGoal] = useState<number>(1);
  const [campaignDeadline, setCampaignDeadline] = useState<number>(1);
  const [isCreating, setIsCreating] = useState(false);

  // contract instance
  const contract = getContract({
    client,
    chain: sepolia,
    address: CROWDFUNDING_FACTORY,
    abi: CrowdfundingFactoryABI.abi as Abi,
  });

  const { mutate: sendTransaction } = useSendTransaction();

  const handleCreateCampaign = async () => {
    if (!account) {
      alert("Connect your wallet first.");
      return;
    }
    try {
      setIsCreating(true);

      const tx = prepareContractCall({
        contract,
        method:
          "function createCampaign(string _name,string _description,uint256 _goal,uint256 _durationInDays)",
        params: [
          campaignName,
          campaignDescription,
          BigInt(campaignGoal),
          BigInt(campaignDeadline),
        ],
      });

      await sendTransaction(tx);

      alert("Campaign created successfully ");
      refetch();
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error creating campaign:", err);
      alert("Something went wrong while creating campaign");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center backdrop-blur-md">
      <div className="w-1/2 bg-slate-100 p-6 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold">Create a Campaign</p>
          <button
            className="text-sm px-4 py-2 bg-slate-600 text-white rounded-md"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </div>

        <div className="flex flex-col">
          <label>Campaign Name:</label>
          <input
            type="text"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            placeholder="Campaign Name"
            className="mb-4 px-4 py-2 bg-slate-300 rounded-md"
          />

          <label>Campaign Description:</label>
          <textarea
            value={campaignDescription}
            onChange={(e) => setCampaignDescription(e.target.value)}
            placeholder="Campaign Description"
            className="mb-4 px-4 py-2 bg-slate-300 rounded-md"
          ></textarea>

          <label>Campaign Goal (wei):</label>
          <input
            type="number"
            value={campaignGoal}
            onChange={(e) => setCampaignGoal(parseInt(e.target.value))}
            className="mb-4 px-4 py-2 bg-slate-300 rounded-md"
          />

          <label>Campaign Length (days):</label>
          <input
            type="number"
            value={campaignDeadline}
            onChange={(e) => setCampaignDeadline(parseInt(e.target.value))}
            className="mb-4 px-4 py-2 bg-slate-300 rounded-md"
          />

          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
            onClick={handleCreateCampaign}
            disabled={isCreating}
          >
            {isCreating ? "Creating Campaign..." : "Create Campaign"}
          </button>
        </div>
      </div>
    </div>
  );
};

/*const CreateCampaignModal = (
    { setIsModalOpen, refetch }: CreateCampaignModalProps
) => {
    const account = useActiveAccount();
    const [isDeployingContract, setIsDeployingContract] = useState<boolean>(false);
    const [campaignName, setCampaignName] = useState<string>("");
    const [campaignDescription, setCampaignDescription] = useState<string>("");
    const [campaignGoal, setCampaignGoal] = useState<number>(1);
    const [campaignDeadline, setCampaignDeadline] = useState<number>(1);
    
    // Deploy contract from CrowdfundingFactory
    const handleDeployContract = async () => {
        setIsDeployingContract(true);
        try {
            console.log("Deploying contract...");
            let cpmgoal = BigInt(campaignGoal)
            let cpmdeadline = BigInt(campaignDeadline)
            const contractAddress = await deployPublishedContract({
                client: client,
                chain: sepolia,
                account: account!,
                contractId: "CrowdfundingFactory", // ili Crowdfunding
               contractParams: {
                      _name:campaignName,
                      _description:campaignDescription,
                      _goal:cpmgoal,
                      _deadline:cpmdeadline,
                    //  _owner:client    // ovde bi onda trebala adresa da bude 
                },
                publisher: "0x86fe0f6a6b1541a214965Ae8192164Eb327918b7",  // cobtract
                version: "0.1.0",    // treba mi verzija
            });
            alert("Contract deployed successfully!");
        } catch (error) {
            console.error(error);
        } finally {
            setIsDeployingContract(false);
            setIsModalOpen(false);
            refetch(); 
        }
    };

    const handleCampaignGoal = (value: number) => {
        if (value < 1) {
            setCampaignGoal(1);
        } else {
            setCampaignGoal(value);
        }
    }

    const handleCampaignLengthChange = (value: number) => { 
        if (value < 1) {
            setCampaignDeadline(1);
        } else {
            setCampaignDeadline(value);
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center backdrop-blur-md">
            <div className="w-1/2 bg-slate-100 p-6 rounded-md">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg font-semibold">Create a Campaign</p>
                    <button
                        className="text-sm px-4 py-2 bg-slate-600 text-white rounded-md"
                        onClick={() => setIsModalOpen(false)}
                    >Close</button>
                </div>
                <div className="flex flex-col">
                    <label>Campaign Name:</label>
                    <input 
                        type="text" 
                        value={campaignName}
                        onChange={(e) => setCampaignName(e.target.value)}
                        placeholder="Campaign Name"
                        className="mb-4 px-4 py-2 bg-slate-300 rounded-md"
                    />
                    <label>Campaign Description:</label>
                    <textarea
                        value={campaignDescription}
                        onChange={(e) => setCampaignDescription(e.target.value)}
                        placeholder="Campaign Description"
                        className="mb-4 px-4 py-2 bg-slate-300 rounded-md"
                    ></textarea>
                    <label>Campaign Goal:</label>
                    <input 
                        type="number"
                        value={campaignGoal}
                        onChange={(e) => handleCampaignGoal(parseInt(e.target.value))}
                        className="mb-4 px-4 py-2 bg-slate-300 rounded-md"
                    />
                    <label>{`Campaign Length (Days)`}</label>
                    <div className="flex space-x-4">
                        <input 
                            type="number"
                            value={campaignDeadline}
                            onChange={(e) => handleCampaignLengthChange(parseInt(e.target.value))} 
                            className="mb-4 px-4 py-2 bg-slate-300 rounded-md"
                        />
                    </div>

                    <button
                        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
                        onClick={handleDeployContract}
                    >{
                        isDeployingContract ? "Creating Campaign..." : "Create Campaign"
                    }</button>
                    
                </div>
            </div>
        </div>
       
    )*
     
}*/
