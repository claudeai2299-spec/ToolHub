"use client";

import { useState, useRef } from "react";
import { Upload, Download } from "lucide-react";
import Button from "@/components/ui/Button";

export default function JpgPngConverter() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
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

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const convertAndDownload = (format: "png" | "jpeg") => {
    if (!imageUrl) return;

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // JPEG has no transparency, so fill a white background first.
      if (format === "jpeg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.drawImage(img, 0, 0);

      const mime = format === "png" ? "image/png" : "image/jpeg";
      const dataUrl = canvas.toDataURL(mime, 0.92);

      const link = document.createElement("a");
      link.download = `${fileName || "image"}.${format === "jpeg" ? "jpg" : "png"}`;
      link.href = dataUrl;
      link.click();
    };
    img.src = imageUrl;
  };

  const reset = () => {
    setImageUrl(null);
    setFileName("");
    setError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="image-file" className="text-sm font-medium text-slate-700">
          Upload an image
        </label>
        <input
          ref={fileInputRef}
          id="image-file"
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

          <div className="flex flex-wrap gap-3">
            <Button onClick={() => convertAndDownload("png")}>
              <Download className="mr-1.5 h-4 w-4" aria-hidden="true" />
              Download as PNG
            </Button>
            <Button onClick={() => convertAndDownload("jpeg")}>
              <Download className="mr-1.5 h-4 w-4" aria-hidden="true" />
              Download as JPG
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
          <p className="text-sm">Choose an image above to convert it</p>
        </div>
      )}
    </div>
  );
}
