import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Progress Gallery" },
    { name: "description", content: "Mitchie Art Progress Gallery" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Watch Me Grow</h1>
      <p>This page will include a gallery of my artwork over time.</p>
    </div>
  );
}
