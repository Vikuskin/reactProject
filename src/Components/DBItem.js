const dbItem = {
	dryFood: [
		{
			name: 'Royal Canin',
			img: '../itemImage/RoyalCanin.jpg',
			id: 1,
			price: 300,
			volume: ['400 г', '2 кг', '4 кг', '10 кг'],
			description: 'Полнорационный сбалансированный корм для стерилизованных кошек (в возрасте от 1 года до 7 лет).'
		},
		{
			name: 'Purina Pro Plan',
			img: '../itemImage/PurinaProPlan.jpg',
			id: 2,
			price: 300,
			volume: ['400 г', '1,5 кг', '10 кг'],
			description: 'Сухой корм для взрослых кошек с чувствительной кожей с Лососем, Purina Pro Plan Elegant Adult'
		},
		{
			name: 'Farmina N&D',
			img: '../itemImage/Farmina.jpg',
			id: 3,
			price: 350,
			volume: ['300 г', '1,5 кг', '5 кг', '10 кг'],
			description: 'Сухой корм для взрослых кошек со спельтой, овсом, треской и апельсином, Farmina N&D Low'
		},
		{
			name: 'Sirius',
			img: '../itemImage/Sirius.jpg',
			id: 4,
			price: 150,
			description: 'Сухой корм для стерилизованных кошек (птица), Sirius'
		},
	],
	cannedFood: [
		{
			name: 'Royal Canin',
			img: '../itemImage/RoyalCaninWet.jpg',
			id: 1,
			price: 60,
			choices: ['Лосось', 'Кролик', 'Курица', 'Утка'],
			description: 'Паучи кусочки в соусе для стерилизованных кошек старше 1 года, Royal Canin Sterilized'
		},
		{
			name: 'Purina Pro Plan',
			img: '../itemImage/ProPlanWet.jpg',
			id: 2,
			price: 60,
			choices: ['Индейка', 'Курица'],
			description: 'Консервы для взрослых кошек, кусочки с Индейкой в желе, Purina Pro Plan Adult'
		},
		{
			name: 'Bozita',
			img: '../itemImage/Bozita.jpg',
			id: 3,
			price: 100,
			description: 'Паучи BOZITA Кусочки в соусе для котят и кошек с СЕЛЬДЬЮ'
		},
	],
	treats: [
		{
			name: 'Кошачья мята',
			img: '../itemImage/Catnip.png',
			id: 1,
			price: 115,
			description: 'Кошачья мята, Деревенские лакомства'
		},
		{
			name: 'Мясные колбаски',
			img: '../itemImage/MeatSausages.jpg',
			id: 2,
			price: 150,
			description: 'Мясные колбаски из ягненка (лакомство для кошек), Деревенские лакомства'
		},
		{
			name: 'Овес',
			img: '../itemImage/Avena.jpeg',
			id: 3,
			price: 80,
			description: 'Лакомство для кошек Трава для кошек овес, TiTBiT'
		}
	],
	toys: [
		{
			name: 'Мышь',
			img: '../itemImage/Mouse.jpg',
			id: 1,
			price: 35,
			description: 'Игрушка для кошек "Мышь серая", 4,5-5 см'
		},
		{
			name: 'Мяч',
			img: '../itemImage/Ball.jpg',
			id: 2,
			price: 30,
			description: 'Игрушка для кошек "Мяч для гольфа", d=4 см'
		},
		{
			name: 'Мышь на подставке',
			img: '../itemImage/MouseHigh.jpg',
			id: 3,
			price: 900,
			description: 'Игрушка для кошек "Мышь на подставке", d14*25 см'
		}
	]
};

export default dbItem;