/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config, { isServer }) => {
    //     config.externals.push({
    //       'utf-8-validate': 'commonjs utf-8-validate',
    //       'bufferutil': 'commonjs bufferutil',
    //     });
    //     return config;
    // },
    env: {
        HUGGING_FACE_API_TOKEN: process.env.HUGGING_FACE_API_TOKEN,
    },
};

export default nextConfig;
