import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Me" },
    { name: "description", content: "Contact Me" },
  ];
};

export default function Index() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            Section Title: Thoughts & Paint Splatters
            Write short entries about your experiences, challenges, and triumphs in your artistic journey.
            You could even post a mix of serious reflections and lighthearted updates like: The paintwater cup has been spilled again. Moment of silence for the carpet.
        </div>
    );
}