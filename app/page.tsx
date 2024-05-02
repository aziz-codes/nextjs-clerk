"use client";
import { useAuth, useUser } from "@clerk/nextjs";

export default function HomePage() {
  const { isLoaded, userId, sessionId } = useAuth();
  const { user } = useUser();
  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return null;
  }

  return (
    <div>
      Hello, {userId} your current active session is {sessionId}
      name is {user?.firstName}
      {user?.lastName}
    </div>
  );
}
