const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Dylan Drudge\'s portfolio', // Navigation and Site Title
  siteTitleAlt: 'Dylan', // Alternative Site title for SEO
  siteTitleShort: 'Dylan', // short_name for manifest
  siteHeadline: 'Creating blazginly fast websites and applications of the future', // Headline for schema.org JSONLD
  siteUrl: 'http://dylandrudgeportfolio.s3-website-us-east-1.amazonaws.com/', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Playful & Colorful One-Page website with Parallax effect',
  author: 'Dylan Drudge', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@cara', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language
  // googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
