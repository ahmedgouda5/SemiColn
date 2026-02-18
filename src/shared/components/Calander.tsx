"use client"

import * as React from "react"
import { Calendar as CalendarUI } from "@/components/ui/calendar"
export function Calendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <CalendarUI
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
      captionLayout="dropdown"
    />
  )
}
