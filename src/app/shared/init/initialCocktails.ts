import { Cocktail } from "../interfaces/cocktail.interface"

export const initialCocktails: Cocktail[] = [
  {
    name: 'Mojito',
    img:
      'https://www.regal.fr/sites/art-de-vivre/files/mojito_cognac_1.jpg',
    description:
      'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.',
    ingredients: [
      { name: "Perrier", quantity: 1 },
      { name: "Rhum", quantity: 1 },
      { name: "Menthe", quantity: 1 }
    ]
  },
  {
    name: 'Cosmopolitan',
    img:
      'https://fr.inshaker.com/uploads/cocktail/hires/29/1629722496-%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D0%BD.jpg',
    description:
      'The tangy concoction of vodka, triple sec, lime juice and cranberry juice has managed to leapfrog the venerable screwdriver as many vodka drinkers prefer the Cosmopolitan’s cleaner and slightly tart taste. The keys to the preparation of a Cosmopolitan are a good brand of cranberry juice and Cointreau Triple Sec, two essential elements to the drink.',
    ingredients: [
      { name: "Cranberry", quantity: 1 },
      { name: "Citron", quantity: 1 },
      { name: "Vodka", quantity: 1 }
    ]
  },
  {
    name: 'Mai Tai',
    img:
      'https://www.monin.com/media/catalog/product/cache/90144d72fc848e35e430cbfd2c195f82/2/a/2af11d1a-a678-40ab-88f1-b7efd3ede819-2.png',
    description:
      'The Mai Tai is a Polynesian-style cocktail that has a fruity tropical taste sweet and vibrant. The mixture of light and dark rum, orange curacao, orgeat syrup and lime juice has been a symbol of Tahitian culture ever since the drink was first created.',
    ingredients: [
      { name: "Rhum", quantity: 1 },
      { name: "Triple sec", quantity: 1 },
      { name: "Citron", quantity: 1 }
    ]
  },
]