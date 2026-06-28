import { cn } from "@/lib/utils";

interface AppSkeletonProps {
  className?: string;
}

export function AppSkeleton({
  className,
}: AppSkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted",
        className
      )}
    />
  );
}