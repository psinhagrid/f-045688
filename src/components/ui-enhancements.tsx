import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/**
 * Enhanced container with subtle background and clean shadow
 */
export function EnhancedContainer({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg bg-background/70 backdrop-blur-sm border border-border/50 shadow-[0_2px_10px_rgba(0,0,0,0.04)] p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Small icon
 */
export function SmallIcon({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center h-7 w-7 rounded-md bg-muted/50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Subtle badge
 */
export function SubtleBadge({
  className,
  variant = "default",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "success" | "warning" | "error" | "info";
}) {
  const variantClassMap = {
    default: "bg-muted/50 text-muted-foreground",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };

  return (
    <div
      className={cn(
        "inline-flex px-2 py-0.5 text-xs font-medium rounded-md",
        variantClassMap[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Page header with title and optional description
 */
export function PageHeader({
  className,
  title,
  description,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: string;
}) {
  return (
    <div className={cn("mb-6 flex flex-col space-y-2", className)} {...props}>
      <h1 className="text-2xl font-medium tracking-tight">{title}</h1>
      {description && (
        <p className="text-muted-foreground text-sm">{description}</p>
      )}
      {children}
    </div>
  );
}

/**
 * Compact button group
 */
export function CompactButtonGroup({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex rounded-md border overflow-hidden [&>button]:rounded-none [&>button]:border-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Enhanced data display
 */
export function DataCard({
  className,
  label,
  value,
  trend,
  icon,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  value: string | number;
  trend?: { value: number; label: string };
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-lg bg-background/70 backdrop-blur-sm border border-border/50 shadow-[0_2px_10px_rgba(0,0,0,0.04)] p-4 flex flex-col gap-2",
        className
      )}
      {...props}
    >
      <div className="flex justify-between items-start">
        <p className="text-sm text-muted-foreground">{label}</p>
        {icon && (
          <div className="h-7 w-7 rounded-md flex items-center justify-center bg-primary/10 text-primary">
            {icon}
          </div>
        )}
      </div>
      <div className="mt-1">
        <div className="text-2xl font-medium">{value}</div>
        {trend && (
          <div
            className={cn(
              "text-xs flex items-center gap-1 mt-1",
              trend.value > 0 ? "text-green-600" : "text-red-600"
            )}
          >
            <span>
              {trend.value > 0 ? "↑" : "↓"} {Math.abs(trend.value)}%
            </span>
            <span className="text-muted-foreground">{trend.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}
