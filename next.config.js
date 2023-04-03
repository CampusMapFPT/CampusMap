const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  experimental: { appDir: true },
  env: {
    NEXT_PUBLIC_BASE_URL: "",
    NEXT_PUBLIC_FIREBASE_API_KEY: "AIzaSyB-A-7ajjyuCE04qlV0hF_c_u9jMQZft2s",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "campusmap-5c6de.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "campusmap-5c6de",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "campusmap-5c6de.appspot.com",
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "546969496610",
    NEXT_PUBLIC_FIREBASE_APP_ID: "1:546969496610:web:2996e78b71650d5c0e2e7b",
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: "G-VJJNFBQF4S",
    NEXT_PUBLIC_API_KEY: "AIzaSyAvutpAgOE9qDyDk1S97wrHYOg_tE6gFW0",
  },
  trailingSlash: true,
};

module.exports = nextConfig;
