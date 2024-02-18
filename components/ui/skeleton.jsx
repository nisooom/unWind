import { cn } from "@/lib/utils";

function Skeleton({ className, circle, ...props }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-util bg-opacity-25",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
