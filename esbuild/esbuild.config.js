import { build } from "esbuild";

build({
  entryPoints: ["./src/index.js"],/* el archivo de entrada */
  outdir: "./dist",/* la ruta donde va a crear el empaquetado */
  bundle: true,/* procesar los archivos */
  minify: true,/* mificar */
  watch: true,/* para que este pendiente de los cambios en los archivos */
  sourcemap: true,/* para hacer debuggin */
  format: "esm"
}).catch(() => process.exit(1));
