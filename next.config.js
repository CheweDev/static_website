import { resolve } from "path";

export const images = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "placehold.co",
      port: "",
      pathname: "/**",
    },
  ],
};
export function webpack(config) {
  config.resolve.alias["@"] = resolve(__dirname, "src");
  return config;
}
