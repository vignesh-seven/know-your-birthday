import { Paper, Text, Flex, Box } from "@mantine/core"
import { ReactNode } from "react"

function getMonthName(month: number) {
  const date = new Date(`2000-${month}-01`)

  // Getting full month name (e.g. "September")
  return date.toLocaleString("default", { month: "long" })
}

export default function EventItem({
  year,
  month,
  day,
  text,
}: EventItemProps): ReactNode {
  return (
    <>
      {/* <Card withBorder shadow="sm" radius="md"> */}
      <Paper withBorder shadow="sm" radius="md">
        <Flex justify="flex-start">
          <Box p="md">
            <Text>
              {day}, {getMonthName(month)}
            </Text>
            <Text size="xl" fw={700}>
              {year}
            </Text>
          </Box>
          <Box w={600} p="md">
            <Text lineClamp={20}>{text}</Text>
          </Box>
        </Flex>
      </Paper>
      {/* </Card> */}
    </>
  )
}
