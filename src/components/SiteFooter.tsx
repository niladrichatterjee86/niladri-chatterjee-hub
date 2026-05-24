export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="container-edge flex flex-col md:flex-row items-start md:items-center justify-between gap-2 py-4">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">
            Niladri Chatterjee — © {new Date().getFullYear()}
          </span>
        </div>
        <p className="eyebrow">Built with intent · Singapore / Global</p>
      </div>
    </footer>
  );
}
