import React from "react";
import { H2 } from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";

export default function Settings() {
  return (
    <MySafeAreaView>
      <H2>Settings</H2>
      <H2>Theme</H2>
      <H2>Language</H2>
    </MySafeAreaView>
  );
}
