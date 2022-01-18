import sass from "sass";
import { promisify } from "util";
import { writeFile } from "fs";
const sassRenderPromise = promisify(sass.render);
const writeFilePromise = promisify(writeFile);

async function main() {
  const styleResult = await sassRenderPromise(
    {
      file: `${process.cwd()}/themes/midnight-picnic/assets/src/scss/main.scss`,
      outFile: `${process.cwd()}/themes/midnight-picnic/assets/dist/main.css`,
    },
    {
      file: `${process.cwd()}/themes/midnight-picnic/assets/src/scss/editor.scss`,
      outFile: `${process.cwd()}/themes/midnight-picnic/assets/dist/editor.css`,
    }
  );

  await writeFilePromise("themes/midnight-picnic/assets/dist/main.css", styleResult.css, "utf8");
  await writeFilePromise("themes/midnight-picnic/assets/dist/editor.css", styleResult.css, "utf8");
}
main();