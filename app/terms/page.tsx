import { InfoPage, contentMetadata } from "@/components/content-page";
export const metadata = contentMetadata(
  "TermsLearn more",
  "TermsLearn more DevKit",
);
export default function Page() {
  return (
    <InfoPage
      title="TermsLearn more"
      description="Last updated September 3, 2026"
    >
      <h2>Learn more</h2>
      <p>Learn more DevKit Learn more Learn more Learn more Learn more</p>
      <h2>Learn more</h2>
      <p>Learn more Learn more Learn more</p>
      <h2>Learn more</h2>
      <p>Learn moreTermsLearn more Learn more</p>
    </InfoPage>
  );
}

