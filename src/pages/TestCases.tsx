import React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { TestCases as TestCasesComponent } from "@/components/TestCases";
import StepIndicator from "@/components/StepIndicator";
import { TestCase } from "@/types/test";
import { Button } from "@/components/ui/button";

// Sample test cases data
const testCasesData: TestCase[] = [
  {
    id: "tc-001",
    name: "User Authentication Test",
    description:
      "Verifies that users can successfully login with valid credentials",
    tags: ["authentication", "security", "user"],
    code: `describe('User Authentication', () => {
  it('should login with valid credentials', async () => {
    // Arrange
    const validUsername = 'testuser';
    const validPassword = 'password123';
    
    // Act
    await page.goto('/login');
    await page.fill('#username', validUsername);
    await page.fill('#password', validPassword);
    await page.click('.login-button');
    
    // Assert
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('.user-greeting')).toContainText('Welcome, testuser');
  });

  it('should show error with invalid credentials', async () => {
    // Arrange
    const invalidUsername = 'wronguser';
    const invalidPassword = 'wrongpass';
    
    // Act
    await page.goto('/login');
    await page.fill('#username', invalidUsername);
    await page.fill('#password', invalidPassword);
    await page.click('.login-button');
    
    // Assert
    await expect(page).toHaveURL('/login');
    await expect(page.locator('.error-message')).toBeVisible();
    await expect(page.locator('.error-message')).toContainText('Invalid username or password');
  });
});`,
    createdAt: new Date(2023, 5, 15),
  },
  {
    id: "tc-002",
    name: "Product Listing Test",
    description:
      "Verifies that product listings correctly display data and pagination works",
    tags: ["products", "ui", "pagination"],
    code: `describe('Product Listing', () => {
  beforeEach(async () => {
    await page.goto('/products');
  });

  it('should display 10 products per page', async () => {
    // Assert
    const productCards = page.locator('.product-card');
    await expect(productCards).toHaveCount(10);
  });

  it('should navigate to next page', async () => {
    // Act
    await page.click('.pagination-next');
    
    // Assert
    await expect(page).toHaveURL('/products?page=2');
    const productCards = page.locator('.product-card');
    await expect(productCards).toHaveCount(10);
  });

  it('should filter products by category', async () => {
    // Act
    await page.selectOption('.category-filter', 'electronics');
    
    // Assert
    await expect(page).toHaveURL('/products?category=electronics');
    const categories = page.locator('.product-category');
    await expect(categories).toContainText(['Electronics', 'Electronics', 'Electronics']);
  });
});`,
    createdAt: new Date(2023, 6, 22),
  },
  {
    id: "tc-003",
    name: "Checkout Process Test",
    description:
      "End-to-end test of the checkout process from cart to order confirmation",
    tags: ["checkout", "payment", "e2e"],
    code: `describe('Checkout Process', () => {
  beforeEach(async () => {
    // Setup: Add item to cart and navigate to checkout
    await page.goto('/products/1');
    await page.click('.add-to-cart');
    await page.click('.view-cart');
    await expect(page).toHaveURL('/cart');
    await page.click('.checkout-button');
  });

  it('should complete checkout process with valid inputs', async () => {
    // Act: Fill shipping info
    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Doe');
    await page.fill('#address', '123 Test St');
    await page.fill('#city', 'Testville');
    await page.fill('#zip', '12345');
    await page.click('.continue-button');
    
    // Fill payment info
    await page.fill('#card-number', '4111111111111111');
    await page.fill('#card-expiry', '12/25');
    await page.fill('#card-cvv', '123');
    await page.click('.place-order-button');
    
    // Assert
    await expect(page).toHaveURL('/order-confirmation');
    await expect(page.locator('.order-status')).toContainText('Order Placed Successfully');
    await expect(page.locator('.order-number')).toBeVisible();
  });

  it('should show validation errors for missing fields', async () => {
    // Act: Submit without filling fields
    await page.click('.continue-button');
    
    // Assert
    await expect(page).toHaveURL('/checkout');
    await expect(page.locator('.field-error')).toHaveCount(5);
  });
});`,
    createdAt: new Date(2023, 7, 5),
  },
  {
    id: "tc-004",
    name: "User Profile Update Test",
    description: "Tests the ability to update user profile information",
    tags: ["profile", "update", "user-settings"],
    code: `describe('User Profile Updates', () => {
  beforeEach(async () => {
    // Login and go to profile page
    await login(page, 'testuser', 'password123');
    await page.goto('/profile');
  });

  it('should update user profile information', async () => {
    // Act
    await page.fill('#display-name', 'New Display Name');
    await page.fill('#bio', 'This is my updated bio text');
    await page.selectOption('#country', 'Canada');
    await page.click('.save-profile-button');
    
    // Assert
    await expect(page.locator('.success-message')).toBeVisible();
    await expect(page.locator('.success-message')).toContainText('Profile updated successfully');
    
    // Reload the page to verify persistence
    await page.reload();
    await expect(page.locator('#display-name')).toHaveValue('New Display Name');
    await expect(page.locator('#bio')).toHaveValue('This is my updated bio text');
    await expect(page.locator('#country')).toHaveValue('Canada');
  });

  it('should not allow empty display name', async () => {
    // Act
    await page.fill('#display-name', '');
    await page.click('.save-profile-button');
    
    // Assert
    await expect(page.locator('.field-error')).toBeVisible();
    await expect(page.locator('.field-error')).toContainText('Display name is required');
  });
});`,
    createdAt: new Date(2023, 8, 10),
  },
];

const TestCases = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/report");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 flex flex-col items-center p-4">
      <div className="w-full max-w-3xl mx-auto">
        <StepIndicator currentStep={4} totalSteps={4} fixedAtTop={true} />
      </div>

      <div
        id="page-content"
        className="w-full flex flex-col items-center justify-center flex-1"
      >
        <div
          className={cn(
            "w-full max-w-6xl mx-auto overflow-hidden flex flex-col",
            "bg-background rounded-lg shadow-lg"
          )}
        >
          <div className={cn("p-4 border-b", "border-gray-200")}>
            <h1 className={cn("text-2xl font-bold", "text-gray-900")}>
              Test Cases Explorer
            </h1>
            <p className="text-muted-foreground">
              Browse and inspect test cases for the application
            </p>
          </div>

          <div className="flex-1" style={{ height: "calc(100vh - 16rem)" }}>
            <TestCasesComponent testCases={testCasesData} />
          </div>

          <div
            className={cn(
              "p-4 border-t flex justify-center",
              "border-gray-200"
            )}
          >
            <Button onClick={handleContinue} size="lg">
              Continue to Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCases;
