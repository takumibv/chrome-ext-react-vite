/*
 * Prepend style tag with Tailwind styles into HTML templates
 *
 * https://twind.dev/api/modules/twind_shim_server.html
 */

import { create } from "twind";
import { shim, virtualSheet, getStyleTag } from "twind/shim/server";

const sheet = virtualSheet();
const { tw } = create({ sheet, preflight: false });

const fileRegex = /\.html\?shadow$/;

export default function twindPlugin() {
  return {
    name: "twind-plugin",

    transform(src, id) {
      if (fileRegex.test(id)) {
        sheet.reset();
        const template = shim(src, { tw });
        const styles = getStyleTag(sheet);

        return {
          code: `export default ${JSON.stringify(styles + template)}`,
          map: { mappings: "" },
        };
      }
    },
  };
}
