import React from "react";

import { Tabs } from "@/components/Tabs";

export default function TabLayout() {
  return (
    <Tabs translucent={true} sidebarAdaptable={true}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Budget",
          tabBarIcon: () => require("@/assets/icons/wallet-outline.svg"),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: () => require("@/assets/icons/card-outline.svg"),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          tabBarIcon: () => require("@/assets/icons/stats-chart-outline.svg"),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => require("@/assets/icons/settings-outline.svg"),
        }}
      />
    </Tabs>
  );
}
