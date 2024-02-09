/** @type {import('next').NextConfig} */
import config from "./config.mjs";

const nextConfig = {
    env: {
        DB_URI: config.DB_URI,
    }
};

export default nextConfig;
