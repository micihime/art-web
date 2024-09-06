import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Learning" },
    { name: "description", content: "Learning" },
  ];
};

export default function Index() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            Section Title: Learning As I Go
            Describe what techniques you&apos;re currently focusing on or new things you&apos;re learning (e.g., blending, textures).
            Include funny anecdotes about the struggles of learning watercolor, like: Apparently, paper towels are just as important as the paint itself!
        </div>
    );
}