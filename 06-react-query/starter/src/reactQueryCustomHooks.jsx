import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";
import { toast } from "react-toastify";
const queryClient = useQueryClient;

export const useFetchTasks = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });

  return {
    isLoading,
    data,
    isError,
  };
};

// === Create Task ==================
export const useCreateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (taskTitle) => customFetch.post("/", { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tasks] });
      toast.success("task add");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { createTask, isLoading };
};

// === Edit Task ==================
export const EditTask = () => {
  const queryClient = useQueryClient;

  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customFetch.patch(`/${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return { editTask };
};

// === Delete Task ==================
export const useDeleteTask = () => {
  const queryClient = useQueryClient;

  const { mutate: deleteTask, isLoading: deleteTaskLoading } = useMutation({
    mutationFn: (taskId) => {
      return customFetch.delete(`/${taskId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return { deleteTask, deleteTaskLoading };
};
