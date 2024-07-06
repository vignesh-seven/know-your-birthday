import { Paper, Text, Flex, Box, Transition, Space } from "@mantine/core"
import { ReactNode, useEffect, useState } from "react"

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
}: {
  year: number
  month: number
  day: number
  text: string
}): ReactNode {
  // const [iAmMounted, setIAmMounted] = useState(false)

  // useEffect(() => {
  //   console.log("I am mounted")
  //   setIAmMounted(true)

  //   return setIAmMounted(false)
  // }, [])
  return (
    <>
      <Space h="md" />
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
    </>
  )
}
