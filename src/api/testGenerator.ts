import apiClient from "./client";

// Types for test configuration
export type TestConfig = {
  port: string;
  projectDirectory: string;
  username?: string;
  password?: string;
  userRequest?: string;
};

export type GeneratedFile = {
  id: string;
  name: string;
  path: string;
  status: "pending" | "generating" | "completed";
};

export type FileContent = {
  id: string;
  name: string;
  content: string;
};

export type TestReport = {
  id: string;
  url: string;
  status: "running" | "completed" | "failed";
  summary?: {
    passed: number;
    failed: number;
    flaky: number;
    skipped: number;
    total: number;
  };
};

// Test runner API calls
const testGeneratorApi = {
  // 1. Submit test configuration
  submitConfig: async (config: TestConfig) => {
    const response = await apiClient.post("/test-config", config);
    return response.data;
  },

  // 2. Get all generated files
  getAllFiles: async () => {
    const response = await apiClient.get("/generated-files");
    return response.data as GeneratedFile[];
  },

  // 3. Get specific file content
  getFileContent: async (fileId: string) => {
    const response = await apiClient.get(`/files/${fileId}`);
    return response.data as FileContent;
  },

  // 4. Run tests and generate report
  runTests: async () => {
    const response = await apiClient.post("/run-tests");
    return response.data as TestReport;
  },

  // Get test report status
  getTestReport: async (reportId: string) => {
    const response = await apiClient.get(`/test-reports/${reportId}`);
    return response.data as TestReport;
  },
};

export default testGeneratorApi;
