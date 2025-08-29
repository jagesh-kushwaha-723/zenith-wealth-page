import { TrendingUp, PieChart } from "lucide-react";
import Navigation from "@/components/Navigation";
import PortalCard from "@/components/PortalCard";

const Index = () => {
  const handlePlanningPortal = () => {
    console.log("Opening Planning Portal");
    // Navigate to planning portal
  };

  const handleProcurementPortal = () => {
    console.log("Opening Procurement Portal");
    // Navigate to procurement portal
  };

  return (
    <div className="min-h-screen hero-gradient">
      <Navigation />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            {/* Welcome Text */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-foreground">Welcome to</span>
                <br />
                <span className="text-gradient">Finance Workspace Hub</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Choose your portal to continue and unlock professional financial management tools
              </p>
            </div>
          </div>
        </section>

        {/* Portal Cards Section */}
        <section className="container mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Planning Portal */}
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <PortalCard
                title="Planning Portal"
                description="Access project planning tools, resource allocation, and timeline management for comprehensive financial oversight"
                buttonText="Enter Planning Portal"
                icon={TrendingUp}
                onClick={handlePlanningPortal}
              />
            </div>

            {/* Procurement Portal */}
            <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <PortalCard
                title="Procurement Portal"
                description="Manage vendors, contracts, purchasing processes, and supplier relationships with advanced analytics"
                buttonText="Enter Procurement Portal"
                icon={PieChart}
                onClick={handleProcurementPortal}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center border-t border-border/50">
        <p className="text-muted-foreground text-sm">
          © 2025 Finance Hub. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;