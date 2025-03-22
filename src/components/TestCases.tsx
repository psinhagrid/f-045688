import React, { useState } from "react";
import { Code2, ChevronRight, FileText, FolderIcon, Clock } from "lucide-react";
import { TestCase } from "../types/test";
import { cn } from "@/lib/utils";

interface TestCasesProps {
  testCases: TestCase[];
}

export function TestCases({ testCases }: TestCasesProps) {
  const [selectedTestCase, setSelectedTestCase] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-12 gap-0 h-[calc(100vh-4rem)] overflow-hidden",
        "bg-white rounded-lg shadow-lg"
      )}
    >
      {/* File Explorer Panel */}
      <div className={cn("col-span-4 border-r", "border-gray-200 bg-gray-50")}>
        <div className={cn("p-4 border-b", "border-gray-200 bg-white")}>
          <div className="flex items-center space-x-2">
            <FolderIcon className={cn("w-5 h-5", "text-blue-500")} />
            <h2 className={cn("text-lg font-semibold", "text-gray-900")}>
              Test Explorer
            </h2>
          </div>
          <div className={cn("mt-2 text-sm", "text-gray-500")}>
            {testCases.length} test cases
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100%-4rem)]">
          {testCases.map((testCase) => (
            <div
              key={testCase.id}
              className={cn(
                "border-l-2 transition-all cursor-pointer",
                selectedTestCase === testCase.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-transparent",
                !selectedTestCase || selectedTestCase !== testCase.id
                  ? "hover:bg-gray-100"
                  : ""
              )}
              onClick={() => setSelectedTestCase(testCase.id)}
            >
              <div className="px-4 py-3">
                <div className="flex items-start space-x-3">
                  <Code2
                    className={cn(
                      "w-5 h-5 mt-1",
                      selectedTestCase === testCase.id
                        ? "text-blue-500"
                        : "text-gray-400"
                    )}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3
                        className={cn(
                          "text-sm font-medium truncate",
                          "text-gray-900"
                        )}
                      >
                        {testCase.name}
                      </h3>
                      <ChevronRight
                        className={cn(
                          "w-4 h-4 transition-transform",
                          selectedTestCase === testCase.id
                            ? "transform rotate-90"
                            : ""
                        )}
                      />
                    </div>
                    <p className={cn("mt-1 text-xs truncate", "text-gray-500")}>
                      {testCase.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {testCase.tags.map((tag) => (
                        <span
                          key={tag}
                          className={cn(
                            "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
                            "bg-blue-100 text-blue-800"
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Panel */}
      <div className={cn("col-span-8 flex flex-col h-full", "bg-white")}>
        {selectedTestCase ? (
          <div className="h-full flex flex-col">
            {testCases.find((tc) => tc.id === selectedTestCase) ? (
              <>
                <div
                  className={cn("flex-none p-6 border-b", "border-gray-200")}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className={cn("text-xl font-bold", "text-gray-900")}>
                        {
                          testCases.find((tc) => tc.id === selectedTestCase)
                            ?.name
                        }
                      </h2>
                      <p className={cn("mt-1 text-sm", "text-gray-500")}>
                        {
                          testCases.find((tc) => tc.id === selectedTestCase)
                            ?.description
                        }
                      </p>
                    </div>
                    <div
                      className={cn(
                        "flex items-center text-sm",
                        "text-gray-500"
                      )}
                    >
                      <Clock className="w-4 h-4 mr-1" />
                      {testCases
                        .find((tc) => tc.id === selectedTestCase)
                        ?.createdAt.toLocaleDateString()}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {testCases
                      .find((tc) => tc.id === selectedTestCase)
                      ?.tags.map((tag) => (
                        <span
                          key={tag}
                          className={cn(
                            "inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium",
                            "bg-gray-100 text-gray-800"
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
                <div className={cn("flex-1 overflow-auto p-6", "bg-gray-50")}>
                  <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
                      <div className="flex items-center space-x-2">
                        <Code2 className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-300">
                          Test Code
                        </span>
                      </div>
                    </div>
                    <pre className="p-4 overflow-x-auto">
                      <code className="text-sm font-mono text-gray-200">
                        {
                          testCases.find((tc) => tc.id === selectedTestCase)
                            ?.code
                        }
                      </code>
                    </pre>
                  </div>
                </div>
              </>
            ) : (
              <div
                className={cn(
                  "flex items-center justify-center h-full",
                  "text-gray-500"
                )}
              >
                Test case not found
              </div>
            )}
          </div>
        ) : (
          <div
            className={cn(
              "flex flex-col items-center justify-center h-full",
              "text-gray-500"
            )}
          >
            <FileText className="w-16 h-16 mb-4 opacity-50" />
            <p className="text-lg">Select a test case to view its content</p>
            <p className="mt-2 text-sm">
              Choose from the test explorer on the left
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
