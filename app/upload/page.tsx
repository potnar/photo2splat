export default function UploadPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* GŁÓWNY HERO: lewa kolumna – opis + upload, prawa – panel pod viewer */}
      <section className="grid items-start gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        {/* LEWA STRONA */}
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary">
            prototype · gaussian splatting
          </p>

          <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
            Turn real-world photos into interactive
            <span className="text-primary"> 3D splats</span> – in your browser.
          </h1>

          <p className="max-w-prose text-sm text-muted-foreground">
            Drag &amp; drop a few photos or a short video of your object. For
            now we&apos;ll just create a “job” entry. Next step: connect a
            backend pipeline (HunyuanWorld, Gaussian Splatting, etc.) and show
            the result in a live viewer.
          </p>

          {/* Dropzone / upload box – na razie tylko UI */}
          <div className="space-y-3">
            <div className="rounded-xl border border-dashed border-border bg-background/40 p-5">
              <p className="mb-1 text-sm font-medium">Upload photos or video</p>
              <p className="mb-4 text-xs text-muted-foreground">
                Drop up to ~40 images or a short MP4. This is just a prototype
                UI – backend comes later.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90">
                  Choose files
                </button>
                <button className="rounded-lg border border-secondary/60 px-3 py-2 text-xs font-medium text-secondary hover:bg-secondary/10">
                  Paste video link
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>
                Next step: send these files to the HunyuanWorld / Gaussian
                Splatting pipeline.
              </span>
            </div>
          </div>
        </div>

        {/* PRAWA STRONA – panel pod viewer */}
        <aside className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-xs text-muted-foreground">Current preview</p>
              <p className="text-sm font-medium">Sample Gaussian splat</p>
            </div>
            <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
              viewer stub
            </span>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-black/60">
            <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
              {/* Tu później wkleimy GaussianSplatDemo */}
              Viewer coming soon
            </div>
          </div>

          <div className="space-y-1 text-xs text-muted-foreground">
            <p>
              Later this panel will show the live 3D result of your last
              processed upload.
            </p>
          </div>
        </aside>
      </section>

      {/* LISTA "JOBS" – na razie mock */}
      <section className="mt-10 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium">Recent jobs</h2>
          <span className="text-[11px] text-muted-foreground">
            mock data · backend later
          </span>
        </div>

        <div className="divide-y divide-border rounded-xl border border-border bg-background/60">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="flex items-center gap-4 px-4 py-3 text-xs"
            >
              <div className="h-7 w-7 rounded-md bg-primary/20" />
              <div className="flex-1">
                <p className="font-medium">Bottle scan #{id}</p>
                <p className="text-muted-foreground">
                  24 photos · status:{" "}
                  <span className="text-secondary">queued</span>
                </p>
              </div>
              <button className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground hover:bg-border/30">
                Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
