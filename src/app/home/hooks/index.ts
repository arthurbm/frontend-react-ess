import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createTest,
  deleteTest,
  getTestById,
  getTests,
  updateTest,
} from "../services";
import { TestFormType } from "../forms/TestForm";
import { queryClient } from "../../../shared/config/queryClient";

export const useCreateTest = () => {
  return useMutation({
    mutationFn: createTest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tests"],
      });
    },
  });
};

export const useTests = () => {
  return useQuery({
    queryFn: getTests,
    queryKey: ["tests"],
  });
};

export const useTestById = (id: string) => {
  return useQuery({
    queryFn: () => getTestById(id),
    queryKey: ["test", { id }],
  });
};

export const useUpdateTestByIdMutation = (id: string) => {
  return useMutation({
    mutationFn: (data: TestFormType) => updateTest(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["test", { id }],
      });
    },
  });
};

export const useDeleteTestMutation = () => {
  return useMutation({
    mutationFn: deleteTest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tests"],
      });
    },
  });
};
