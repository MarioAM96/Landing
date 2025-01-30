/** @type {import('next').NextConfig} */
const nextConfig = {
    //Descomentar y npm run build para produccion
    //output: 'export',
    //basePath: '/landing', //Path Base para produccion
    images: {
        domains: ['fibramax.ec'],
      },
};

module.exports = nextConfig;
