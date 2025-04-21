'use client';
// dashboard page defaults to calendar
import Home from "./calendar/page";
// Authenticated pages
// are protected by the middleware
export default function Dashboard() {
  return <Home />;
}
