import * as React from "react";
import { cn } from "@/lib/utils";

export function H1({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-medium tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-medium tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-medium tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-medium tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

export function P({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("leading-7", className)} {...props}>
      {children}
    </p>
  );
}

export function Small({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}

export function Tiny({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-xs text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}

export function Lead({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}

export function Blockquote({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    >
      {children}
    </blockquote>
  );
}

export function Code({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}

export function List({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props}>
      {children}
    </ul>
  );
}

export function InlineLink({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "font-medium text-primary underline underline-offset-4 hover:text-primary/80",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
