import { Container, NativeBaseProvider, StatusBar, VStack } from "native-base";
import TaskSelection, { TaskType } from "./src/features/TaskSelection";
import React from "react";
import Timer from "./src/features/Timer";

export default function App() {
  const [selectedTask, setSelectedTask] = React.useState<TaskType | null>(null);

  return (
    <NativeBaseProvider>
      <Container
        width={"100%"}
        height={"100%"}
        flex={1}
        paddingY={3}
        paddingX={2}
        centerContent
      >
        <StatusBar />
        <VStack flex={1} width={"100%"}>
          {selectedTask ? (
            <Timer
              selectedTask={selectedTask}
              onCancel={() => {
                setSelectedTask(null);
              }}
            />
          ) : (
            <TaskSelection onTaskSelect={setSelectedTask} />
          )}
        </VStack>
      </Container>
    </NativeBaseProvider>
  );
}
