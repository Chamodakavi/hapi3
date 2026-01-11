import { Volume2 } from "lucide-react";
import React from "react";

interface cardProps {
  id: number;
  bgColor: string;
  title: string;
  description: string;
}

function PromoCard({ id, bgColor, title, description }: cardProps) {
  return (
    <div
      key={id}
      className={`${bgColor} border-2 border-[#0B1C33] p-6 flex flex-col items-center text-center shadow-sm h-full`}
    >
      {/* Icon */}
      <div className="mb-4">
        <Volume2 className="w-10 h-10 text-[#0B1C33]" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-[#0B1C33] mb-3">{title}</h3>

      {/* Description */}
      <p className="text-[#0B1C33]/80 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default PromoCard;
