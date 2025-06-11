DROP DATABASE if exists song2bar;
CREATE DATABASE song2bar;
USE song2bar;

CREATE TABLE bar (
   id INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(100) NOT NULL,
   music_style VARCHAR(100) NOT NULL,
   address VARCHAR(100) NOT NULL,
   postcode INT NOT NULL,
   city VARCHAR(100) NOT NULL,
   image1 VARCHAR(255) NOT NULL,
   image2 VARCHAR(255) NOT NULL,
   image3 VARCHAR(255) NOT NULL,
   image4 VARCHAR(255) NOT NULL,
   hours_id INT
);

INSERT INTO bar (
   name,
   music_style,
   address,
   postcode,
   city,
   image1,
   image2,
   image3,
   image4
)
   VALUES
      ('La Guinguette Chez Alriq', 'World', 'Quai de Queyries', 33100, 'Bordeaux', 'https://www.laguinguettechezalriq.com/wp-content/uploads/2022/05/Cabanenuit.jpg', 'https://uploads.lebonbon.fr/source/2023/august/2048219/cover-r4x3w1200-595f5bc65957d-guinguette-chez-alri_1_2000.jpg', 'https://vivrebordeaux.fr/wp-content/uploads/2019/04/chez-alriq-1-960x600.jpg', 'https://www.visiter-bordeaux.eu/wp-content/uploads/2019/06/chez-alriq-guinguette-bordeaux.jpg'),
      ('Iboat', 'Electro', 'Bassin a flot', 33300, 'Bordeaux', 'https://www.visiter-bordeaux.eu/wp-content/uploads/2019/07/iboat-bordeaux.jpg', 'https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL2NsdWJzL2xnL2lib2F0LmpwZz9kYXRlVXBkYXRlZD0xNzE0NTQ2NzU0NjAz', 'https://media.abcsalles.com/images/1/salles/900h/534618/i-boat-4.jpg', 'https://media.sudouest.fr/22420586/1200x-1/sudouest-photo-1-33114150.jpg'),
      ('Blonde Venus', 'Electro', 'Bassin a flot', 33300, 'Bordeaux', 'https://www.iboat.eu/blonde/BV_header.webp', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWGoutPvaA85AyXClEU7dSJl0wdyJQNJpaEw&s', 'https://www.bougerabordeaux.com/wp-content/uploads/2021/08/207999767_981290272617891_6494423547000534989_n-1.jpg', 'https://www.muzzart.fr/wp-content/uploads/2020/10/addbc006e8e90a428c3209662384af88fa21fbe9d6ded22642d8bba33d0bd3f2-e1603186935419.jpg'),
      ('Pulp', 'World', '30 rue des vignes', 33000, 'Bordeaux', 'https://quoifaireabordeaux.com/wp-content/uploads/2025/04/pulp-64-1024x683.jpg', 'https://quoifaireabordeaux.com/wp-content/uploads/2025/04/pulp-42-1024x683.jpg', 'https://quoifaireabordeaux.com/wp-content/uploads/2025/04/pulp-41-1024x683.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXq9YlxRTvs6ZkhNf3naq-cTNOC_l13drWw&s'),
      ('L''Avant-scene', 'rock', '42 cours de l''Yser', 33000, 'Bordeaux', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/2883/original/363480.jpg', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/2883/1500x750/839.jpg', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/2883/1500x750/363485.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJM2AuV--v-buUXsWtJmAyTG3MZl2pHUSU1I6POCPQCCQ43YPoyVZ06fi9vWncF88MAlo&usqp=CAU'),
      ('La Tencha', 'World', '22 quai de æla monnaie', 33000, 'Bordeaux','https://res.cloudinary.com/dcyafbpoh/image/upload/se8qfp21nnirnqsn9a31dnto1uli', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/cd/38/55/l-ambiance.jpg?w=2000&h=-1&s=1', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/cd/38/4b/le-mojito-elu-parmi-les.jpg?w=1800&h=1000&s=1', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/71/cb/72/la-tencha.jpg?w=1200&h=700&s=1'),
      ('Danse Machine', 'Groove', '45 quai Lawton', 33300, 'Bordeaux', 'https://cdn.prod.website-files.com/6377ec31bb12397f50163e70/63be8bb82ba7e233ef4d38a6_Mask%20group-8-min.jpg', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/b8/0c/8c/situe-sur-les-bassins.jpg?w=1200&h=1200&s=1', 'https://quoifaireabordeaux.com/wp-content/uploads/2024/04/IMG_4379-1024x576.jpg', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/d0/fe/b0/besoin-de-se-restaurer.jpg?w=900&h=-1&s=1'),
      ('L''Apollo', 'Groove et funk', '19 place Fernand Lafargue', 33000, 'Bordeaux', 'https://www.pagesjaunes.fr/media/newdam/22/2d/70/00/00/82/07/d2/4b/4f/5d3f222d7000008207d24b4f/5d3f222d7000008207d24b50.jpg', 'https://res.cloudinary.com/dcyafbpoh/image/upload/jru8155i4w5af5s2fo45l2rkoirk', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/48345/1500x750/375601.jpg', 'https://s3-media0.fl.yelpcdn.com/bphoto/pLQyGpXglq1ok5nYvMT8_g/l.jpg'),
      ('The House Of Parlement', 'pop', '11 rue du parlement', 33000, 'Bordeaux', 'https://media.sudouest.fr/15331019/1000x500/sudouest-photo-1-14666194.jpg?v=1685123248', 'https://lemap-bordeaux.com/wp-content/uploads/2017/01/houses-of-parliament-4.jpeg', 'https://lemap-bordeaux.com/wp-content/uploads/2017/01/houses-of-parliament-6.jpg', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/43290/1500x750/312200.jpg'),
      ('Le Connemara Irish Pub', 'Rock', '14-18 Cours d''Albret', 33000, 'Bordeaux', 'https://check.fr/wp-content/uploads/2023/01/checkfr-12011-Connemara-Irish-Pub-Bordeaux-1.jpg', 'https://check.fr/wp-content/uploads/2023/01/checkfr-12011-Connemara-Irish-Pub-Bordeaux-2-540x400.jpg', 'https://media-cdn.tripadvisor.com/media/photo-s/06/67/6f/3f/le-connemara.jpg', 'https://igoguide-gironde.com/publics/pro/uploads/image-3-1705253246.jpg'),
      ('Le Motel','Electro','12 Place Fernand Lafargue', 33000, 'Bordeaux', 'https://lh3.googleusercontent.com/p/AF1QipMBScRTsI2pGyCjDpaWXSb4sw6gOe5cY2-ISZ6T=s1360-w1360-h1020-rw', 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noPzXbLLazpJrkcR1WNZZHFwK-crjsFUYerdzEqkuchXiiUjDEEZm5AIb8m-apOt70HE273DWtB5qqZElRVIF6ZPaL0dWfJ86gqJhm3J_JmVrtAdlM_pHnhvBMLldlImJ1gWB93=s1360-w1360-h1020-rw', 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqEdSnS0Btyvm8bieoKcsO42Jzw1_IHnH7pIO5VpNtP1kYPFHrKAtYrnd0msUKBAREeJkzntUxpBwZsfkMWO_9lZ-LQMh2Ig_qF4WAjlGFKha_o_mi-C1ScJjj5lFzaUQ8hWJtW=s1360-w1360-h1020-rw', 'https://img.restaurantguru.com/cd77-Primi-Bordeaux-food.jpg'),
      ('Le Bistrot des Bouchons','Métal','18-4 Cr Gambetta', 33400,'Talence', 'https://lh3.googleusercontent.com/p/AF1QipNFRfO33NS07XM1mG2eo_u4-uYoDtebojJt6Lj2=s1360-w1360-h1020-rw', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/5e/37/60/la-salle-du-bistrot-des.jpg?w=900&h=500&s=1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjugG-Imxi1ngor6CMt9b8AgWa43I5aa-V3eDuRLgbPxE-sKFllalUp21wUQ35i6CflQ&usqp=CAU', 'https://res.cloudinary.com/tf-lab/image/upload/restaurant/673812c0-a7a3-4500-9fde-e3909528c1ba/5853f8e1-bcdf-4cc5-bc6f-8f4290b5294b.jpg'),
      ('The Garage Bar','Rock','40 Av. du Marechal de Lattre de Tassigny', 33610,'Cestas', 'https://www.garage-bar-cestas.fr/sites/4466cw0722/files/styles/vignette_masonry/public/galeries/food-cestas-the-garage-bar_3.jpg?itok=hdLFhhrG', 'https://www.garage-bar-cestas.fr/sites/4466cw0722/files/styles/vignette_masonry/public/galeries/food-cestas-the-garage-bar_7.jpg?itok=7e4r7ovQ', 'https://www.garage-bar-cestas.fr/sites/4466cw0722/files/styles/vignette_masonry/public/galeries/drinks-cestas-the-garage-bar_5.jpg?itok=4r58QVe7', 'https://www.garage-bar-cestas.fr/sites/4466cw0722/files/styles/vignette_masonry/public/galeries/food-cestas-the-garage-bar_1.jpg?itok=eSIIJy2G'),
      ('Echo - Bar à Vin & Cocktails','Jazz','8 Av. Roger Cohe', 33600,'Pessac','https://res.cloudinary.com/tf-lab/image/upload/restaurant/724c2459-18b0-452c-bca0-d1923e7998cd/7277dea8-652f-49f7-87a0-9c57a7ddec0b.jpg', 'https://quoifaireabordeaux.com/wp-content/uploads/2024/07/mea.jpg', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/d9/e3/c8/un-endroit-chic.jpg?w=900&h=500&s=1', 'https://www.echopessac.fr/wp-content/uploads/2024/05/echo-bar-a-vin-pessac-realisations-2.webp'),
      ('Sortie 13','Pop-Rock','Rue Walter Scott', 33600,'Pessac', 'https://www.1001salles.com/images/provider/26388/1718891145_667432894fb9a.jpg', 'https://www.1001salles.com/images/provider/26388/1718891146_6674328a71b8e.webp', 'https://www.1001salles.com/images/provider/26388/1718891141_66743285ca114.webp', 'https://www.1001salles.com/images/provider/26388/1613554898_602ce4d22f690.webp'),
      ('The Black Cat Pub', 'Rock', '37 Cr Aristide Briand', 33000, 'Bordeaux', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/48319/1500x750/375177.jpg', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/48319/1500x750/375178.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKTz4zuO9FFCmqNz4kbSw7mjE5Z57e9rBlw&s', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/48319/1500x750/375173.jpg'),
      ('Adiu','World','12 Cr Victor Hugo', 33000,'Bordeaux', 'https://www.bougerabordeaux.com/wp-content/uploads/2024/12/Snapinsta.app_469408265_17903745825081984_6043276565540455254_n_1080-1-819x1024.jpg', 'https://uploads.lebonbon.fr/source/2024/november/2070924/adiu-bordeaux-bar-gascon_1_2000.jpg', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/52577/1500x750/455373.jpg', 'https://uploads.lebonbon.fr/source/2024/Bordeaux/Novembre/adiu-plus-grand-bar-dansant-bordeaux.jpg'),
      ('L''Athénée Libertaire','World','7 Rue du Muguet', 33000,'Bordeaux','https://static.wixstatic.com/media/cbbad6_a5f8824e702e44e89e324d663ad192ee~mv2.jpg/v1/fill/w_740,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cbbad6_a5f8824e702e44e89e324d663ad192ee~mv2.jpg', 'https://girondemusicbox.fr/wp-content/uploads/2023/05/athenee-libertaire.jpg', 'https://lh5.googleusercontent.com/p/AF1QipMF4iB3hI9DQ4VzR7sQfslms7qPM4YW_Bb6kfH6=w500-h500-k-no', 'https://www.atheneelibertaire.net/wp-content/uploads/2023/01/image-1.png'),
      ('L''Antidote','punk','13BIS Rue Elie Gintrac', 33800,'Bordeaux','https://www.bdxc.fr/images/_bdxc/1703070416_1652425178/1703070416_1652425178.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJWdlBJLWAsaIjP1SlUYBNdW0vi_P6D1uPUg&s', 'https://www.reserverunbar.fr/images/etab/1700478897_655b3fb1be27f_m.jpg', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/2807/750x375/327068.jpg'),
      ('La Bodega Del Theatro','Pop','24 Rue de la Faïencerie', 33000,'Bordeaux', 'https://www.ohrestos.fr/thumbs/m/uploads/restaurants/1cd41ba016c0c7d038cb666906ab4177.jpeg', 'https://www.theatro-bordeaux.com/wp-content/uploads/2022/09/Sans-titre-8-400x284.jpg', 'https://offloadmedia.feverup.com/bordeauxsecret.com/wp-content/uploads/2020/09/19101613/TAPAS-1-1024x597.jpg', 'https://offloadmedia.feverup.com/bordeauxsecret.com/wp-content/uploads/2020/09/19101613/TAPAS.jpg'),
      ('Code 23', 'Jazz', '23 Rue du Mirail', 33000, 'Bordeaux', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/51354/original/439086.jpg', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/51354/original/425392.jpg', 'https://static.actu.fr/uploads/2024/01/code23bar-2.jpg', 'https://uploads.lebonbon.fr/source/2024/march/2057702/008-hd-code23-31012024-food-influences-matthieu-ha_2_1200.jpg'),
      ('L''Âne qui Tousse', 'Soul', '4 Rue des Bahutiers', 33000, 'Bordeaux', 'https://img.restaurantguru.com/r108-L-Ane-Qui-Tousse-interior-2020-08.jpg', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/51356/450x300/425610.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Uk-GcRJq_kGEbBLdDT1fNwbGEw4YChj2_A&s', 'https://img.restaurantguru.com/rad0-bar-counter-L-Ane-Qui-Tousse-2020-08.jpg'),
      ('The Grind House', 'Country', '12 Rue des Piliers de Tutelle', 33000, 'Bordeaux',  'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/2879/1500x750/800.jpg', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/2879/1500x750/363402.jpg', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/2879/1500x750/799.jpg', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/2879/1500x750/363401.jpg'),
      ('Le Bal du Coq', 'Folk', '15 Rue du Loup', 33000, 'Bordeaux',  'https://media.sudouest.fr/21364580/1200x-1/20240913145533-davt818.jpg', 'https://uploads.lebonbon.fr/source/2024/janvier/bordeaux/404907163_788440513122604_8532049008275042252_n.jpg', 'https://uploads.lebonbon.fr/source/2024/janvier/bordeaux/404928270_1052870925765122_2079437676413438067_n.jpg', 'https://uploads.lebonbon.fr/source/2024/january/2055494/404898183-326883319671097-664120557894279179-n_1_2000.jpg'),
      ('L''Arcadien', 'Métal', '5 Rue Duffour Dubergier', 33000, 'Bordeaux',  'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/49447/450x300/419182.jpg', 'https://www.mydarklifestyle.com/uploads/bar-metal-arcadien-steampunk-bordeaux-5KFr.webp', 'https://static.actu.fr/uploads/2022/08/297595154-1007234113285394-6950104936055308972-n-960x640.jpg', 'https://www.mydarklifestyle.com/uploads/arcadien-bordeaux-bar-metal-ERa6.webp'),
      ('Thélonious Café Jazz Club', 'Blues et Jazz', '18 Rue Bourbon', 33000, 'Bordeaux', 'https://thelonious-jazz-club-bordeaux.com/wp-content/uploads/2024/07/398157806_2140562799629670_4640251316638234873_n-bis-1.jpg', 'https://www.bordeaux-tourisme.com/sites/bordeaux_tourisme/files/styles/sit_main_image/public/externals/71ca1a52f8de36415ffcbf521befc870.jpg.webp?itok=3cDIreWU', 'https://i2.wp.com/blog.lagazettebleuedactionjazz.fr/wp-content/uploads/2019/01/DSC02285.jpg?resize=1280%2C640&ssl=1', 'https://cdn.prod.website-files.com/64c584288dd599c8a2dcb4cf/66d835815fecfbad5a57df89_uc.webp'),
      ('Blackrock Pub', 'Pop-Rock', '25 Cours de l''Intendance', 33000, 'Bordeaux', 'https://uniiti.com/images/shops/slides/853fdd42f0699b3a41e9fb0998004fe6d69bf9d6.jpeg', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/dd/e3/55/events-blackrock.jpg?w=900&h=500&s=1', 'https://uniiti.com/images/shops/slides/6d39c05f77505d5b5cd5d4ea899da0a7b563c09c.jpeg', 'https://uniiti.com/images/shops/slides/8660abc733703d41ef76fe98eae2a78067c31c03.jpeg'),
      ('Jungle Dreams Bar', 'Reggae', '8 Rue des Augustins', 33000, 'Bordeaux', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/49839/1500x750/403031.jpg', 'https://quoifaireabordeaux.com/wp-content/uploads/2023/03/322869988_534329795317765_975488210514206291_n-1-1024x788.jpeg', 'https://igoguide.com/publics/pro/uploads/image-4-1705910230.jpg', 'https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/49839/1500x750/403027.jpg');

CREATE TABLE user (
   id INT PRIMARY KEY AUTO_INCREMENT,
   firstname VARCHAR(50) NOT NULL,
   lastname VARCHAR(50) NOT NULL,
   role VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL,
   password VARCHAR(30) NOT NULL
);

INSERT INTO user (firstname, lastname, role, email, password) 
   VALUES
      ('Léa', 'Benoit', 'user', 'lea.benoit@example.com', 'azerty123'),
      ('Thomas', 'Marchand', 'user', 'thomas.marchand@example.com', 'azerty123'),
      ('Emma', 'Robert', 'bartender', 'emma.robert@example.com', 'azerty123'),
      ('Lucas', 'Fernandez', 'bartender', 'lucas.fernandez@example.com', 'azerty123'),
      ('Chloé', 'Perrin', 'bartender', 'chloe.perrin@example.com', 'azerty123'),
      ('Nathan', 'Rousseau', 'user', 'nathan.rousseau@example.com', 'azerty123'),
      ('Camille', 'Lemoine', 'user', 'camille.lemoine@example.com', 'azerty123'),
      ('Enzo', 'Morel', 'bartender', 'enzo.morel@example.com', 'azerty123'),
      ('Manon', 'Lefevre', 'bartender', 'manon.lefevre@example.com', 'azerty123'),
      ('Hugo', 'Faure', 'user', 'hugo.faure@example.com', 'azerty123'),
      ('Sophie', 'Garnier', 'user', 'sophie.garnier@example.com', 'azerty123'),
      ('Julien', 'Lopez', 'bartender', 'julien.lopez@example.com', 'azerty123'),
      ('Clara', 'Noël', 'user', 'clara.noel@example.com', 'azerty123'),
      ('Antoine', 'Blanc', 'bartender', 'antoine.blanc@example.com', 'azerty123'),
      ('Laura', 'Mathieu', 'bartender', 'laura.mathieu@example.com', 'azerty123'),
      ('Mathis', 'Fontaine', 'user', 'mathis.fontaine@example.com', 'azerty123'),
      ('Anaïs', 'Meyer', 'bartender', 'anais.meyer@example.com', 'azerty123'),
      ('Hugo', 'Chevalier', 'user', 'hugo.chevalier@example.com', 'azerty123'),
      ('Élise', 'Lemoine', 'user', 'elise.lemoine@example.com', 'azerty123'),
      ('Axel', 'Barbier', 'bartender', 'axel.barbier@example.com', 'azerty123'),
      ('Jade', 'Guillot', 'bartender', 'jade.guillot@example.com', 'azerty123'),
      ('Noah', 'Giraud', 'user', 'noah.giraud@example.com', 'azerty123'),
      ('Louise', 'Gomez', 'bartender', 'louise.gomez@example.com', 'azerty123'),
      ('Victor', 'Clement', 'user', 'victor.clement@example.com', 'azerty123'),
      ('Emma', 'Fabre', 'user', 'emma.fabre@example.com', 'azerty123'),
      ('Léo', 'Lemoine', 'user', 'leo.lemoine@example.com', 'azerty123'),
      ('Zoé', 'Paris', 'bartender', 'zoe.paris@example.com', 'azerty123'),
      ('Gabriel', 'Rolland', 'user', 'gabriel.rolland@example.com', 'azerty123'),
      ('Clémentine', 'Adam', 'bartender', 'clementine.adam@example.com', 'azerty123'),
      ('Louis', 'Perrot', 'user', 'louis.perrot@example.com', 'azerty123');

CREATE TABLE event (
   id INT PRIMARY KEY AUTO_INCREMENT,
   title VARCHAR(100) NOT NULL,
   date DATE NOT NULL,
   start_at TIME NOT NULL,
   end_at TIME NOT NULL,
   description TEXT NOT NULL,
   creator_id INT NOT NULL,
   bar_id INT NOT NULL,
   music_group_id INT NOT NULL
);

CREATE TABLE music_group (
   id INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   style VARCHAR(30) NOT NULL,
   description TEXT NOT NULL, 
   image VARCHAR(255) NOT NULL
);

INSERT INTO music_group (name, style, description)
   VALUES
      ('Tinariwen', 'World', 'Formé dans les années 1980 par des touaregs exilés, Tinariwen est aujourd''hui un porte-voix de la culture nomade saharienne. Leur blues électrique mêle chants traditionnels en tamasheq, rythmiques hypnotiques et guitares saturées. Ils chantent la résistance, l''amour du désert et l''errance de leur peuple avec une authenticité rare.', 'https://atuvu.ca/uploads/images/2017/03/tinariwen-en-7-chansons-laissez-les-touaregs-vous-envouter.jpg'),
      ('Goran Bregović','World',  'Ancien guitariste du groupe rock Yougoslave Bijelo Dugme, Bregović s''est réinventé en compositeur de musiques de films et de concerts festifs. Il allie fanfare gitane, chœurs slaves, rythmes balkaniques et harmonies orientales. Ses performances sont aussi théâtrales que dansantes, une célébration débridée des cultures de l''Est.', 'https://cdn.sortiraparis.com/images/1004/57915/307104-goran-bregovic-en-concert-a-la-salle-pleyel-en-2018.jpg'),
      ('Ibeyi','World', 'Lisa-Kaindé et Naomi Diaz, filles du percussionniste d''Angá Díaz (Buena Vista Social Club), mêlent la culture yoruba (héritée de leur père cubain) à la soul, au hip-hop et à l''électro. Leurs chants multiculturels évoquent la spiritualité, le deuil et l''héritage féminin, toujours dans une mise en scène sobre et envoûtante.', 'https://focus.telerama.fr/2023/02/02/0/0/2500/2000/1200/0/60/0/276fdfd_1675340397930-ibeyi-press-shots-web-19-credit-sandra-ebert.jpeg'),
      ('Kronos Quartet','Classique', 'Ce quatuor américain fondé en 1973 repousse les limites de la musique classique. Leur démarche novatrice les pousse à collaborer avec des musiciens de tous horizons (indiens, chinois, africains, expérimentaux). Leurs concerts sont des voyages sonores, souvent engagés, hors des sentiers battus.', 'https://www.ludwig-van.com/montreal/wp-content/uploads/sites/3/2019/03/Kronos-Quartet-web.jpg'),
      ('Les Arts Florissants', 'Classique', 'Sous la direction de William Christie, cet ensemble vocal et instrumental redonne vie à la musique baroque française, anglaise et italienne. Ils utilisent des instruments d''époque et s''attachent à recréer l''esthétique sonore du XVIIe siècle avec une précision et une émotion remarquables.', 'https://www.harmoniamundi.com/wp-content/uploads/2022/10/artistes-807-768x586.jpg'),
      ('Rone','Electro', 'Erwan Castex, alias Rone, est reconnu pour ses créations cinématographiques mêlant nappes ambient, beats subtils et textures organiques. Il a collaboré avec le Ballet de l''Opéra de Paris, écrivains (Alain Damasio) et réalisateurs. Ses concerts sont des immersions sensorielles dans un univers doux, mélancolique et poétique.', 'https://www.104.fr/cache/media/artistes/rone-artiste-img-header-page-artiste/cr,1380,719-q,70-cr,1380,720-q,85-cr,1380,720-cr,995,520-q,85-cr,995,520-cr,610,320-q,85-cr,610,320-1bcab8.jpg'),
      ('Justice','Electro', 'Icône de la French Touch, le duo Gaspard Augé et Xavier de Rosnay offre un son saturé, énergique et dansant, mélangeant rock, disco et électro. Leurs lives sont des shows puissants avec jeux de lumières géométriques, croix géantes et énergie électrisante, à mi-chemin entre rave et concert de rock.', 'https://www.parismatch.com/lmnr/var/pm/public/media/image/2024/12/05/10/sc_10_19_2024_justice_09-2.jpg?VersionId=PFT5xmcIkw9w03o_rug8s61KJWCLdu4b'),
      ('Vulfpeck', 'Groove/Funck', 'Ce groupe américain né sur YouTube a bâti sa notoriété sur un son épuré, une grande musicalité et une présence scénique décalée. Influencé par la soul des années 70, chaque musicien du collectif brille par sa virtuosité, notamment le bassiste Joe Dart.', 'https://tribunedelyon.fr/wp-content/uploads/sites/5/2025/02/Vulfpeck-fin.webp'),
      ('Snarky Puppy', 'Groove/Funck', 'Véritable laboratoire musical fondé par Michael League, Snarky Puppy réunit une cinquantaine de musiciens (appelés « The Fam »). Leur jazz fusion est imprégné de musiques latines, funk, soul et afrobeat. Récompensés par plusieurs Grammy Awards, ils sont adulés autant par les musiciens que le grand public.', 'https://upload.wikimedia.org/wikipedia/commons/0/02/Snarky_Puppy%4051._Heineken_Jazzaldia_%2830052040612%29.jpg'),
      ('L''Entourage', 'Hip-Hop', 'Collectif emblématique du rap indépendant français, il fédère des figures majeures comme Nekfeu, Alpha Wann, Jazzy Bazz ou Deen Burbigo. Ils incarnent une génération de lyricistes exigeants, porteurs d''un rap technique, souvent introspectif, qui a su séduire un large public.', 'https://img.20mn.fr/9gR9JVI6SrWZulD5DTWzbQ/1444x920_collectif-entourage'),
      ('Run The Jewels', 'Hip-Hop', 'Duo américain composé de Killer Mike (Atlanta) et El-P (New York), ils offrent un hip-hop abrasif, militant et post-apocalyptique. Leurs paroles dénoncent le racisme, le capitalisme et les violences policières, sur des prods puissantes et sombres. Leur succès est autant critique que populaire.', 'https://www.goutemesdisques.com/uploads/pics/run-the-jewels-yankee-and-the-brave-1584914059.jpg'),
      ('GoGo Penguin','Jazz', 'Trio instrumental de Manchester, GoGo Penguin brouille les frontières entre jazz, classique et électro. Le piano rythmique, la contrebasse et la batterie dialoguent dans des compositions ciselées, évoquant Philip Glass autant qu''Aphex Twin. Leur jazz est immersif, dynamique et très accessible.', 'https://www.jazzavienne.com/sites/default/files/styles/portrait_artiste_large_desktop/public/uploads/images/2024-02/GoGo%20Penguin_cr%C3%A9dit%20Emily%20Dennison-min.jpg?h=00afd729&itok=rII-9zPN'),
      ('Avishai Cohen Trio', 'Jazz', 'Ancien contrebassiste de Chick Corea, Avishai Cohen est une figure du jazz moderne. Entouré de musiciens jeunes et virtuoses, il mêle rythmes méditerranéens, musiques traditionnelles juives et jazz américain. Il propose un jazz chantant, ancré dans les émotions et la mélodie.', 'https://www.parisjazzclub.net/medias/concerts/79603-avishai-cohen-trio/images/avishai-cohen-trio-lg.jpg?20221006122816'),
      ('Christine and the Queens','Pop', 'Derrière ce pseudonyme se cache Héloïse Letissier, artiste inclassable qui mêle pop électro, danse contemporaine et introspection queer. Connue pour ses clips chorégraphiés, elle construit une œuvre engagée, sensible et théâtrale, saluée à l''international.', 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTUAXnXqcJVGbSNrQ1P12kGN5uR1rkLCHy6D4PgJRE1g_y2kAN45PtkJmSYZKN4Kfydey0s3in8YddK682ew2EBgMnbtJWwkMA5q3ygAg9edIn4ZimrQEwgqwcm17Eu61_yBYQZ0U7WYqsJ'),
      ('Tame Impala','Pop', 'Kevin Parker compose, enregistre et mixe seul ses albums, à la croisée du rock psychédélique des 70s, de la pop rêveuse et de l''électro. Avec ses synthés planants et ses mélodies en boucle, il explore les émotions et l''isolement avec une patte sonore unique.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEIQ1mNaEpXBgSmNAkKPxMTiac9ZhGtH2pm6o-7kTe_dVbBo6Vd803lXtUiJBfOyDsi4aYflkh4aS6WJ-Fb1fxuAjp7oi4WkKO96ZYu1kyQw'),
      ('Arctic Monkeys','Rock', 'Le groupe de Sheffield a marqué les années 2000 avec son rock garage nerveux, avant d''explorer une pop plus cinématographique et posée. Mené par Alex Turner, leur écriture est mordante, élégante, souvent teintée de nostalgie britannique.', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSglyPhcYPTytV3lBISlJopflxOdVq-7Ksjzy6tkkZufM4oyWqyL0Kb1nBK3mNCDwbekpmrjfbFlMvX7NliANWCE4172vM4-3CozuUnajgUqg'),
      ('Shaka Ponk', 'Rock','Groupe français multi-instrumentiste et visuel, Shaka Ponk fusionne riffs rock, beats électro, performances live déchaînées et personnages virtuels. Leur énergie sur scène est communicative, et leur engagement écologique se ressent jusque dans leurs textes.', 'https://res.cloudinary.com/shotgun/image/upload/c_limit,w_750/fl_lossy/f_auto/q_auto/production/artworks/artists/artist-87531-avatar-1742914556359.jpg');
      
CREATE TABLE participate (
   user_id INT,
   event_id INT,
   PRIMARY KEY (user_id, event_id)
);

CREATE TABLE favourite (
   user_id INT,
   event_id INT,
   PRIMARY KEY (user_id, event_id)
);

CREATE TABLE hours (
	id INT PRIMARY KEY AUTO_INCREMENT,
	monday_opening_hours VARCHAR(50) NOT NULL,
	tuesday_opening_hours VARCHAR(50) NOT NULL,
	wednesday_opening_hours VARCHAR(50) NOT NULL,
	thursday_opening_hours VARCHAR(50) NOT NULL,
	friday_opening_hours VARCHAR(50) NOT NULL,
	saturday_opening_hours VARCHAR(50) NOT NULL,
	sunday_opening_hours VARCHAR(50) NOT NULL,
	happy_hours VARCHAR(50) NOT NULL
   );
