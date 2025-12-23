// app/manage-projects/page.tsx
import React from "react";

export default function ManageProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-12">
      {/* HERO */}
      <section className="pt-4 text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Transform Your Media into Stunning 3D Models
        </h1>

        <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
          Upload images or videos and watch as advanced Gaussian splatting
          technology creates photorealistic 3D models with customizable color
          variations and styles.
        </p>

        <button
          type="button"
          className="mt-2 inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-medium
                     bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Start Creating
        </button>
      </section>

      {/* YOUR PROJECTS + QUICK UPLOAD (drugi screen) */}
      <section className="space-y-6">
        {/* Nagłówek + New Project */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">
            Your Projects
          </h2>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-xs font-medium
                       bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <span className="text-base leading-none">＋</span>
            <span>New Project</span>
          </button>
        </div>

        {/* Karta QUICK UPLOAD */}
        <div className="rounded-2xl border border-border bg-card/70 p-6 md:p-8 shadow-sm">
          <div className="mb-6 space-y-1 text-center">
            <h3 className="text-lg font-semibold tracking-tight">
              Quick Upload
            </h3>
            <p className="text-xs text-muted-foreground">
              Start a new project by uploading your media files.
            </p>
          </div>

          <form className="space-y-5">
            {/* Project Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">
                Project Name
              </label>
              <input
                type="text"
                placeholder="Enter project name"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm
                           outline-none focus:border-ring focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Upload */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">
                Upload Images or Video
              </label>
              <label
                className="flex h-20 cursor-pointer items-center justify-center rounded-md border border-dashed
                           border-border bg-background/60 px-3 text-xs text-muted-foreground
                           hover:border-primary hover:text-foreground"
              >
                Click to upload a file
                <input type="file" className="hidden" />
              </label>
            </div>

            {/* Color Variation + Model Style */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">
                  Color Variation
                </label>
                <select
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm
                             outline-none focus:border-ring focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select color variation</option>
                  <option value="default">Default</option>
                  <option value="warm">Warm</option>
                  <option value="cool">Cool</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">
                  Model Style
                </label>
                <select
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm
                             outline-none focus:border-ring focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select model style</option>
                  <option value="realistic">Photorealistic</option>
                  <option value="stylized">Stylized</option>
                </select>
              </div>
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium
                         text-primary-foreground hover:bg-primary/90"
            >
              Generate 3D Model
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
