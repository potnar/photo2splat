// components/footer.tsx
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-4 py-3 text-xs text-muted-foreground">
        © {year} photo2splat – prototype
      </div>
    </footer>
  );
}
