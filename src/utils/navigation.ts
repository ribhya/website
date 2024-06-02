// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'Products', url: '/products' },
  { name: 'Services', url: '/services' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact', url: '/contact' },
  { name: 'Demo', url: '/demo' },
]
// An array of links for footer
const footerLinks = [
  {
    section: 'Ecosystem',
    links: [
      { name: 'Documentation', url: '/welcome-to-docs/' },
      { name: 'Product', url: '/products' },
      { name: 'Services', url: '/services' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About us', url: '/about' },
      { name: 'Blog', url: '/blog' },
      { name: 'Careers', url: '/careers' },
      { name: 'Customers', url: '/customers' },
    ],
  },
]
// An object of links for social icons
const socialLinks = {
  facebook: 'https://www.facebook.com/',
  x: 'https://twitter.com/',
  github: 'https://github.com/ribhya',
  google: 'https://www.google.com/',
  slack: 'https://slack.com/',
}

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
}
