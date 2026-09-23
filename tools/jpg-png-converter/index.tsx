"use client";

import { useState, useRef, useCallback } from "react";
import { Upload, Download } from "lucide-react";
import Button from "@/components/ui/Button";

export default function JpgPngConverter() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const convertAndDownload = (format: "png" | "jpeg") => {
    if (!imageUrl) return;

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

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
          <p className="text-xs text-slate-400">Converts between JPG and PNG</p>
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
              Choose different image
            </Button>
          </div>
        </div>
      )}

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
