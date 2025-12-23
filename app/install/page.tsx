"use client";

import { QRCode } from "@/components/qr-code";
import { useEffect, useState } from "react";
import { Smartphone, Monitor, CheckCircle2 } from "lucide-react";

export default function InstallPage() {
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Get current URL
    setCurrentUrl(window.location.origin);

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Listen for install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
    }

    setDeferredPrompt(null);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Zainstaluj Photo2Splat
        </h1>
        <p className="text-lg text-muted-foreground">
          Zainstaluj aplikację na swoim urządzeniu i korzystaj z niej jak z
          natywnej aplikacji mobilnej
        </p>
      </div>

      {isInstalled ? (
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8 text-center mb-8">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-500 mb-2">
            Aplikacja zainstalowana!
          </h2>
          <p className="text-muted-foreground">
            Photo2Splat jest już zainstalowana na Twoim urządzeniu.
          </p>
        </div>
      ) : (
        <>
          {/* QR Code Section */}
          <div className="bg-card border rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Smartphone className="w-6 h-6" />
                  Skanuj QR kodem
                </h2>
                <p className="text-muted-foreground mb-4">
                  Zeskanuj ten kod QR swoim telefonem, aby otworzyć aplikację i
                  zainstalować ją na swoim urządzeniu mobilnym.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Otwórz aparat lub aplikację do skanowania QR kodów</li>
                  <li>Zeskanuj kod QR po prawej stronie</li>
                  <li>Otwórz link w przeglądarce (Chrome/Safari)</li>
                  <li>Kliknij &quot;Dodaj do ekranu głównego&quot;</li>
                </ol>
              </div>
              <div className="flex-shrink-0">
                {currentUrl && <QRCode url={currentUrl} size={256} />}
              </div>
            </div>
          </div>

          {/* Desktop Install Section */}
          <div className="bg-card border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Monitor className="w-6 h-6" />
              Instalacja na komputerze
            </h2>
            <p className="text-muted-foreground mb-4">
              Jeśli przeglądasz tę stronę na komputerze, możesz zainstalować
              aplikację bezpośrednio.
            </p>

            {deferredPrompt ? (
              <button
                onClick={handleInstallClick}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Zainstaluj aplikację
              </button>
            ) : (
              <div className="text-sm text-muted-foreground">
                <p>
                  Aby zainstalować aplikację na komputerze, użyj opcji
                  &quot;Zainstaluj&quot; w menu przeglądarki (ikona + w pasku
                  adresu).
                </p>
              </div>
            )}
          </div>
        </>
      )}

      {/* Instructions by Platform */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Android */}
        <div className="bg-card border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-green-500">
            📱 Android (Chrome)
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li>Otwórz stronę w Chrome</li>
            <li>Kliknij menu (⋮) w prawym górnym rogu</li>
            <li>Wybierz &quot;Dodaj do ekranu głównego&quot;</li>
            <li>Potwierdź instalację</li>
          </ol>
        </div>

        {/* iOS */}
        <div className="bg-card border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-blue-500">
            📱 iOS (Safari)
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li>Otwórz stronę w Safari</li>
            <li>Kliknij przycisk &quot;Udostępnij&quot; (□↑)</li>
            <li>Przewiń w dół i wybierz &quot;Dodaj do ekranu początkowego&quot;</li>
            <li>Potwierdź nazwę i kliknij &quot;Dodaj&quot;</li>
          </ol>
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Dlaczego warto zainstalować?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="font-semibold mb-2">Szybszy dostęp</h3>
            <p className="text-sm text-muted-foreground">
              Uruchamiaj aplikację bezpośrednio z ekranu głównego
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">📴</div>
            <h3 className="font-semibold mb-2">Tryb offline</h3>
            <p className="text-sm text-muted-foreground">
              Przeglądaj zapisane projekty bez połączenia z internetem
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🎨</div>
            <h3 className="font-semibold mb-2">Pełny ekran</h3>
            <p className="text-sm text-muted-foreground">
              Korzystaj z aplikacji w trybie pełnoekranowym
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
