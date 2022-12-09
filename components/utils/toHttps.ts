export const toHttps = (link: string | undefined) =>
  link ? link.replace("http://", "https://") : undefined;
