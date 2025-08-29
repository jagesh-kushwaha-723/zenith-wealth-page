import { ArrowRight, LucideIcon } from "lucide-react";
interface PortalCardProps {
  title: string;
  description: string;
  buttonText: string;
  icon: LucideIcon;
  onClick?: () => void;
}
const PortalCard = ({
  title,
  description,
  buttonText,
  icon: Icon,
  onClick
}: PortalCardProps) => {
  return <div className="portal-card rounded-xl p-8 max-w-md mx-auto group animate-fade-in">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="icon-container p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-8 w-8 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="text-center space-y-4">
        <h3 className="text-xl font-bold text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Button */}
      <div className="mt-8 flex justify-center">
        <button onClick={onClick} className="btn-finance px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 group-hover:scale-105 transition-all duration-300 text-slate-200 bg-gray-200 hover:bg-gray-100">
          <span>{buttonText}</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>;
};
export default PortalCard;