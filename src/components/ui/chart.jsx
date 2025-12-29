import * as React from "react"
import { cn } from "@/lib/utils"

const ChartContainer = React.forwardRef(({ id, className, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex aspect-video justify-center text-xs", className)} {...props}>
    {children}
  </div>
))
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border border-neutral-200 bg-white p-2 shadow-md", className)} {...props} />
))
ChartTooltip.displayName = "ChartTooltip"

const ChartTooltipContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-neutral-950", className)} {...props} />
))
ChartTooltipContent.displayName = "ChartTooltipContent"

const ChartLegend = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex gap-2 text-neutral-950", className)} {...props} />
))
ChartLegend.displayName = "ChartLegend"

const ChartStyle = ({ id, config }) => {
  const colors = Object.entries(config).map(([key, value]) => `--color-${key}:${value.color}`).join(";");
  return (
    <style dangerouslySetInnerHTML={{ __html: `:root { ${colors} }` }} />
  )
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartStyle }
