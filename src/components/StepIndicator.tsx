import React, { useEffect } from "react";
import { Steps, ConfigProvider } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
  CheckCircleOutlined,
  CodeOutlined,
  RocketOutlined,
  BulbOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { cn } from "@/lib/utils";
import "./StepIndicator.css";

// No need to import antd/dist/reset.css in modern antd versions
// We'll handle global styles in the main file

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
  descriptions?: string[];
  onStepClick?: (step: number) => void;
  // Additional options for more customization
  size?: "small" | "default";
  direction?: "horizontal" | "vertical";
  progressDot?: boolean;
  className?: string;
  fixedAtTop?: boolean; // New prop to control fixed positioning
}

const StepIndicator = ({
  currentStep,
  totalSteps,
  labels = [],
  descriptions = [],
  onStepClick,
  size = "small",
  direction = "horizontal",
  progressDot = false,
  className = "",
  fixedAtTop = false, // Default to not fixed
}: StepIndicatorProps) => {
  // Set CSS variable for primary color in RGB format for our custom styles
  useEffect(() => {
    // Convert hex #3b82f6 to RGB
    const root = document.documentElement;
    root.style.setProperty("--primary-rgb", "59, 130, 246");
  }, []);

  // Get an appropriate icon based on label text or index
  const getIconForStep = (label: string, index: number) => {
    const labelLower = label.toLowerCase();

    if (labelLower.includes("code") || labelLower.includes("develop"))
      return <CodeOutlined />;
    if (labelLower.includes("start") || labelLower.includes("begin"))
      return <RocketOutlined />;
    if (labelLower.includes("analyze") || labelLower.includes("review"))
      return <BulbOutlined />;
    if (labelLower.includes("report") || labelLower.includes("result"))
      return <FileTextOutlined />;

    // Default icons based on position
    if (index === 0) return <UserOutlined />;
    if (index === totalSteps - 1) return <SmileOutlined />;
    return <SolutionOutlined />;
  };

  // Generate items array for Ant Design Steps
  const items = Array.from({ length: totalSteps }).map((_, index) => {
    const stepNumber = index + 1;
    const isCompleted = stepNumber < currentStep;
    const isCurrent = stepNumber === currentStep;
    const label = labels[index] || `Step ${stepNumber}`;
    const description = descriptions[index] || "";

    let status: "wait" | "process" | "finish" | "error" = "wait";
    if (isCompleted) status = "finish";
    if (isCurrent) status = "process";

    // Select an appropriate icon based on step status
    let icon = null;
    if (isCompleted) {
      icon = <CheckCircleOutlined />;
    } else if (isCurrent) {
      icon = <LoadingOutlined />;
    } else {
      // Use custom icon based on label or index
      const baseIcon = getIconForStep(label, index);
      icon = baseIcon;
    }

    return {
      title: label,
      description: description,
      status,
      icon: progressDot ? undefined : icon,
    };
  });

  // Add extra space at the top of the page content when fixed positioning is used
  useEffect(() => {
    if (fixedAtTop) {
      // Don't add padding via JS - it's handled by CSS now
      document.body.classList.add("has-fixed-indicator");
    }

    return () => {
      document.body.classList.remove("has-fixed-indicator");
    };
  }, [fixedAtTop]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Steps: {
            colorPrimary: "#3b82f6", // Slightly brighter blue for better contrast
            controlItemBgActive: "rgba(59, 130, 246, 0.1)",
            fontSizeLG: 12, // Smaller font size
            // Enhanced styling
            iconSize: 16, // Smaller icons
            dotSize: 6, // Smaller dots
          },
        },
        // Global theme adjustments
        token: {
          colorPrimary: "#3b82f6", // Match with your primary color
          colorBgContainer: "#ffffff",
          borderRadius: 8,
        },
      }}
    >
      <div
        className={cn(
          "w-full steps-container relative overflow-hidden",
          fixedAtTop ? "steps-container-fixed py-1 px-4" : "py-4 px-6",
          fixedAtTop ? "border-b border-gray-200/20" : "",
          className
        )}
      >
        <Steps
          items={items}
          current={currentStep - 1}
          onChange={
            onStepClick ? (current) => onStepClick(current + 1) : undefined
          }
          size="small" // Always use small size for more compact appearance
          direction={direction}
          progressDot={progressDot}
          className={cn("dark-steps", "relative z-10")}
        />
      </div>
    </ConfigProvider>
  );
};

export default StepIndicator;
