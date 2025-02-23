"use client";

import UserHeader from "./UserHeader";
import UserStatsCards from "./UserStatsCards";
import UserSessions from "./UserSessions";
import UserQuickActions from "./UserQuickActions";

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-white text-white flex">
      <main className="w-full px-12 py-8">
        <UserHeader />
        <div className="grid grid-cols-1 gap-6">
          <UserStatsCards />
          <UserSessions />
          <UserQuickActions />
        </div>
      </main>
    </div>
  );
}
