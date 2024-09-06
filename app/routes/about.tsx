import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "About Me" },
    { name: "description", content: "About Michi Estudio" },
  ];
};

export default function Index() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            About Me
            Section Title: Who Am I?
            Talk about how you&apos;ve always been creative or how you recently picked up watercolors as a hobby.
            Share your background in tech/programming to show you&apos;re someone who loves learning and adapting.
            Add a humorous note, like: I used to debug code, now I&apos;m trying to debug my painting skills!
        </div>
    );
}
