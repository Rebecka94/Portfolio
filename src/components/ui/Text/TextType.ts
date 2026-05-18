export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size: "xsmall" | "small" | "medium" ;
}