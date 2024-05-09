/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['images.unsplash.com','s3.amazonaws.com'],
        // New configuration using remotePatterns
        remotePatterns: [
            {
                hostname: 'images.unsplash.com',
                // Optional: Add additional properties if needed
                // protocol: 'https:', // Specify the protocol if needed
                // path: '/.*', // Specify the path pattern if needed
            },
            {
                hostname: 's3.amazonaws.com',
                // Optional: Add additional properties if needed
                // protocol: 'https:', // Specify the protocol if needed
                // path: '/.*', // Specify the path pattern if needed
            }
        ]
    }
};

export default nextConfig;
