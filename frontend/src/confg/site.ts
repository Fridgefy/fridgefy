export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Fridgefy',
  description:
    'Fridgefy is a web application that helps you finding a recipe based on the ingredients you have in your fridge.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Recipes',
      href: '/recipes',
    },
    {
      title: 'Shopping Cart',
      href: '/shopping-list',
    },
  ],
};
