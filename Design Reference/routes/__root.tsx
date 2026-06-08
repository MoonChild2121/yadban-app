import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logoUrl from "../assets/yaadbaan-logo.png";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "YAADBAAN — Caregiver Support for Dementia" },
      { name: "description", content: "Empathetic, vetted, and localized guidance for Pakistani families managing dementia." },
      { name: "author", content: "YAADBAAN" },
      { property: "og:title", content: "YAADBAAN — Caregiver Support for Dementia" },
      { property: "og:description", content: "Empathetic, vetted, and localized guidance for Pakistani families managing dementia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@YAADBAAN" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center transition-transform hover:scale-[1.02]"
          aria-label="YAADBAAN home"
        >
          <img src={logoUrl} alt="YAADBAAN" width={220} height={64} className="h-12 w-auto" />
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link to="/about" className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground">About</Link>
          <Link to="/crisis-protocol" className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground">Crisis</Link>
          <Link to="/daily-care-guide" className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground">Care Guide</Link>
          <Link to="/communication-tips" className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground">Communication</Link>
          <Link to="/home-safety-audit" className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground">Safety</Link>
          <Link to="/support-circles" className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground">Community</Link>
        </nav>
      </div>
    </header>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

function Footer() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-primary-foreground/70">
            &copy; {new Date().getFullYear()} YAADBAAN. In partnership with Alzheimer's Pakistan.
          </p>
          <div className="flex gap-4">
            <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">About</Link>
            <Link to="/support-circles" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">Community</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
