type AdPlacement = "sidebar" | "below-tool" | "between-sections";

interface AdSlotProps {
  placement: AdPlacement;
  className?: string;
}

const dimensions: Record<AdPlacement, string> = {
  sidebar: "min-h-[250px]",
  "below-tool": "min-h-[90px]",
  "between-sections": "min-h-[120px]",
};

export default function AdSlot({ placement, className = "" }: AdSlotProps) {
  return (
    <div
      aria-hidden="true"
      data-ad-placement={placement}
      className={`flex items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50 text-xs text-slate-300 ${dimensions[placement]} ${className}`}
    >
      Ad space
    </div>
  );
}
