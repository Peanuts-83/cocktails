import { Cocktail } from '../interfaces/cocktail.interface'

export const initialCocktails: Cocktail[] = [
	{
		name: 'Mojito',
		img: 'https://www.regal.fr/sites/art-de-vivre/files/mojito_cognac_1.jpg',
		description:
			'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.',
		ingredients: [
			{ name: 'Perrier', quantity: 1 },
			{ name: 'Rhum', quantity: 1 },
			{ name: 'Menthe', quantity: 1 },
		],
	},
	{
		name: 'Cosmopolitan',
		img: 'https://fr.inshaker.com/uploads/cocktail/hires/29/1629722496-%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D0%BD.jpg',
		description:
			'The tangy concoction of vodka, triple sec, lime juice and cranberry juice has managed to leapfrog the venerable screwdriver as many vodka drinkers prefer the Cosmopolitan’s cleaner and slightly tart taste. The keys to the preparation of a Cosmopolitan are a good brand of cranberry juice and Cointreau Triple Sec, two essential elements to the drink.',
		ingredients: [
			{ name: 'Cranberry', quantity: 1 },
			{ name: 'Citron', quantity: 1 },
			{ name: 'Vodka', quantity: 1 },
		],
	},
	{
		name: 'Mai Tai',
		img: 'https://www.monin.com/media/catalog/product/cache/90144d72fc848e35e430cbfd2c195f82/2/a/2af11d1a-a678-40ab-88f1-b7efd3ede819-2.png',
		description:
			'The Mai Tai is a Polynesian-style cocktail that has a fruity tropical taste sweet and vibrant. The mixture of light and dark rum, orange curacao, orgeat syrup and lime juice has been a symbol of Tahitian culture ever since the drink was first created.',
		ingredients: [
			{ name: 'Rhum', quantity: 1 },
			{ name: 'Triple sec', quantity: 1 },
			{ name: 'Citron', quantity: 1 },
		],
	},
	{
		name: 'Pina Colada',
		img: 'https://t2.uc.ltmcdn.com/fr/posts/4/3/1/comment_faire_une_pina_colada_sans_alcool_1134_600.jpg',
		description:
			'     Réalisez la recette "Piña Colada" au mixer.     Dans un blender (mixer), versez les ingrédients avec 5 ou 6 glaçons et mixez le tout. C\'est prêt ! Versez dans le verre et dégustez. Peut aussi se réaliser au shaker si c\'est juste pour une personne.     Servir dans un verre de type "verre à vin".     Décorer avec un morceau d\'ananas et une cerise confite.',
		ingredients: [
			{ name: 'Rhum blanc', quantity: 4 },
			{ name: 'Rhum ambré', quantity: 4 },
			{ name: "Jus d'ananas", quantity: 12 },
			{ name: 'Lait de coco', quantity: 4 },
		],
	},
	{
		name: 'Margarita',
		img: 'https://tequilasanjose.com/wp-content/uploads/2021/04/margarita_v2.png',
		description:
			'     Réalisez la recette "Margarita" au shaker.     Frapper les ingrédients au shaker avec des glaçons puis verser dans le verre givré au citron et au sel fin...      Pour givrer facilement le verre, passer le citron sur le bord du verre et tremper les bords dans le sel.     Servir dans un verre de type "verre à margarita".     Décorer d\'une tranche de citron vert...',
		ingredients: [
			{ name: 'Tequila', quantity: 5 },
			{ name: 'Triple sec', quantity: 3 },
			{ name: 'Jus de citron vert', quantity: 2 },
		],
	},
	{
		name: 'Sex on the beach',
		img: 'https://cdn.goody.buzz/media/20190101173848/Cocktail-sex-on-the-beach.jpg',
		description:
			'     Réalisez la recette "Sex on the beach" dans un verre à mélange.     Verser les alcools sur des glaçons, mélanger et compléter avec les jus de fruits     .     Servir dans un verre de type "verre tulipe".     Un morceau d\'ananas et une cerise confite.',
		ingredients: [
			{ name: 'Vodka', quantity: 3 },
			{ name: 'Sirop de melon', quantity: 2 },
			{ name: 'Chambord', quantity: 2 },
			{ name: "Jus d'ananas", quantity: 5 },
			{ name: 'Jus de cranberry', quantity: 6 },
		],
	},
	{
		name: 'Blue lagoon',
		img: 'https://cdn3.foodviva.com/static-content/food-images/cocktail-recipes/blue-lagoon-cocktail-recipe/blue-lagoon-cocktail-recipe.jpg',
		description:
			'     Réalisez la recette "Blue Lagoon" au shaker.     Pressez le jus d\'un demi-citron, ajoutez dans le shaker avec les autres ingrédients et des glaçons. Frappez puis versez dans le verre en filtrant.      Afin qu\'il soit plus frais et léger, remplissez auparavant le verre de glace pilée.     Servir dans un verre de type "verre à martini".     Un long zeste de citron vert.',
		ingredients: [
			{ name: 'Vodka', quantity: 4 },
			{ name: 'Curaçao bleu', quantity: 3 },
			{ name: 'Jus de citron', quantity: 2 },
		],
	},
	{
		name: 'Tequila Sunrise',
		img: 'https://media.istockphoto.com/photos/tequila-sunrise-alcoholic-cocktail-drink-on-white-picture-id484824504?k=20&m=484824504&s=170667a&w=0&h=BtzfOrSv7F9wk9HxBG49xw0MgbRv2hXnBhOcAuclpJU=',
		description:
			'     Réalisez la recette "Tequila Sunrise" directement dans le verre.     Verser la tequila sur des glaçons dans le verre. Compléter avec le jus d\'orange et remuer. Versez doucement le sirop de grenadine dans le verre pour que celui-ci tombe au fond. Donnez alors un petit coup de cuillère pour affiner le dégradé si nécessaire. .     Servir dans un verre de type "tumbler".     Une rondelle d\'orange.',
		ingredients: [
			{ name: 'Vodka', quantity: 4 },
			{ name: 'Triple sec', quantity: 2 },
			{ name: 'Jus de cranberry', quantity: 2 },
			{ name: 'Jus de citron', quantity: 1 },
		],
	},
]
