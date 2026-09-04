import { JsonTool } from "@/components/tool-clients";
import { ToolLayout, toolMetadata } from "@/components/tool-layout";
export const metadata = toolMetadata(
  "JSON Formatter Learn more — Learn more JSON",
  "Learn more Learn more syntax Learn more JSON Learn more Learn moreProcessLearn more browser Learn more",
);
export default function Page() {
  return (
    <ToolLayout
      title="JSON Formatter"
      eyebrow="DEVELOPER TOOLS / JSON"
      description="Learn more JSON Learn more Learn more Learn more Minify Learn more"
      related={[
        { href: "/developer-tools/jwt-decoder/", label: "JWT Decoder" },
        { href: "/converters/base64-converter/", label: "Base64 Converter" },
      ]}
    >
      <JsonTool />
      <>
        <h2>JSON Formatter Learn more?</h2>
        <p>
          Learn more indentation Learn more JSON Learn more
          Learn more comma Learn more quotation mark
          Learn more Learn more
        </p>
        <h2>Learn more</h2>
        <ul>
          <li>Learn more JSON Learn more Input</li>
          <li>Learn more “Process” Learn more Learn more “Minify” Learn more</li>
          <li>CopyLearn more</li>
        </ul>
        <h3>Learn more?</h3>
        <p>
          Learn more Learn moreProcessLearn more browser
          Learn more server
        </p>
      </>
    </ToolLayout>
  );
}

