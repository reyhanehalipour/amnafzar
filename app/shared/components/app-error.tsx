import { AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

interface AppErrorProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function AppError({
  title = "Oops! Something went wrong",
  description = "We couldn't load the requested data. Please try again.",
  actionLabel = "Try Again",
  onAction,
}: AppErrorProps) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed bg-muted/20 px-6 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
        <AlertCircle className="h-8 w-8 text-destructive" />
      </div>

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {description}
      </p>

      {onAction && (
        <Button
          className="mt-6"
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}