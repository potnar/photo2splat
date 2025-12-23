// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
    

      {/* GŁÓWNY CONTENT */}
      <main className="flex-1">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 md:flex-row md:items-center md:justify-between">
          {/* LEWA KOLUMNA – tekst jak w Bubble */}
          <section className="max-w-xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              From photos to 3D splats
            </p>

            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Turn real-world photos into an interactive 3D splat preview.
            </h1>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Upload a few images of your object and get a{" "}
              <span className="font-medium text-foreground">
                3D Gaussian splat preview
              </span>{" "}
              in the browser. Perfect for quick product visualization, demos or
              experiments with new 3D workflows.
            </p>

            {/* Kroki jak w Bubble (3-step flow) */}
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                  1
                </span>
                <div>
                  <p className="font-medium">Upload your photos</p>
                  <p className="text-xs text-muted-foreground">
                    Add a small set of images of your object from different
                    angles.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                  2
                </span>
                <div>
                  <p className="font-medium">Process with our pipeline</p>
                  <p className="text-xs text-muted-foreground">
                    Behind the scenes we prepare data for a Gaussian splatting
                    renderer.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                  3
                </span>
                <div>
                  <p className="font-medium">Preview in 3D</p>
                  <p className="text-xs text-muted-foreground">
                    Orbit, zoom and inspect your object directly in the
                    browser.
                  </p>
                </div>
              </li>
            </ol>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/upload"
                className="inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-medium
                           bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Start with your photos
              </Link>

              <p className="text-xs text-muted-foreground">
                No account needed. Start with a simple test upload.
              </p>
            </div>
          </section>

          {/* PRAWA KOLUMNA – placeholder pod screena / mock preview */}
          <section className="w-full max-w-md rounded-xl border border-border bg-card/70 p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground">
                Preview
              </p>
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            </div>

            <div className="aspect-video rounded-lg border border-border bg-gradient-to-br from-primary/10 via-background to-accent/10" />

            <p className="mt-3 text-xs text-muted-foreground">
              After upload you&apos;ll see a 3D viewer here with your object
              rendered as a Gaussian splat.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
