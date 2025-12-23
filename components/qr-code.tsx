"use client";

import { useEffect, useState } from "react";

interface QRCodeProps {
  url: string;
  size?: number;
}

export function QRCode({ url, size = 256 }: QRCodeProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  useEffect(() => {
    // Using QR Server API to generate QR code
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
      url
    )}`;
    setQrCodeUrl(qrUrl);
  }, [url, size]);

  if (!qrCodeUrl) {
    return (
      <div
        className="flex items-center justify-center bg-muted animate-pulse rounded-lg"
        style={{ width: size, height: size }}
      >
        <span className="text-muted-foreground">Loading...</span>
      </div>
    );
  }

  return (
    <div className="inline-block p-4 bg-white rounded-lg shadow-lg">
      <img
        src={qrCodeUrl}
        alt={`QR Code for ${url}`}
        width={size}
        height={size}
        className="rounded"
      />
    </div>
  );
}
