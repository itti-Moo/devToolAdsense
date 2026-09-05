import { JwtTool } from "@/components/jwt-tool";
import { ToolLayout, toolMetadata } from "@/components/tool-layout";
export const metadata = toolMetadata(
  "JWT Decoder Learn more — Learn more Header Learn more Payload",
  "Learn more JWT token Learn more browser Learn more Header Learn more Payload Learn more token Learn more server",
);
export default function Page() {
  return (
    <ToolLayout
      title="JWT Decoder"
      eyebrow="DEVELOPER TOOLS / SECURITY"
      description="Learn more Header Learn more Payload Learn more JSON Web Token Learn more Learn more token Learn more"
      related={[
        { href: "/guides/jwt-vs-session/", label: "JWT vs Session" },
        { href: "/converters/base64-converter/", label: "Base64 Converter" },
      ]}
    >
      <JwtTool />
      <>
        <h2>Learn more JWT Learn more</h2>
        <p>
          JWT Learn more Header, Payload Learn more Signature
          Learn more Base64URL
          Learn more
        </p>
        <h2>Learn more</h2>
        <p>
          Learn moreRuns locally Learn more access token Learn more
          Learn more secret Learn more Payload
        </p>
      </>
    </ToolLayout>
  );
}


