import { H1, YStack } from "tamagui";

import { MyStack } from "../components/MyStack";

export default function Home() {
  return (
    <MyStack>
      <YStack maxWidth={600}>
        <H1 textAlign="center">Diction</H1>
      </YStack>
    </MyStack>
  );
}
