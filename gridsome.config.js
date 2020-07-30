module.exports = {
  siteName: "IGEO DX",
  siteUrl: "https://igeogame.com",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-47036341-5",
      },
    },
  ],
};
