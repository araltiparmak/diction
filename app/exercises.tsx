import React from "react";
import { useRouter } from "expo-router";
import { Button } from "tamagui";

import { MyStack } from "../components/MyStack";
import { useMenuItems } from "../hooks/useMenuItems";
import { capitalizeFirstLetter } from "../utils/TextUtils";

export default function Exercises() {
  const router = useRouter();
  const exercisesMenuItems = useMenuItems("en/exercises");

  return (
    <MyStack>
      {exercisesMenuItems.map((exercise) => (
        <Button
          key={exercise}
          style={{ textTransform: "capitalize" }}
          onPress={() =>
            router.push({
              pathname: "/exercise/" + exercise,
              params: {
                group: "exercises"
              }
            })
          }
        >
          {capitalizeFirstLetter(exercise)}
        </Button>
      ))}
    </MyStack>
  );
}
