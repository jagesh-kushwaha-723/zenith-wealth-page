import { Handshake, Thermometer } from "lucide-react";
import Navigation from "@/components/Navigation";
import PortalCard from "@/components/PortalCard";

const Index = () => {
  const handleDistributionPortal = () => {
    console.log("Opening Distribution Management");
    // Navigate to distribution management
  };

  const handleWarehousePortal = () => {
    console.log("Opening Warehouse Temperature Monitoring");
    // Navigate to warehouse temperature monitoring
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
                <span className="text-gradient">SCM Solutions Hub</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Choose your portal to continue and unlock professional supply chain management tools
              </p>
            </div>
          </div>
        </section>

        {/* Portal Cards Section */}
        <section className="container mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Distribution Management */}
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <PortalCard
                title="Distribution Management"
                description="Access project planning tools, resource allocation, and timeline management for comprehensive financial oversight"
                buttonText="Enter Distribution Management"
                icon={Handshake}
                onClick={handleDistributionPortal}
              />
            </div>

            {/* Warehouse Temperature Monitoring */}
            <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <PortalCard
                title="Warehouse Temperature Monitoring"
                description="Monitor and manage warehouse temperature controls, environmental conditions, and equipment status with real-time analytics"
                buttonText="Enter Temperature Monitoring"
                icon={Thermometer}
                onClick={handleWarehousePortal}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center border-t border-border/50">
        <p className="text-muted-foreground text-sm">
          © 2025 SCM Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;