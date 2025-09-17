import { Card, CardContent } from "@/app/components/ui/card";
import { Heart, Users, Target, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Target,
    label: "Total Raised",
    value: "$2.4M",
    description: "Across all campaigns",
    color: "text-red-600" // crvena
  },
  {
    icon: Users,
    label: "Active Donors",
    value: "12,847",
    description: "Supporting humanitarian causes",
    color: "text-green-600" // zelena
  },
  {
    icon: Heart,
    label: "Lives Impacted",
    value: "89,234",
    description: "People helped worldwide",
    color: "text-orange-500" // narandžasta
  },
  {
    icon: TrendingUp,
    label: "Success Rate",
    value: "94%",
    description: "Campaigns fully funded",
    color: "text-red-600" // crvena
  }
];

export function StatsSection() {
  return (
    <section className="py-8 bg-muted">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center border shadow-sm rounded-xl bg-white">
                <CardContent className="p-6">
                  <Icon className={`h-7 w-7 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-800 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
