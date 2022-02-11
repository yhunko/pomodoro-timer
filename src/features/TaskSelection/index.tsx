import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import { Box, Button, HStack, Input, Text, VStack } from "native-base";

export type TaskType = {
  title: string;
};

type TaskSelectionProps = {
  onTaskSelect: (task: TaskType) => void;
};

const TaskSelection: React.FC<TaskSelectionProps> = ({ onTaskSelect }) => {
  const [taskName, setTaskName] = React.useState("");
  const [tasks, setTasks] = React.useState<TaskType[]>([
    { title: "Test first task" },
  ]);

  return (
    <View style={styles.container}>
      <Header value={"My tasks"} />
      <HStack alignItems={"center"} space={"sm"}>
        <Input
          placeholder="Add new task..."
          isFullWidth
          onChangeText={setTaskName}
        />
        <Button
          size={"sm"}
          onPress={() => {
            setTasks((prev) => [...prev, { title: taskName }]);
          }}
        >
          Add
        </Button>
      </HStack>
      <Box flex={1} marginY={5} marginX={4}>
        <FlatList
          data={tasks.map((task, index) => ({
            ...task,
            key: `${task.title}-${index + 1}`,
          }))}
          renderItem={({ item }) => (
            <Box key={item.key}>
              <HStack alignItems={"center"} justifyContent={"space-between"}>
                <Text fontWeight={"bold"} fontSize={"sm"}>
                  {item.title}
                </Text>
                <HStack space={"sm"} alignItems={"center"}>
                  <VStack alignItems={"center"}>
                    <Text>0/6</Text>
                    <Text>25 min</Text>
                  </VStack>
                  <Button
                    size={"sm"}
                    onPress={() => {
                      onTaskSelect(item);
                    }}
                  >
                    Go
                  </Button>
                </HStack>
              </HStack>
            </Box>
          )}
        />
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TaskSelection;
