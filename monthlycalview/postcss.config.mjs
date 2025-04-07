
//original?
// const config = {
//   plugins: ["@tailwindcss/postcss"],
// };


// export default config;



//chatgpt suggestion
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [tailwindcss, autoprefixer],
};

/*
export const plugins = {
  tailwindcss: {},
  autoprefixer: {},
};
*/
//added both starter n what tuturial had