"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundLines = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="bg-background h-full w-full">
        <div className="absolute h-full w-full z-10 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" />
        <div className="absolute inset-0 bg-background z-20 [mask-image:radial-gradient(100%_100%_at_top_center,transparent,white)]" />
        <div className="absolute inset-0 z-0">
          {/* Matrix-like binary pattern */}
          <div className="absolute inset-0 opacity-[0.03] filter blur-[1px] bg-[repeating-linear-gradient(0deg,#000000_0px,#000000_1px,transparent_1px,transparent_30px),repeating-linear-gradient(90deg,#000000_0px,#000000_1px,transparent_1px,transparent_30px)] [background-size:30px_30px]" />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-primary/5 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
          </div>
        </div>
        {/* Floating particles effect */}
        <div className="absolute inset-0 z-30">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.15),transparent_50%)]" />
        </div>
        {/* Data flow lines */}
        <div className="absolute inset-0 z-20 overflow-hidden">
          <div className="absolute h-[150%] w-[150%] opacity-50 animate-spin-slow">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rotate-[36deg]"
                style={{ transform: `rotate(${i * 36}deg)` }}
              >
                <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent" style={{ marginLeft: `${i * 10}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

