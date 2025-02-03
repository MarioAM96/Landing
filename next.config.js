/** @type {import('next').NextConfig} */
const nextConfig = {
  //Descomentar para produccion
  output: 'export',

  //Descomentar para produccion con un basepath que no esta en la raiz
  //basePath: '/landing',
  
  images: {
      unoptimized: true, 
  },

  //Descomentar para produccion con un basepath que no esta en la raiz
  //assetPrefix: '/landing',
};

module.exports = nextConfig;