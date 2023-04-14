const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'deny',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Permitted-Cross-Domain-Policies',
    value: 'none',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui-components'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  headers: () => [
    {
      source: '/:path*',
      headers: securityHeaders,
    },
  ],
};
