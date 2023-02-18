import NextHead from "next/head";

export interface HeadProps {
  title?: string;
  description?: string;
}

export default function Head({
  title = "Next.js リハビリ",
  description = "私の Next.js りはびりんぐ",
}: HeadProps) {
  return (
    <NextHead>
      <meta
        name="format-detection"
        key="format-detection"
        content="telephone=no"
      />
      <meta name="robots" key="robots" content="max-image-preview:large" />
      <title>{title}</title>
      <meta name="description" content={description}></meta>
    </NextHead>
  );
}
