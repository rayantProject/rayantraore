import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ShaderBackground from "@/components/system/shader-background";

const meta = {
  title: "Components/System/ShaderBackground",
  component: ShaderBackground,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Animated mesh gradient background that adapts to theme with smooth color transitions.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ShaderBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            Content over shader
          </h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.8 }}>
            This is how content appears over the animated mesh gradient
            background
          </p>
        </div>
      </div>
    ),
  },
};

export const WithText: Story = {
  args: {
    children: (
      <div
        style={{
          padding: "60px 40px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
          Welcome to RT Experience
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            marginBottom: "2rem",
          }}
        >
          This background provides a beautiful animated gradient that changes
          with the theme. The colors are carefully chosen to maintain
          readability while providing visual interest.
        </p>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          The shader uses multiple mesh gradients with different distortion and
          swirl effects to create a unique, ever-changing background pattern.
        </p>
      </div>
    ),
  },
};
