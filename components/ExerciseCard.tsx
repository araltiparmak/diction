import { Card, H2, XStack } from "tamagui";

export default function ExerciseCard({ text }: { text: string }) {
  return ( <Card
    elevate
    size="$4"
    bordered
    width={300}
    height={400}
  >

    <Card.Header>
    </Card.Header>
    <XStack  jc={"center"}>
      <H2 color={"orange"}>{text}</H2>
    </XStack>
    <Card.Footer padded>
      <XStack flex={1} />
    </Card.Footer>

  </Card>)
}