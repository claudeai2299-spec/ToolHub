"use client";

import { useState, useMemo } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

type Category = "length" | "weight" | "temperature";

// Base unit per category; all conversions go through the base.
const UNITS: Record<Category, Record<string, { label: string; toBase: number }>> = {
  length: {
    m: { label: "Meters (m)", toBase: 1 },
    km: { label: "Kilometers (km)", toBase: 1000 },
    cm: { label: "Centimeters (cm)", toBase: 0.01 },
    mm: { label: "Millimeters (mm)", toBase: 0.001 },
    mi: { label: "Miles (mi)", toBase: 1609.344 },
    yd: { label: "Yards (yd)", toBase: 0.9144 },
    ft: { label: "Feet (ft)", toBase: 0.3048 },
    in: { label: "Inches (in)", toBase: 0.0254 },
  },
  weight: {
    kg: { label: "Kilograms (kg)", toBase: 1 },
    g: { label: "Grams (g)", toBase: 0.001 },
    mg: { label: "Milligrams (mg)", toBase: 0.000001 },
    lb: { label: "Pounds (lb)", toBase: 0.45359237 },
    oz: { label: "Ounces (oz)", toBase: 0.028349523125 },
  },
  temperature: {
    c: { label: "Celsius (°C)", toBase: 1 },
    f: { label: "Fahrenheit (°F)", toBase: 1 },
    k: { label: "Kelvin (K)", toBase: 1 },
  },
};

function convertTemperature(value: number, from: string, to: string): number {
  // Normalize to Celsius first, then convert to the target.
  let celsius: number;
  if (from === "c") celsius = value;
  else if (from === "f") celsius = ((value - 32) * 5) / 9;
  else celsius = value - 273.15; // Kelvin

  if (to === "c") return celsius;
  if (to === "f") return (celsius * 9) / 5 + 32;
  return celsius + 273.15; // Kelvin
}

const categories: { id: Category; label: string }[] = [
  { id: "length", label: "Length" },
  { id: "weight", label: "Weight" },
  { id: "temperature", label: "Temperature" },
];

export default function UnitConverter() {
  const [category, setCategory] = useState<Category>("length");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("ft");
  const [value, setValue] = useState("1");

  const units = UNITS[category];

  const result = useMemo(() => {
    const num = parseFloat(value);
    if (value.trim() === "" || isNaN(num)) return null;

    if (category === "temperature") {
      return convertTemperature(num, fromUnit, toUnit);
    }

    const fromDef = units[fromUnit];
    const toDef = units[toUnit];
    if (!fromDef || !toDef) return null;

    const baseValue = num * fromDef.toBase;
    return baseValue / toDef.toBase;
  }, [value, fromUnit, toUnit, category, units]);

  const handleCategoryChange = (newCategory: Category) => {
    setCategory(newCategory);
    const unitKeys = Object.keys(UNITS[newCategory]);
    setFromUnit(unitKeys[0]);
    setToUnit(unitKeys[1] ?? unitKeys[0]);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Unit category">
        {categories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={category === cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              category === cat.id
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <Input
        label="Value"
        type="number"
        inputMode="decimal"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a value"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Select label="From" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          {Object.entries(units).map(([key, def]) => (
            <option key={key} value={key}>
              {def.label}
            </option>
          ))}
        </Select>
        <Select label="To" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          {Object.entries(units).map(([key, def]) => (
            <option key={key} value={key}>
              {def.label}
            </option>
          ))}
        </Select>
      </div>

      {result !== null && (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-500">Result</p>
          <p className="text-2xl font-bold text-slate-900">
            {parseFloat(result.toFixed(6))} {units[toUnit]?.label.split(" (")[0]}
          </p>
        </div>
      )}
    </div>
  );
}
