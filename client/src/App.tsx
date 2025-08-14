import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { CookieBanner } from "@/components/cookie-banner";
import { HomePage } from "@/pages/home";
import NotFound from "@/pages/not-found";

/**
 * Router Component
 * Handles client-side routing for the portfolio application
 * Currently implements a single-page application structure
 */
function Router() {
  return (
    <Switch>
      {/* Home page - main portfolio page */}
      <Route path="/" component={HomePage} />

      {/* Fallback to 404 page for unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Main App Component
 * Root component that provides all necessary context providers
 * and sets up the application structure
 *
 * Providers included:
 * - QueryClientProvider: For server state management with TanStack Query
 * - ThemeProvider: For dark/light theme management
 * - TooltipProvider: For tooltip functionality from shadcn/ui
 * - Toaster: For toast notifications
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
          <CookieBanner />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
