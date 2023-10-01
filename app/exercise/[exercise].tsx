import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { doc, onSnapshot } from "firebase/firestore";
import { Button, View, XStack } from "tamagui";

import ExerciseCard from "../../components/ExerciseCard";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { capitalizeFirstLetter } from "../../utils/TextUtils";

export default function Index() {
  const router = useRouter();

  const local = useLocalSearchParams();
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    const exercisesRef = doc(FIRESTORE_DB, "en/" + local.group);

    const subscriber = onSnapshot(exercisesRef, {
      next: (querySnapshot) => {
        const exercisesData: Exercises = querySnapshot.data() as Exercises;
        setExercises(exercisesData[local.exercise]);
      }
    });
  }, [local.exercise]);

  const forward = () => {
    if (exerciseIndex < exercises.length - 1) {
      setExerciseIndex(exerciseIndex + 1);
    }
  };

  const back = () => {
    if (exerciseIndex > 0) {
      setExerciseIndex(exerciseIndex - 1);
    }
  };

  return (
    <View>
      <Stack.Screen
        options={{ title: capitalizeFirstLetter(local.exercise) }}
      />
      <ExerciseCard text={exercises[exerciseIndex]} />
      <XStack>
        <Button onPress={() => back()}>Back</Button>
        <Button onPress={() => forward()}>Next</Button>
      </XStack>
    </View>
  );
}
