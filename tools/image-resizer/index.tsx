"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Upload, Download, ImageIcon } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const PRESETS = [
  { label: "50%", scale: 0.5 },
  { label: "25%", scale: 0.25 },
  { label: "Instagram (1080×1080)", width: 1080, height: 1080 },
  { label: "HD (1920×1080)", width: 1920, height: 1080 },
];

export default function ImageResizer() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [originalWidth, setOriginalWidth] = useState(0);
  const [originalHeight, setOriginalHeight] = useState(0);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [lockAspect, setLockAspect] = useState(true);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!imageUrl) return;
    const img = new Image();
    img.onload = () => {
      setOriginalWidth(img.width);
      setOriginalHeight(img.height);
      setWidth(`${img.width}`);
      setHeight(`${img.height}`);
    };
    img.src = imageUrl;
  }, [imageUrl]);

  const processFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file.");
      return;
    }
    setError("");
    setFileName(file.name.replace(/\.[^.]+$/, ""));
    const reader = new FileReader();
    reader.onload = () => setImageUrl(reader.result as string);
    reader.readAsDataURL(file);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const applyPreset = (preset: (typeof PRESETS)[number]) => {
    if ("scale" in preset && originalWidth && originalHeight) {
      setWidth(`${Math.round(originalWidth * preset.scale)}`);
      setHeight(`${Math.round(originalHeight * preset.scale)}`);
    } else if ("width" in preset && "height" in preset) {
      setWidth(`${preset.width}`);
      setHeight(`${preset.height}`);
    }
  };

  const handleWidthChange = (value: string) => {
    setWidth(value);
    if (lockAspect && originalWidth && originalHeight) {
      const num = parseFloat(value);
      if (!isNaN(num) && num > 0) {
        setHeight(`${Math.round((num * originalHeight) / originalWidth)}`);
      }
    }
  };

  const handleHeightChange = (value: string) => {
    setHeight(value);
    if (lockAspect && originalWidth && originalHeight) {
      const num = parseFloat(value);
      if (!isNaN(num) && num > 0) {
        setWidth(`${Math.round((num * originalWidth) / originalHeight)}`);
      }
    }
  };

  const download = () => {
    if (!imageUrl) return;
    const w = parseInt(width, 10);
    const h = parseInt(height, 10);
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      setError("Enter valid width and height.");
      return;
    }
    setError("");

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, w, h);

      const link = document.createElement("a");
      link.download = `${fileName || "image"}-resized.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    img.src = imageUrl;
  };

  const reset = () => {
    setImageUrl(null);
    setFileName("");
    setWidth("");
    setHeight("");
    setError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="flex flex-col gap-5">
      {!imageUrl ? (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
          className={`flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed p-10 text-center transition-colors ${
            isDragging ? "border-blue-400 bg-blue-50" : "border-slate-300 hover:border-slate-400"
          }`}
        >
          <Upload className="h-8 w-8 text-slate-400" aria-hidden="true" />
          <p className="text-sm font-medium text-slate-600">
            Click to choose an image, or drag and drop it here
          </p>
          <p className="text-xs text-slate-400">PNG, JPG, WEBP supported</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex justify-center rounded-xl border border-slate-200 bg-slate-50 p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl} alt="Preview" className="max-h-64 rounded-lg object-contain" />
          </div>
          <p className="text-center text-sm text-slate-500">
            Original: {originalWidth} × {originalHeight}px
          </p>

          <div className="flex flex-wrap gap-2">
            {PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => applyPreset(preset)}
                className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-200"
              >
                {preset.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              label="Width (px)"
              type="number"
              inputMode="numeric"
              value={width}
              onChange={(e) => handleWidthChange(e.target.value)}
            />
            <Input
              label="Height (px)"
              type="number"
              inputMode="numeric"
              value={height}
              onChange={(e) => handleHeightChange(e.target.value)}
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={lockAspect}
              onChange={(e) => setLockAspect(e.target.checked)}
              className="h-4 w-4 accent-blue-600"
            />
            Lock aspect ratio
          </label>

          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}

          <div className="flex gap-3">
            <Button onClick={download}>
              <Download className="mr-1.5 h-4 w-4" aria-hidden="true" />
              Download resized image
            </Button>
            <Button variant="secondary" onClick={reset}>
              Choose different image
            </Button>
          </div>
        </div>
      )}

      {!imageUrl && error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
