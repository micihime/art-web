import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Progress Gallery" },
    { name: "description", content: "Progress Gallery" },
  ];
};

export default function Index() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            Section Title: Watch Me Grow
            Include a gallery of your artwork in chronological order, so visitors can see your improvement over time. You can title it: From Colorful Blobs to Something Recognizable!
            Add captions to each painting that include a bit of humor, like: This was supposed to be a sunset… somehow it turned into an abstract cloud monster.
        </div>
    );
}
