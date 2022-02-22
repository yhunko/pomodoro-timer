import { Container, NativeBaseProvider } from "native-base";
import TaskSelection, { TaskType } from "./src/features/TaskSelection";
import React from "react";
import Timer from "./src/features/Timer";
import { Dimensions } from "react-native";

export default function App() {
  const [selectedTask, setSelectedTask] = React.useState<TaskType | null>(null);

  return (
    <NativeBaseProvider>
      <Container
        safeArea
        flex={1}
        maxWidth={Dimensions.get("window").width}
        px={4}
      >
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
      </Container>
    </NativeBaseProvider>
  );
}
