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
            Section Title: Let&apos;s Chat!
            Invite people to connect with you for art tips or programming talks, while keeping the tone playful:
            Want to talk art, code, or how many paintbrushes I&apos;ve ruined? Drop me a line!
        </div>
    );
}