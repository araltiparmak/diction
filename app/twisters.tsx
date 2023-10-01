import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { doc, onSnapshot } from "firebase/firestore";
import { Button } from "tamagui";

import { MyStack } from "../components/MyStack";
import { FIRESTORE_DB } from "../firebaseConfig";
import { capitalizeFirstLetter } from "../utils/TextUtils";

export default function Twisters() {
  const router = useRouter();
  const [exercisesMenuItems, setExercisesMenuItems] = useState([]);
  const [exercises, setExercises] = useState();

  useEffect(() => {
    const twistersRef = doc(FIRESTORE_DB, "en/twisters");

    const subscriber = onSnapshot(twistersRef, {
      next: (querySnapshot) => {
        const exercisesData: Exercises = querySnapshot.data() as Exercises;
        setExercises(exercisesData);
        setExercisesMenuItems(Object.keys(exercisesData));
      }
    });
  }, []);
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
                // data: exercises[exercise]
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
