import React from "react";
import { useRouter } from "expo-router";
import { Button } from "tamagui";

import { MyStack } from "../components/MyStack";
import { capitalizeFirstLetter } from "../utils/TextUtils";
import { useMenuItems } from "../hooks/useMenuItems";

export default function Twisters() {
  const router = useRouter();
  const exercisesMenuItems = useMenuItems("en/twisters")


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
                group: "twisters"
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
