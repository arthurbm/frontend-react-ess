import apiService from "../../../shared/services/api-service-new";
import { BaseApiResponseType } from "../../../shared/types/base-api-response";
import { TestFormType } from "../forms/TestForm";
import TestModel from "../models/TestModel";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function createTest(
  testForm: TestFormType
): Promise<BaseApiResponseType<TestModel>> {
  return (await apiService.post("/tests", testForm)).data;
}

export async function getTests(): Promise<BaseApiResponseType<TestModel[]>> {
  await delay(3000);

  return (await apiService.get("/tests")).data;
}

export async function getTestById(
  id: string
): Promise<BaseApiResponseType<TestModel>> {
  return (await apiService.get(`/tests/${id}`)).data;
}

export async function deleteTest(
  id: string
): Promise<BaseApiResponseType<void>> {
  return (await apiService.delete(`/tests/${id}`)).data;
}

export async function updateTest(
  id: string,
  testForm: TestFormType
): Promise<BaseApiResponseType<TestModel>> {
  return (await apiService.put(`/tests/${id}`, testForm)).data;
}
