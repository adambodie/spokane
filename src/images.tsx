import postFalls from './images/post-falls.jpg';
import cda from './images/cda.jpg';
import cda2 from './images/cda2.jpg';
import riverfront from './images/riverfront.jpg';
import upper from './images/upper.jpg';
import lower from './images/lower.jpg';
import manito from './images/manito.jpg';
import huntington from './images/huntington.jpg';
import spokane from './images/spokane.jpg';
import cheesecake from './images/cheesecake.jpg';
import doner from './images/doner.jpg';
import elk from './images/elk.jpg';
import bacon from './images/bacon.jpg';
import berry from './images/berry.jpg';
import fry from './images/fry.jpg';
import ibajella from './images/ibajella.jpg';
import nitrogen from './images/nitrogen.jpg';
import oreo from './images/oreo.jpg';


const banners = [cheesecake, doner, elk, bacon, berry, fry, ibajella, nitrogen, oreo];

function shuffleBanners(items: any[]) {
	const array = items;
	let currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

const IMAGES = [
	{ 
		id: 0, 
		title: riverfront, 
		alt: "Riverfront Park", 
		minimum: 0,
		maximum: 25,  
		menu: shuffleBanners(banners)[0],
		paragraph: "Riverfront Park, the centerpiece of Spokane along the Spokane River, was home of the 1974 World's Fair, where many of its features still exist today, from the Pavilion to the Clock Tower.  During Labor Day weekend, which I was there for, it is the site of Pig Out in the Park, a free festival of many foods and musical performances since 1979.  I wasn't expecting an event at the park, though it didn't surprise me that one would be held on Labor Day Weekend, but looking at all the people and food carts provided an unexpected surprise.  I wasn't planning on attending but I'm glad I did." 	
	},
	{ 
		id: 1, 
		title: upper, 
		alt: "Upper Spokane Falls", 
		minimum: 26,
		maximum: 37,
		menu: shuffleBanners(banners)[1],
		paragraph: "Upper Spokane Falls, along the Spokane River, is a set of small waterfalls split by Canada Island, located in Riverfront Park.  It is home of the Upper Falls Dam, built in 1920.  The city of Spokane was originally named Spokane Falls before shortening its name to Spokane.  Though the falls themselves aren't all that big nor tall, I enjoyed the scenic views of the river and the city walking along the bridges and the island." 	
	},
	{ 
		id: 2, 
		title: lower, 
		alt: "Lower Spokane Falls", 
		minimum: 38,
		maximum: 53,
		menu: shuffleBanners(banners)[2], 
		paragraph: "The Lower Spokane Falls is further downstream, and also features a dam, the Monroe Street Dam.  The Monroe Street Dam was built in 1890 and is the longest running hydroelectric dam in Washington.  The lower falls were more impressive than the upper falls, and the viewpoints were closer to the falls themselves.  I spent more time here, mainly from Huntington Park and the view from the Skyride."
	},
	{ 
		id: 3, 
		title: postFalls, 
		alt: "Post Falls", 
		minimum: 54,
		maximum: 60,
		menu: shuffleBanners(banners)[3],
		paragraph: "Post Falls is located in the Idaho Panhandle along the Spokane River.  With a population of around 30,000, it is the 10th largest city in Idaho.  Post Falls is the westernmost city in Idaho along I-90, a bedroom community of Spoane and located west of Coeur d'Alene.  Post Falls wasn't the main reason to visit the Idaho Panhandle, and definitely not the most impressive, but stopping in Falls Park and seeing the Spokane River and Dam brought a peaceful feeling in a mountainous Pacific Northwest setting."
	}, 
	{ 
		id: 4, 
		title: cda, 
		alt: "Coeur d'Alene Resort", 
		minimum: 61,
		maximum: 98, 
		menu: shuffleBanners(banners)[4],
		paragraph: "The Coeur d'Alene Resort, located along Lake Coeur d'Alene, is the third tallest building in Idaho.  The hotel was founded in 1965, but the Lake Tower, its primary building, was completed in 1986.  The resort is known for its golf course, particularly its floating green on the 14th hole.  I briefly entered the hotel, as I had lunch at one of its restaurants, the Dockside, and it obviously looked every bit of luxury that it is advertised.  The scenery around the hotel was marvelous, not only for the Lake, but also the boats and the Floating Boardwalk and footbridge." 
	},
	{ 
		id: 5, 
		title: cda2, 
		alt: "Coeur d'Alene", 
		minimum: 99,
		maximum: 113, 
		menu: shuffleBanners(banners)[5],
		paragraph: "Coeur d'Alene, with a population of about 45,000 is the largest city in the Idaho Panhandle.  Sitting on the shores of Lake Coeur d'Alene, the city of Coeur d'Alene is a popular tourist spot in the region due to its activities along the lake, as well as the Coeur d'Alene Resort.  It is name for the Native American tribe in the region.  Outside of the Resort, the city itself was charming and hip, with lots of fun shops and restaurants.  I found a funky cafe, Calypsos Coffee and Creamery, and had myself a tasty Cappuccino.  Later, I walked in a gift shop and bought a shot glass with a funny logo for Darth Tater.  It was too cute to pass up Darth Tater, but didn't want a shirt, so I got a shot instead.  Coeur d'Alene was an exciting hip place to visit, with beautiful scenery and fun atmosphere, a perfect place to be."
	},
	{ 
		id: 6, 
		title: spokane, 
		alt: "Spokane",
		minimum: 114,
		maximum: 128,
		menu: shuffleBanners(banners)[6],
		paragraph:"Spokane, with a population of around 220,000 is the largest city in Eastern Washington and second in Washington behind Seattle.  Its nickname is the 'Lilac City,' as it is home of the Syringa Spokane, a pink double lilac variety named for the city.  Spokane is known as the birthplace of Father's Day and famous for hosting the first environmentally themed World's Fair at Expo '74.  Overall, Spokane was a nice place to visit.  The city is big enough to be a metro city, with culture, decent skyscrapers, but also with the less desirable parts that comes with any big city.  The scenery reminded me somewhat of Bend, Oregon, but a bigger population and less of the high desert scenery." 
	}, 	
	{ 
		id: 7, 
		title: manito, 
		alt: "Manito Park", 
		minimum: 129,
		maximum: 148, 
		menu: shuffleBanners(banners)[7],
		paragraph: "Manito Park is located south of downtown Spokane, and is home of the Botanical Gardens.  It opened in 1913 and was also home of a Zoo until 1937.  Today, it is home of many gardens, including the Duncan Gardens, Lilac Gardens and the Nishinomiya Tsutakawa Japanese Garden, named after Spokane's sister city in Japan.  I've seen a few gardens, from Portland to Vienna, even Huntsville, Alabama.  Manito Park's Japanese Gardens were peaceful, not nearly as big as Portland's (to no surprise), but nonetheless fitting for a Japanese Garden.  Walking through the best part of Manito Park, the Duncan Gardens, made me think of a much much smaller version of the gardens of Schönbrunn Palace in Vienna.  The bountiful flowers, perfectly lined up, along with the fountain in the middle, was the best place to visit in Manito Park."
	},
	{ 
		id: 8, 
		title: huntington, 
		alt: "Huntington Park", 
		minimum: 149,
		maximum: 175,
		menu: shuffleBanners(banners)[8],
		paragraph: "Just west of Riverfront Park is the new Huntington Park, offering great views of Lower Spokane Falls and surrounding area from riverside to the Skyride, a scenic cable ride down from its beginning of Riverfront Park.  This wasn't on the agenda of my visit, but its proximity and great views made it a place I wound up visiting and loving.  Walking down the path, getting closer to the bottom, provided great spots along the way, both seeing the falls, but also of the Spokane River itself, and the Monroe Street Bridge.  Looking up and watching the Skyride go down and up the scenic path was fun, providing fun photography opportunities.  As for the Skyride itself, it provided great opportunities for pictures not possible on ground.  My only complaint was that I was stuck in the middle of three pods, so some of my views were blocked with other pods."
	}
];

export default IMAGES;
