import * as Icons from "lucide-react";
import { createElement } from "react";

export function resolveIcon(name: string, className = "h-5 w-5") {
  const IconComponent =
    (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Wrench;
  return createElement(IconComponent, { className, "aria-hidden": true });
}
