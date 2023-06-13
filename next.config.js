/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental : {
        appDir : true,
        serverComponentsExternalPackages : ['mongoose'],
        serverActions : true
    }
}

module.exports = nextConfig
