import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

// Placeholder image
//import placeholderImg from "@assets/generated_images/product_placeholder_image.png";

// Mock Data
const PRODUCTS = [
  // Peppers & Herbs
  {
    id: 1,
    name: "Long Red Chili Peppers",
    category: "Peppers & Herbs",
    weight: "Case ~5.5 lb",
    image:
      "https://images.unsplash.com/photo-1596119414935-5de81441482e?q=80&w=762&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Long Green Chili Peppers",
    category: "Peppers & Herbs",
    weight: "Case ~28 lb",
    image:
      "https://images.unsplash.com/photo-1697801536084-4ea925f250df?q=80&w=617&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Long Hot Peppers",
    category: "Peppers & Herbs",
    weight: "Case ~15 lb",
    image:
      "https://images.unsplash.com/photo-1637683085083-fa760c1fd0af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Curry Leaves",
    category: "Peppers & Herbs",
    weight: "Bunch",
    image:
      "https://images.unsplash.com/photo-1623048839784-a5608f7a7097?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "Rosemary",
    category: "Peppers & Herbs",
    weight: "1 bag (12 bunches)",
    image:
      "https://images.unsplash.com/photo-1623249635395-0e03e7449ac8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Fruit
  {
    id: 6,
    name: "Pomegranate",
    category: "Fruit",
    weight: "Case 6-10 ct",
    image:
      "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7,
    name: "Honeydew Melon",
    category: "Fruit",
    weight: "1 ct",
    image:
      "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Cantaloupe",
    category: "Fruit",
    weight: "1 ct",
    image:
      "https://plus.unsplash.com/premium_photo-1700089174974-871b8ea3731d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Blueberries",
    category: "Fruit",
    weight: "Case 12 clamshells",
    image:
      "https://plus.unsplash.com/premium_photo-1674347951519-ba11f53502ff?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Blackberries",
    category: "Fruit",
    weight: "Case 12 clamshells",
    image:
      "https://images.unsplash.com/photo-1723580892175-2e267106c089?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "Strawberries",
    category: "Fruit",
    weight: "Case 8 clamshells",
    image:
      "https://plus.unsplash.com/premium_photo-1675731118661-15dc54c11130?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Bananas",
    category: "Fruit",
    weight: "Case 40 lb",
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "Green Papaya",
    category: "Fruit",
    weight: "Case ~32 lb",
    image:
      "https://www.melissas.com/cdn/shop/files/image-of-green-papaya-fruit-37423579955244_600x600.jpg?v=1715291380",
  },
  {
    id: 14,
    name: "Watermelon",
    category: "Fruit",
    weight: "1 ct",
    image:
      "https://images.unsplash.com/photo-1708982553355-794739c6693e?q=80&w=1225&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    name: "Roma Tomatoes",
    category: "Fruit",
    weight: "Case 25 lb",
    image:
      "https://plus.unsplash.com/premium_photo-1675237625464-cf6aa5c1df41?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    name: "USA Tomatoes (5x6)",
    category: "Fruit",
    weight: "Case 25 lb",
    image:
      "https://www.growingproduce.com/wp-content/uploads/2025/06/w_WonderStar-Pink-tomato-PanAmericanSeed_gallery.jpg",
  },

  // Leafy Greens & Asian Greens
  {
    id: 17,
    name: "Romaine Hearts",
    category: "Leafy Greens",
    weight: "Case 12 ct",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhr_XHzOD4nw72nXImO6qx6g0uhTOXn3Csg&s",
  },
  {
    id: 18,
    name: "Shanghai Bok Choy",
    category: "Leafy Greens",
    weight: "Case 25-30 lb",
    image: "https://specialtyproduce.com/sppics/12837.png",
  },
  {
    id: 19,
    name: "Baby Shanghai Bok Choy",
    category: "Leafy Greens",
    weight: "Case 25 lb",
    image:
      "https://www.friedas.com/wp-content/uploads/2012/02/Friedas_Shanghai_Bok_Choy3.jpg",
  },
  {
    id: 20,
    name: "Baby Bok Choy Tips",
    category: "Leafy Greens",
    weight: "Case 20 lb",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZw41Gg6Us0cCnV-Gi7Y87-otfSsia785UA&s",
  },
  {
    id: 21,
    name: "Baby Bok Choy",
    category: "Leafy Greens",
    weight: "Case 25-30 lb",
    image:
      "https://mcen.alpremium.ca/cdn/shop/products/baby-bok-choy_dca75304-237b-4f00-af27-4bf58ce0448e.jpg?v=1587571685",
  },
  {
    id: 22,
    name: "Big Bok Choy",
    category: "Leafy Greens",
    weight: "Case 35–40 lb",
    image:
      "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjMwNjlhZDMwNGU3NmQ2OGI5YTBiMjBmY2I5ZmYwODVlIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=c23f346ce136e8997b8275e6c989754258536d4bdbc16db2272b67337c2526ed",
  },
  {
    id: 23,
    name: "Yu Choy (Choy Sum)",
    category: "Leafy Greens",
    weight: "Case 25 lb",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2mkreeDwk_QuHaKGtS-Go9GcE2-xW6SmWXg&s",
  },
  {
    id: 24,
    name: "A-Choy",
    category: "Leafy Greens",
    weight: "Case 25 lb",
    image: "https://specialtyproduce.com/sppics/24035.png",
  },
  {
    id: 25,
    name: "Chinese Celery",
    category: "Leafy Greens",
    weight: "Case 25 lb",
    image:
      "https://naturesproduce.com/wp-content/uploads/2018/08/chinesecelery.png",
  },
  {
    id: 26,
    name: "Spinach",
    category: "Leafy Greens",
    weight: "Case 20 lb",
    image:
      "https://veggieharvest.com/wp-content/uploads/2020/11/spinach-1170x780.jpg",
  },
  {
    id: 27,
    name: "Pea Shoots",
    category: "Leafy Greens",
    weight: "Case 10 lb",
    image:
      "https://www.westcoastseeds.com/cdn/shop/products/Microgreen-Pea-Shoots-Seeds-MG592-1_grande.jpg?v=1610577917",
  },

  // Vegetables
  {
    id: 28,
    name: "Snow Peas",
    category: "Vegetables",
    weight: "Case 10 lb",
    image:
      "https://www.taylorfarms.com/wp-content/uploads/2023/10/Snow-Peas.webp",
  },
  {
    id: 29,
    name: "Long Green Beans",
    category: "Vegetables",
    weight: "Case 10 lb",
    image:
      "https://www.everwilde.com/media//0800/resized/OYARLOG-A-Organic-Green-Yard-Long-Bean-Seeds_medium.jpg",
  },
  {
    id: 30,
    name: "Baby Kale",
    category: "Vegetables",
    weight: "Case 2 lb",
    image:
      "https://cdn11.bigcommerce.com/s-rl94rv7pw2/images/stencil/1280x1280/products/1035/2096/thumbnail__99675.1753997855.jpg?c=1",
  },
  {
    id: 31,
    name: "Kale",
    category: "Vegetables",
    weight: "Case 12–24 bunches",
    image: "https://cdn.britannica.com/74/181374-050-83F7B492/kale-leaves.jpg",
  },
  {
    id: 32,
    name: "Asparagus",
    category: "Vegetables",
    weight: "Box 11 lb",
    image:
      "https://www.freshpoint.com/wp-content/uploads/commodity-asparagus.jpg",
  },
  {
    id: 33,
    name: "Yellow Potatoes",
    category: "Vegetables",
    weight: "Bag 50 lb",
    image:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://lesfermesdusoleil.com/wp-content/uploads/2023/03/patate-jaune-final.jpg",
  },
  {
    id: 34,
    name: "White Potatoes",
    category: "Vegetables",
    weight: "Bag 50 lb",
    image: "https://specialtyproduce.com/sppics/20151.png",
  },
  {
    id: 35,
    name: "Baking Potatoes",
    category: "Vegetables",
    weight: "Bag 50 lb",
    image:
      "https://groombridgefarmshop.co.uk/cdn/shop/products/Bakingpotatoes.jpg?v=1623251567",
  },
  {
    id: 36,
    name: "Italian Eggplant",
    category: "Vegetables",
    weight: "Case 20-22 lb",
    image: "https://www.pridescorner.com/_ccLib/image/plants/DETA-4420.jpg",
  },
  {
    id: 37,
    name: "Red Radish",
    category: "Vegetables",
    weight: "1 Bag (1 lb)",
    image: "https://specialtyproduce.com/sppics/1241.png",
  },
  {
    id: 38,
    name: "White Radish (Daikon)",
    category: "Vegetables",
    weight: "Case 40 lb",
    image:
      "https://blog.suvie.com/wp-content/uploads/2021/06/11302341456_51b6693c5a_b.jpg",
  },
  {
    id: 39,
    name: "Winter Melon (Small)",
    category: "Vegetables",
    weight: "1 ct",
    image:
      "https://i.etsystatic.com/24455782/r/il/2e0d83/2509227716/il_570xN.2509227716_gda9.jpg",
  },
  {
    id: 40,
    name: "Winter Melon (Large)",
    category: "Vegetables",
    weight: "1 ct",
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/2020/04/ash-gourd-732x549-thumbnail.jpg",
  },
  {
    id: 41,
    name: "Bitter Melon",
    category: "Vegetables",
    weight: "Case 10–20 lb",
    image:
      "https://sharonpalmer.com/wp-content/uploads/2014/11/bitter-melon-image-34-1024x768.jpg",
  },
  {
    id: 42,
    name: "Butternut Squash",
    category: "Vegetables",
    weight: "Case 40 lb",
    image:
      "https://healthyfamilyproject.com/wp-content/uploads/2020/05/Butternut-Squash-background.jpg",
  },

  // Mushrooms
  {
    id: 43,
    name: "King Oyster Mushrooms",
    category: "Mushrooms",
    weight: "Box 3 lb",
    image:
      "https://cdn11.bigcommerce.com/s-vaypr1abh8/images/stencil/1280x1280/products/143/955/king-oyster-rtf__34532.1757971454.jpg?c=1",
  },
  {
    id: 44,
    name: "Cremini (Cream) Mushrooms",
    category: "Mushrooms",
    weight: "Bag/Box 5 lb",
    image:
      "https://www.mushroomsubstrate.com/cdn/shop/articles/crimini_mushrooms_1.jpg?v=17257510650",
  },
  {
    id: 45,
    name: "Enoki Mushrooms",
    category: "Mushrooms",
    weight: "Case 25×200 g",
    image: "https://specialtyproduce.com/sppics/704.png",
  },

  // Pantry & Sauces
  {
    id: 53,
    name: "Sweet Chili Sauce",
    category: "Pantry & Sauces",
    weight: "4 × 4.5 L / case",
    image:
      "https://www.daringgourmet.com/wp-content/uploads/2019/07/Sweet-Chili-Sauce-3-square.jpg",
  },
  {
    id: 54,
    name: "Garlic Chili Sauce",
    category: "Pantry & Sauces",
    weight: "4 × 4.5 L / case",
    image:
      "https://www.chilipeppermadness.com/wp-content/uploads/2022/08/Chili-Garlic-Sauce-SQ.jpg",
  },
  {
    id: 55,
    name: "Oyster Sauce (Lee Kum Kee)",
    category: "Pantry & Sauces",
    weight: "6 × 2.27 kg / case",
    image:
      "https://cdn-akamai.lkk.com/foodservices/-/media/kum-chun-brand-oyster-flavored-sauce-5-lb-2020.png?h=400&iar=0&mh=400&mw=310&w=195&hash=A4EA8619239BBD7727BCEE9274184D2A",
  },
  {
    id: 56,
    name: "Oyster Sauce (Chung Brand)",
    category: "Pantry & Sauces",
    weight: "6 × 2.27 kg / case",
    image:
      "https://mi.alpremium.ca/cdn/shop/products/7889514314-1.jpg?v=1618430313",
  },
  {
    id: 57,
    name: "Oyster Sauce (Panda)",
    category: "Pantry & Sauces",
    weight: "6 × 2.27 kg / case",
    image:
      "https://cdn-akamai.lkk.com/foodservices/-/media/feature/product/foodservices/oyster-sauce/panda-oyster/pandaos_5lb_jug_10in-1/panda-brand-oyster-flavored-sauce-5-lb-pp_2020.jpg?h=400&iar=0&mh=400&mw=310&w=195&hash=C78143AB6D5BFC7DEB700900D6F19F2F",
  },
  {
    id: 58,
    name: "Fish Sauce (Lucky Brand)",
    category: "Pantry & Sauces",
    weight: "12 × 750 ml / case",
    image:
      "https://mi.alpremium.ca/cdn/shop/products/0127888-9.jpg?v=1611844250",
  },
  {
    id: 59,
    name: "Dark Soy Sauce",
    category: "Pantry & Sauces",
    weight: "4 × 4.5 L / case",
    image:
      "https://myjapaneseworld.com/cdn/shop/articles/Soy_Sauce_Dark_3_Final_2c3121cc-4ca8-4a96-8e5c-871972e2acfa.jpg?v=1754268358",
  },
  {
    id: 60,
    name: "Light Soy Sauce",
    category: "Pantry & Sauces",
    weight: "4 × 4.5 L / case",
    image:
      "https://www.pearlriverbridge.com/storage/uploads/images/202410/16/1729059638_giLNQViZ9F.webp",
  },
  {
    id: 61,
    name: "ABC Sweet Soy Sauce",
    category: "Pantry & Sauces",
    weight: "6 × 620 ml / case",
    image: "https://www.kroger.com/product/images/xlarge/front/0071184411008",
  },
  {
    id: 62,
    name: "Barbecue Sauce (Koon Chun)",
    category: "Pantry & Sauces",
    weight: "12 × 510 g / case",
    image: "https://images.cdn.saveonfoods.com/zoom/00020717240087.jpg",
  },
  {
    id: 63,
    name: "Black Bean Garlic Sauce",
    category: "Pantry & Sauces",
    weight: "12 × 368 g / case",
    image:
      "https://digital.loblaws.ca/PCX/20319201_EA/en/1/7889576002_enfr_front_centre_marketing_GS1_Ecommerce_250.png",
  },
  {
    id: 64,
    name: "Ground Bean Sauce",
    category: "Pantry & Sauces",
    weight: "12 × 368 g / case",
    image: "https://i.ebayimg.com/images/g/0BIAAOSwF5NeyWB9/s-l400.jpg",
  },
  {
    id: 65,
    name: "Chili Paste",
    category: "Pantry & Sauces",
    weight: "12 × 368 g / case",
    image:
      "https://nomadette.com/wp-content/uploads/2022/06/Nam-Prik-Pao-Thai-Roasted-Chilli-Paste.jpg",
  },
  {
    id: 66,
    name: "White Vinegar",
    category: "Pantry & Sauces",
    weight: "4 × 4 L / case",
    image:
      "https://digital.loblaws.ca/PCX/20060473_EA/en/2/20060473_enfr_angle_250.png",
  },
  {
    id: 67,
    name: "Sugar",
    category: "Pantry & Sauces",
    weight: "25 kg / bag",
    image:
      "https://png.pngtree.com/png-clipart/20241121/original/pngtree-white-sugar-png-image_17275581.png",
  },
  {
    id: 68,
    name: "Salt",
    category: "Pantry & Sauces",
    weight: "20–25 kg / bag",
    image:
      "https://seasalt.com/uploads/cms/salt-guide-images/mediterra-mediterranean-sea-salt-small-bowl-desktop.jpg",
  },
  {
    id: 69,
    name: "Cashew Nuts",
    category: "Pantry & Sauces",
    weight: "25 lb / case",
    image:
      "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/BigBead/health_benefits_of_cashews_bigbead/1800x1200_getty_rf_health_benefits_of_cashews_bigbead.jpg?resize=750px:*&output-quality=75",
  },
  {
    id: 70,
    name: "Peanuts",
    category: "Pantry & Sauces",
    weight: "25 lb / case",
    image:
      "https://sapienskitchen.com/wp-content/uploads/2024/09/ten-reasons-to-avoid-peanuts-blog-1000x500-1.jpg",
  },
  {
    id: 71,
    name: "Dried Black Fungus (Sliced)",
    category: "Pantry & Sauces",
    weight: "10 lb / case",
    image:
      "https://image.made-in-china.com/202f0j00qaAUloMPZdpI/Dried-White-Black-Fungus-Slice-Dehydrated-Fungus.webp",
  },
  {
    id: 72,
    name: "Dried Red Chili Segments",
    category: "Pantry & Sauces",
    weight: "10 lb / case",
    image:
      "https://s.alicdn.com/@sc04/kf/Ha3059baeea974066941045a64a17379bY/Manufacturer-Supplied-Dehydrated-Chili-Segments-Rings-Cherry-Peppers-for-Hot-Pot-Sauce-Barbecue-Single-Spices-Herbs-Collection.png",
  },
  {
    id: 73,
    name: "Dried Red Chili (Crushed)",
    category: "Pantry & Sauces",
    weight: "10 lb / case",
    image: "https://i.ebayimg.com/images/g/RQsAAOSw0MNgvQwZ/s-l400.jpg",
  },
  {
    id: 74,
    name: "Dry Garlic Granules",
    category: "Pantry & Sauces",
    weight: "25 lb / case",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_UNs2BqtUgNRRUNTiO44SxeyMOh07SM4ww&s",
  },
  {
    id: 75,
    name: "Palm Sugar",
    category: "Pantry & Sauces",
    weight: "24 × 454 g / case",
    image:
      "https://nuttyyogi.com/cdn/shop/products/Coconut_Suger_717159ce-a14a-4fc1-8724-e4e3cd5a32ef.jpg?v=1674212495",
  },
  {
    id: 76,
    name: "Jasmine Rice (Y&Y)",
    category: "Pantry & Sauces",
    weight: "25 kg / bag",
    image:
      "https://mcen.alpremium.ca/cdn/shop/products/photo-editing12_grande.jpg?v=1601533996",
  },
  {
    id: 77,
    name: "Jasmine Rice (Thai Hom Mali)",
    category: "Pantry & Sauces",
    weight: "25 kg / bag",
    image:
      "https://i5.walmartimages.com/asr/f9de5051-ef76-4299-b336-73d906d6ca35.54cbb61765ec9c06b4111b2f86290ac8.png",
  },
  {
    id: 78,
    name: "Erawan Brand Medium Rice Sticks (Pad Thai)",
    category: "Pantry & Sauces",
    weight: "30 × 454 g",
    image:
      "https://apa.si.edu/picklesandtea/wp-content/uploads/sites/14/2014/05/rice-noodles.jpg",
  },
  {
    id: 79,
    name: "Far East Batter Mix",
    category: "Pantry & Sauces",
    weight: "20 kg / bag",
    image:
      "https://www.luckysupply.ca/cdn/shop/products/39-_1_53584b04-97a0-4eb2-b1f6-2aa2ea960cbe.jpg?v=1623792563",
  },
  {
    id: 80,
    name: "Mae Ploy Coconut Cream",
    category: "Pantry & Sauces",
    weight: "24 × 400 ml / case",
    image:
      "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6ImNiNmRmMGFlMjBhOTlmMTM5OWNmY2IxZjI3NmQ1OWY3LmpwZzIwMjUwODA4LTM3Mzc5MzYteGN0YnJtIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=b992aa2bf2fe0cab767cdb2d0fc4e06c34aaa6410840ad37cd17f429bb58da9c",
  },
  {
    id: 81,
    name: "Aroy-D Coconut Milk",
    category: "Pantry & Sauces",
    weight: "12 × 1 L / case",
    image: "https://mi.alpremium.ca/cdn/shop/products/yenai.jpg?v=1597200481",
  },
  {
    id: 82,
    name: "Carnation Milk",
    category: "Pantry & Sauces",
    weight: "48 × 370 ml / case",
    image:
      "https://www.smuckerawayfromhome.ca/wp-content/uploads/2016/06/carnation-milk-evaporated-354ml-foodservice.png",
  },
  {
    id: 83,
    name: "Bamboo Shoots (Sliced)",
    category: "Pantry & Sauces",
    weight: "24 × 567 g / case",
    image:
      "https://www.cookinghub.com/wp-content/uploads/2024/05/bamboo-shoots.jpg",
  },
  {
    id: 84,
    name: "Young Baby Corn (Cut)",
    category: "Pantry & Sauces",
    weight: "24 × 425 g / case",
    image:
      "https://haisue.ca/cdn/shop/files/Cock-Brand-Young-Baby-Corn-Cut-425g.jpg?v=1743501667&width=1500",
  },
  {
    id: 85,
    name: "Young Baby Corn (Whole)",
    category: "Pantry & Sauces",
    weight: "24 × 425 g / case",
    image:
      "https://www.tntsupermarket.com/media/catalog/product/6/1/6101600101690566889_1.jpg?auto=webp&format=pjpg&width=556&height=556&fit=cover",
  },
  {
    id: 86,
    name: "Pickled Sour Mustard Greens",
    category: "Pantry & Sauces",
    weight: "24 × 454 g / case",
    image:
      "https://images.getrecipekit.com/20240306051334-_dsf6295.JPG?aspect_ratio=1:1&quality=90&",
  },
  {
    id: 87,
    name: "Radish Strips",
    category: "Pantry & Sauces",
    weight: "10 lb / case",
    image:
      "https://www.carvingajourney.com/wp-content/uploads/2023/01/DriedRadish002.jpg",
  },

  // Frozen & Refrigerated
  {
    id: 88,
    name: "Fish Fillet",
    category: "Frozen & Refrigerated",
    weight: "10 kg / case",
    image:
      "https://www.thedinnerbite.com/wp-content/uploads/2023/03/air-fryer-fish-fillets-img-6.jpg",
  },
  {
    id: 89,
    name: "Clam Meat",
    category: "Frozen & Refrigerated",
    weight: "10 lb / case",
    image: "https://jfoodie.ca/cdn/shop/files/IMG_2332_Copy.png?v=1757276920",
  },
  {
    id: 90,
    name: "Whole Clams",
    category: "Frozen & Refrigerated",
    weight: "10 lb / case",
    image:
      "https://gimlifish.com/cdn/shop/products/white_clams_530x@2x.jpg?v=1611341125",
  },
  {
    id: 91,
    name: "Frozen Corn",
    category: "Frozen & Refrigerated",
    weight: "20 lb / case",
    image:
      "https://dishnthekitchen.com/wp-content/uploads/2021/08/squarefrozencorn.jpg",
  },
  {
    id: 92,
    name: "Carrot & Pea Mix",
    category: "Frozen & Refrigerated",
    weight: "20 lb / case",
    image:
      "https://www.mariaushakova.com/wp-content/uploads/2020/10/Peas-and-Carrots-1200.jpg",
  },
  {
    id: 93,
    name: "Carrot, Pea & Corn Mix",
    category: "Frozen & Refrigerated",
    weight: "20 lb / case",
    image:
      "https://m.ftscrt.com/food/7b303745-26dc-4d01-8079-a1326b6b7ded_lg_sq.jpg",
  },
  {
    id: 94,
    name: "Green Peas",
    category: "Frozen & Refrigerated",
    weight: "20 lb / case",
    image:
      "https://www.jeyashriskitchen.com/wp-content/uploads/2015/02/Frozen-Peas.jpg",
  },
  {
    id: 95,
    name: "Fried Tofu (Bucket)",
    category: "Frozen & Refrigerated",
    weight: "10 kg / case",
    image:
      "https://simpleveganblog.com/wp-content/uploads/2023/04/Crispy-pan-fried-tofu.jpg",
  },

  // Specialty Leaves & Aromatics
  {
    id: 96,
    name: "Kaffir Lime Leaves",
    category: "Specialty Leaves & Aromatics",
    weight: "10 lb / case",
    image:
      "https://cdn.shopify.com/s/files/1/0076/4339/8233/files/shutterstock_434761603_600x600.jpg?v=1659435771",
  },
  {
    id: 97,
    name: "Pandan Leaves",
    category: "Specialty Leaves & Aromatics",
    weight: "10 lb / case",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzSrwmby4jHSuqhOwNcaWPUQoXxaVaV4fibQ&s",
  },
  {
    id: 98,
    name: "Galangal",
    category: "Specialty Leaves & Aromatics",
    weight: "30 lb / case",
    image: "https://www.tilda.com/wp-content/uploads/2022/04/Galangal.jpg",
  },
  {
    id: 99,
    name: "Lemongrass (Sliced)",
    category: "Specialty Leaves & Aromatics",
    weight: "10 lb / case",
    image:
      "https://harvesttotable.com/wp-content/uploads/2008/07/Lemon-grass-sliced1.jpg",
  },
  {
    id: 100,
    name: "Lemongrass (Whole)",
    category: "Specialty Leaves & Aromatics",
    weight: "30 lb / case",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGjZek40DQsiARcdJGGg9e1g_sxxktPc8MnQ&s",
  },
  {
    id: 101,
    name: "Lemongrass (Ground)",
    category: "Specialty Leaves & Aromatics",
    weight: "10 lb / case",
    image:
      "https://thespiceway.com/cdn/shop/products/lemongrass.jpg?v=1751439054",
  },
  {
    id: 102,
    name: "Banana Leaves",
    category: "Specialty Leaves & Aromatics",
    weight: "30 lb / case",
    image:
      "https://nossotalho.com/cdn/shop/products/Banana-Leaves-Frozen_600x.jpg?v=1627579610",
  },

  // Oils & Essentials
  {
    id: 103,
    name: "Vegetable Oil",
    category: "Oils & Essentials",
    weight: "4 × 16 L / case",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAcZq-ygcmne2R9QBI05w8-gW8gjO9TLTl2A&s",
  },
  {
    id: 104,
    name: "Canola Oil",
    category: "Oils & Essentials",
    weight: "4 × 16 L / case",
    image:
      "https://cdn.britannica.com/16/234016-050-0220A0BE/canola-oil-and-canola-blossoms.jpg",
  },
  {
    id: 105,
    name: "Chicken Bouillon Powder (Knorr Poulet)",
    category: "Oils & Essentials",
    weight: "6 × 2 kg / case",
    image:
      "https://digital.loblaws.ca/PCX/20154074_EA/en/1/6335001622_enfr_front_centre_marketing_GS1_Ecommerce_400.png",
  },
  {
    id: 106,
    name: "Aquafina Bottled Water",
    category: "Oils & Essentials",
    weight: "24 × 500 ml / case",
    image:
      "https://i5.walmartimages.com/asr/92e29d31-1ee5-4cca-8eaa-8d13cd96117d.7ee0ad8f18351ef75e639bab2b69c7fc.jpeg",
  },

  // Packaging & Supplies
  {
    id: 107,
    name: "S5 White Shopping Bags",
    category: "Packaging & Supplies",
    weight: "1,000 pcs / case",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUYzORNqru55Z23eG3nmEfrXVpAE0nEo6pSg&s",
  },
  {
    id: 108,
    name: "Roll Bags (Large)",
    category: "Packaging & Supplies",
    weight: "6 rolls / case",
    image:
      "https://clearbags.ca/pub/media/catalog/product/p/r/pr43648-heavy-duty-pe-storage-bag-roll-1.jpg",
  },
  {
    id: 109,
    name: "Paper Bags",
    category: "Packaging & Supplies",
    weight: "500 pcs / bundle",
    image:
      "https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/C82C717CF1574408A909E323F43DBE9C/10584498_2.jpg",
  },
  {
    id: 110,
    name: "Food Wrap (Plastic Wrap)",
    category: "Packaging & Supplies",
    weight: "4 rolls / case",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZVBxcrDl2JU04MMYP-pXLhIfW38EWFsoFQ&s",
  },
  {
    id: 111,
    name: "Dinner Napkins",
    category: "Packaging & Supplies",
    weight: "4,000 pcs / case",
    image: "https://m.media-amazon.com/images/I/71BMHjR+pvL.jpg",
  },
  {
    id: 112,
    name: "Bathroom Tissue",
    category: "Packaging & Supplies",
    weight: "48 rolls / case",
    image: "https://m.media-amazon.com/images/I/71uH0oAF2VL.jpg",
  },
  {
    id: 113,
    name: "Paper Bowls 1100 ml",
    category: "Packaging & Supplies",
    weight: "500 pcs / case",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa15GP419YZWzoM70mtF3uGneRMNmgMvaQ4g&s",
  },
  {
    id: 114,
    name: "Paper Bowls 1300 ml",
    category: "Packaging & Supplies",
    weight: "500 pcs / case",
    image:
      "https://kispaper.ca/cdn/shop/files/44oz.jpg?v=1740776269&width=1946",
  },
  {
    id: 115,
    name: "Plastic Lids 165 mm",
    category: "Packaging & Supplies",
    weight: "500 pcs / case",
    image:
      "https://polarpenguin.ca/cdn/shop/files/165mmPETLid.png?v=1724221090",
  },

  // Original Produce
  {
    id: 46,
    name: "Cooking Onions",
    category: "Vegetables",
    weight: "Bag 50 lb",
    image:
      "https://www.marketsatshrewsbury.com/wp-content/uploads/2022/11/yellow-onions.jpeg",
  },
  {
    id: 47,
    name: "Spanish (Yellow) Onions",
    category: "Vegetables",
    weight: "Bag 50 lb",
    image:
      "https://growhoss.com/cdn/shop/products/yellow-sweet-spanish-utah-onion.jpg?v=1691784853",
  },
  {
    id: 48,
    name: "Carrots (Box)",
    category: "Vegetables",
    weight: "Case 22 lb",
    image:
      "https://cdnimg.webstaurantstore.com/images/products/large/441375/2271533.jpg",
  },
  {
    id: 49,
    name: "Carrots (Bag)",
    category: "Vegetables",
    weight: "Bag 50 lb",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJpx0BKxabciivY28GNUqCfhXBTl_lsbl5QQ&s",
  },
  {
    id: 50,
    name: "Fried Tofu",
    category: "Other",
    weight: "Case 40 ct",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOiYShJNLAKAKmZ5vtY0x-6864K-XvmgA2WA&s",
  },
  {
    id: 51,
    name: "Egg Noodles",
    category: "Other",
    weight: "Per lb",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDN7OAofAVd1uiFGd_N6qOxYaQ7fLg-BwZ1w&s",
  },
  {
    id: 52,
    name: "Glass Noodle Sheets (Mung Bean Starch)",
    category: "Other",
    weight: "Case 10–12 lb",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9OReqACwyeStDGYniQF5CUs54FOSVZc1VQ&s",
  },
    // Missing Sauces & Curry Pastes
  {
    id: 116,
    name: "Sweet Chili Sauce (Glass Bottle)",
    category: "Pantry & Sauces",
    weight: "12 × 730 ml / case",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 117,
    name: "Chili Garlic Sauce (Huy Fong)",
    category: "Pantry & Sauces",
    weight: "3 × 3.5 L / case",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 118,
    name: "Massaman Curry Paste",
    category: "Pantry & Sauces",
    weight: "48 × 114 g / case",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 119,
    name: "Green Curry Paste",
    category: "Pantry & Sauces",
    weight: "48 × 114 g / case",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 120,
    name: "Panang Curry Paste",
    category: "Pantry & Sauces",
    weight: "48 × 114 g / case",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 121,
    name: "Yellow Curry Paste",
    category: "Pantry & Sauces",
    weight: "48 × 114 g / case",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 122,
    name: "Red Curry Paste",
    category: "Pantry & Sauces",
    weight: "48 × 114 g / case",
    image: "https://via.placeholder.com/400",
  },

  // Missing Soy Sauces
  {
    id: 123,
    name: "Mushroom Flavoured Dark Soy Sauce (PRB)",
    category: "Pantry & Sauces",
    weight: "2 × 8 L / case",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 124,
    name: "Dark Superior Soy Sauce (PRB)",
    category: "Pantry & Sauces",
    weight: "2 × 8 L / case",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 125,
    name: "Light Superior Soy Sauce (PRB)",
    category: "Pantry & Sauces",
    weight: "2 × 8 L / case",
    image: "https://via.placeholder.com/400",
  },

  // Canned / Preserved
  {
    id: 126,
    name: "Bamboo Shoot Strips (Canned)",
    category: "Pantry & Sauces",
    weight: "6 × 2950 g / case",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 127,
    name: "Peeled Water Chestnuts",
    category: "Pantry & Sauces",
    weight: "24 × 567 g / case",
    image: "https://via.placeholder.com/400",
  },

  // Dry Goods
  {
    id: 128,
    name: "Dehydrated Minced Garlic",
    category: "Pantry & Sauces",
    weight: "5 lb / bag",
    image: "https://via.placeholder.com/400",
  },

  // Fresh Produce
  {
    id: 129,
    name: "White Mushrooms",
    category: "Mushrooms",
    weight: "Box 5 lb",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 130,
    name: "Red Onions",
    category: "Vegetables",
    weight: "Bag 25 lb",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 131,
    name: "Lemons",
    category: "Fruit",
    weight: "Box 33 lb",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 132,
    name: "Limes",
    category: "Fruit",
    weight: "Box 33 lb",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 133,
    name: "Green Bell Peppers",
    category: "Vegetables",
    weight: "Case 20 lb",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 134,
    name: "Red Bell Peppers",
    category: "Vegetables",
    weight: "Case 20 lb",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 135,
    name: "Habanero Peppers",
    category: "Peppers & Herbs",
    weight: "Box 8 lb",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 136,
    name: "Green Thai Chili",
    category: "Peppers & Herbs",
    weight: "1 lb",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 137,
    name: "Red Thai Chili",
    category: "Peppers & Herbs",
    weight: "1 lb",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 138,
    name: "Jalapeno Peppers",
    category: "Peppers & Herbs",
    weight: "1 lb",
    image: "https://via.placeholder.com/400",
  },

  // Greens & Vegetables
  {
    id: 139,
    name: "Broccoli",
    category: "Vegetables",
    weight: "Case 20 lb",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 140,
    name: "Chinese Broccoli (Gai Lan)",
    category: "Vegetables",
    weight: "Case 30 lb",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 141,
    name: "Cauliflower",
    category: "Vegetables",
    weight: "Case 12 ct",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 142,
    name: "Sweet Potatoes (Yam)",
    category: "Vegetables",
    weight: "Case 40 lb",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 143,
    name: "Taro Root",
    category: "Vegetables",
    weight: "Each",
    image: "https://via.placeholder.com/400",
  },

  // Fruit
  {
    id: 144,
    name: "Avocados",
    category: "Fruit",
    weight: "Case 48 ct",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 145,
    name: "Pineapple",
    category: "Fruit",
    weight: "Case 6–8 ct",
    image: "https://via.placeholder.com/400",
  },

  // Protein
  {
    id: 146,
    name: "Eggs",
    category: "Protein",
    weight: "15 dozen / case",
    image: "https://via.placeholder.com/400",
  },

  // Herbs
  {
    id: 147,
    name: "Thai Basil",
    category: "Peppers & Herbs",
    weight: "1 bunch",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 148,
    name: "Holy Basil",
    category: "Peppers & Herbs",
    weight: "1 bunch",
    image: "https://via.placeholder.com/400",
  },
  {
  id: 149,
  name: "Apple Mango",
  category: "Fruit",
  weight: "5–7 ct / case",
  image: "https://via.placeholder.com/400",
},
{
  id: 150,
  name: "Ataulfo Mango",
  category: "Fruit",
  weight: "12–16 ct / case",
  image: "https://via.placeholder.com/400",
},
{
  id: 151,
  name: "Oranges",
  category: "Fruit",
  weight: "Case 33 lb",
  image: "https://via.placeholder.com/400",
},
{
  id: 152,
  name: "English Cucumber",
  category: "Fruit",
  weight: "12–15 ct / case",
  image: "https://via.placeholder.com/400",
},
{
  id: 153,
  name: "Okra",
  category: "Fruit",
  weight: "Case 10 lb",
  image: "https://via.placeholder.com/400",
},
{
  id: 154,
  name: "Mami Squash (Buttercup Squash)",
  category: "Fruit",
  weight: "Each",
  image: "https://via.placeholder.com/400",
},
  {
  id: 155,
  name: "Beetroot",
  category: "Vegetables",
  weight: "Bag 25 lb",
  image: "https://via.placeholder.com/400",
},
{
  id: 156,
  name: "Flat Cabbage",
  category: "Vegetables",
  weight: "Case 50 lb",
  image: "https://via.placeholder.com/400",
},
{
  id: 157,
  name: "Napa Cabbage",
  category: "Vegetables",
  weight: "Case 45–50 lb",
  image: "https://via.placeholder.com/400",
},
{
  id: 158,
  name: "Green Cabbage",
  category: "Vegetables",
  weight: "Case 50 lb",
  image: "https://via.placeholder.com/400",
},
{
  id: 159,
  name: "Red Cabbage",
  category: "Vegetables",
  weight: "Case 45–50 lb",
  image: "https://via.placeholder.com/400",
},
{
  id: 160,
  name: "Green Onion (Scallions)",
  category: "Vegetables",
  weight: "48 bunches / case",
  image: "https://via.placeholder.com/400",
},
{
  id: 161,
  name: "Chives",
  category: "Peppers & Herbs",
  weight: "60 bunches / case",
  image: "https://via.placeholder.com/400",
},
{
  id: 162,
  name: "Mint Leaves",
  category: "Peppers & Herbs",
  weight: "24 bunches / case",
  image: "https://via.placeholder.com/400",
},
{
  id: 163,
  name: "Curly Parsley",
  category: "Peppers & Herbs",
  weight: "60 bunches / case",
  image: "https://via.placeholder.com/400",
},
{
  id: 164,
  name: "Cilantro",
  category: "Peppers & Herbs",
  weight: "24 bunches / case",
  image: "https://via.placeholder.com/400",
},
{
  id: 165,
  name: "Iceberg Lettuce",
  category: "Leafy Greens",
  weight: "24 ct / case",
  image: "https://via.placeholder.com/400",
},
{
  id: 166,
  name: "Green Leaf Lettuce",
  category: "Leafy Greens",
  weight: "24 ct / case",
  image: "https://via.placeholder.com/400",
},
{
  id: 167,
  name: "Spring Mix",
  category: "Leafy Greens",
  weight: "3 lb / case",
  image: "https://via.placeholder.com/400",
},
{
  id: 168,
  name: "Baby Spinach",
  category: "Leafy Greens",
  weight: "5 × 2 lb / case",
  image: "https://via.placeholder.com/400",
},
{
  id: 169,
  name: "Celery",
  category: "Vegetables",
  weight: "24 ct / case",
  image: "https://via.placeholder.com/400",
},
{
  id: 170,
  name: "Cherry / Grape Tomatoes",
  category: "Fruit",
  weight: "12 × 1 lb / case",
  image: "https://via.placeholder.com/400",
},
{
  id: 171,
  name: "Bean Sprouts",
  category: "Vegetables",
  weight: "25 lb / case",
  image: "https://via.placeholder.com/400",
},
{
  id: 172,
  name: "Green Beans",
  category: "Vegetables",
  weight: "20–25 lb / case",
  image: "https://via.placeholder.com/400",
},
{
  id: 173,
  name: "Long Chinese Eggplant",
  category: "Vegetables",
  weight: "Case 30 lb",
  image: "https://via.placeholder.com/400",
},
{
  id: 174,
  name: "Peeled Garlic",
  category: "Vegetables",
  weight: "3 lb × 6 / case",
  image: "https://via.placeholder.com/400",
},
{
  id: 175,
  name: "Ginger Root",
  category: "Vegetables",
  weight: "Case 30 lb",
  image: "https://via.placeholder.com/400",
},



  
];

const CATEGORIES = [
  "All",
  "Peppers & Herbs",
  "Fruit",
  "Leafy Greens",
  "Vegetables",
  "Pantry & Sauces",
  "Frozen & Refrigerated",
  "Specialty Leaves & Aromatics",
  "Oils & Essentials",
  "Packaging & Supplies",
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [, setLocation] = useLocation();

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Our Products
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Browse our comprehensive catalog of fresh produce and supplies.
            Contact us for current availability and pricing.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters & Search */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "hover:text-primary hover:border-primary border-muted-foreground/30"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="relative w-full md:w-80 self-end">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              className="pl-10 rounded-full border-border focus:border-primary shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={`${product.id}-${product.name}`}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-square overflow-hidden bg-muted flex-shrink-0">
                <img
                  src={product.image || placeholderImg}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 max-w-[80%]">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 backdrop-blur text-primary font-semibold shadow-sm truncate block"
                  >
                    {product.category}
                  </Badge>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif font-bold text-lg text-primary mb-2 line-clamp-2 min-h-[3.5rem]">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center text-sm mb-4 mt-auto">
                  <span className="font-semibold text-accent text-base">
                    {product.weight}
                  </span>
                </div>

                <Button
                  className="w-full rounded-full bg-primary hover:bg-primary/90 text-white mt-auto"
                  onClick={() => setLocation("/contact")}
                >
                  Request Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-muted/20 rounded-2xl">
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">
              No products found
            </h3>
            <p className="text-sm text-muted-foreground/80">
              Try adjusting your filters or search query.
            </p>
            <Button
              variant="link"
              className="text-primary mt-4"
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Download Catalog CTA */}
      <section className="bg-secondary/50 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            Need More Information?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact us for detailed pricing, seasonal availability, and bulk
            order discounts.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 shadow-lg shadow-accent/20">
            Contact Sales
          </Button>
        </div>
      </section>
    </Layout>
  );
}
