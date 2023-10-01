import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { doc, onSnapshot } from "firebase/firestore";
import { Button, XStack, YStack } from "tamagui";

import ExerciseCard from "../../components/ExerciseCard";
import { MyStack } from "../../components/MyStack";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { usePagination } from "../../hooks/usePagination";
import { capitalizeFirstLetter } from "../../utils/TextUtils";

export default function Index() {
  const local = useLocalSearchParams();
  const [exercises, setExercises] = useState([]);
  const { currentIndex, forward, back } = usePagination(0, exercises.length);

  useEffect(() => {
    const exercisesRef = doc(FIRESTORE_DB, "en/" + local.group);

    const subscriber = onSnapshot(exercisesRef, {
      next: (querySnapshot) => {
        const exercisesData: Exercises = querySnapshot.data() as Exercises;
        setExercises(exercisesData[local.exercise]);
      }
    });
  }, [local.exercise]);

  return (
    <MyStack>
      <YStack
        maxWidth={600}
        flex={2}
        alignItems={"center"}
        space
      >
        <Stack.Screen
          options={{ title: capitalizeFirstLetter(local.exercise) }}
        />
        <ExerciseCard text={exercises[currentIndex]} />
        <XStack space>
          <Button onPress={() => back()}>Back</Button>
          <Button onPress={() => forward()}>Next</Button>
        </XStack>
      </YStack>
    </MyStack>
  );
}
