"use client";

import { useState, useRef, useEffect } from "react";
import { Upload, Download } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function ImageResizer() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [originalWidth, setOriginalWidth] = useState(0);
  const [originalHeight, setOriginalHeight] = useState(0);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [lockAspect, setLockAspect] = useState(true);
  const [error, setError] = useState("");
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

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file.");
      return;
    }
    setError("");
    setFileName(file.name.replace(/\.[^.]+$/, ""));
    const reader = new FileReader();
    reader.onload = () => setImageUrl(reader.result as string);
    reader.readAsDataURL(file);
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
      <div className="flex flex-col gap-1.5">
        <label htmlFor="resize-file" className="text-sm font-medium text-slate-700">
          Upload an image
        </label>
        <input
          ref={fileInputRef}
          id="resize-file"
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      {imageUrl && (
        <div className="flex flex-col gap-4">
          <div className="flex justify-center rounded-xl border border-slate-200 bg-slate-50 p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl} alt="Preview" className="max-h-64 rounded-lg object-contain" />
          </div>
          <p className="text-center text-sm text-slate-500">
            Original: {originalWidth} × {originalHeight}px
          </p>

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

          <div className="flex gap-3">
            <Button onClick={download}>
              <Download className="mr-1.5 h-4 w-4" aria-hidden="true" />
              Download resized image
            </Button>
            <Button variant="secondary" onClick={reset}>
              Clear
            </Button>
          </div>
        </div>
      )}

      {!imageUrl && (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-400">
          <Upload className="h-8 w-8" aria-hidden="true" />
          <p className="text-sm">Choose an image above to resize it</p>
        </div>
      )}
    </div>
  );
}
