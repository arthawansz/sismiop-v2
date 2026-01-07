// src/app/components/MenuCard.jsx
import { FaArrowRight } from "react-icons/fa6";

function MenuCard({ title, icon, color, large, className = "" }) {
  const bgColors = {
    pink: "bg-pink-50",
    purple: "bg-purple-50",
    blue: "bg-blue-50",
    orange: "bg-orange-50",
    teal: "bg-teal-50",
    indigo: "bg-indigo-50",
  };

  const textColors = {
    pink: "text-pink-600",
    purple: "text-purple-600",
    blue: "text-blue-600",
    orange: "text-orange-600",
    teal: "text-teal-600",
    indigo: "text-indigo-600",
  };

  const borderColors = {
    pink: "border-pink-200",
    purple: "border-purple-200",
    blue: "border-blue-200",
    orange: "border-orange-200",
    teal: "border-teal-200",
    indigo: "border-indigo-200",
  };

  return (
    <div
      className={`
        relative cursor-pointer rounded-xl border p-4
        transition hover:shadow-md
        ${bgColors[color]}
        ${borderColors[color]}
        ${className}
      `}
    >
      <div className="flex items-center justify-between">
        <div
          className={`rounded-lg bg-white p-2 text-lg shadow-sm ${textColors[color]}`}
        >
          {icon}
        </div>
        <FaArrowRight className="text-sm opacity-60" />
      </div>

      <p className="mt-4 text-sm font-medium text-[#1C1F26]">
        {title}
      </p>
    </div>
  );
}

export default MenuCard;
