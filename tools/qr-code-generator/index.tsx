"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import Button from "@/components/ui/Button";

export default function QrCodeGenerator() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(200);

  const downloadQr = () => {
    const svg = document.getElementById("qr-code-svg");
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const img = new Image();

    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      if (ctx) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, size, size);
        ctx.drawImage(img, 0, 0, size, size);
      }
      URL.revokeObjectURL(url);

      const link = document.createElement("a");
      link.download = "qr-code.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    img.src = url;
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="qr-text" className="text-sm font-medium text-slate-700">
          Text or URL
        </label>
        <textarea
          id="qr-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a URL, text, or any content..."
          rows={3}
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-base text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="qr-size" className="text-sm font-medium text-slate-700">
          Size: {size}px
        </label>
        <input
          id="qr-size"
          type="range"
          min={128}
          max={512}
          step={32}
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="w-full accent-blue-600"
        />
      </div>

      {text.trim() ? (
        <div className="flex flex-col items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <QRCodeSVG
            id="qr-code-svg"
            value={text}
            size={size}
            bgColor="#ffffff"
            fgColor="#0f172a"
            level="M"
            marginSize={2}
          />
          <Button onClick={downloadQr}>Download PNG</Button>
        </div>
      ) : (
        <p className="text-center text-sm text-slate-400">
          Enter text above to generate a QR code
        </p>
      )}
    </div>
  );
}
