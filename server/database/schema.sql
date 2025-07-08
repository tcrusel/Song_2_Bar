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
   hours_id INT,
   latitude FLOAT,
   longitude FLOAT
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
   image4,
   latitude,
   longitude
)
VALUES
('La Guinguette Chez Alriq', 'World', 'Quai des Queyries', 33100, 'Bordeaux',
 '/bar_images/la_guinguette_chez_alriq/image_1.jpg', '/bar_images/la_guinguette_chez_alriq/image_2.webp',
 '/bar_images/la_guinguette_chez_alriq/image_3.jpg', '/bar_images/la_guinguette_chez_alriq/image_4.jpg',
 44.8440566, -0.5642994),
('Iboat', 'Electro', 'Bassin a flot', 33300, 'Bordeaux',
 '/bar_images/iboat/image_1.jpg', '/bar_images/iboat/image_2.webp',
 '/bar_images/iboat/image_3.jpg', '/bar_images/iboat/image_4.jpg',
 44.8634792, -0.5568093),
('Blonde Venus', 'Electro', 'Bassin a flot', 33300, 'Bordeaux',
 '/bar_images/blonde_de_venus/image_1.webp', '/bar_images/blonde_de_venus/image_2.jpeg',
 '/bar_images/blonde_de_venus/image_3.jpg', '/bar_images/blonde_de_venus/image_4.jpg',
 44.8634792, -0.5568093),
('Pulp', 'World', '30 rue des vignes', 33000, 'Bordeaux',
 '/bar_images/pulp/image_1.jpg', '/bar_images/pulp/image_2.jpg',
 '/bar_images/pulp/image_3.jpg', '/bar_images/pulp/image_4.jpeg',
 44.8323956, -0.5652534),
('L''Avant-scene', 'Rock', '42 cours de l''Yser', 33000, 'Bordeaux',
 '/bar_images/l_avant_scene/image_1.jpg', '/bar_images/l_avant_scene/image_2.jpg',
 '/bar_images/l_avant_scene/image_3.jpg', '/bar_images/l_avant_scene/image_4.jpeg',
 44.8281851, -0.5685683),
('La Tencha', 'World', '22 quai de la monnaie', 33000, 'Bordeaux',
 '/bar_images/la_tencha/image_1.jpeg', '/bar_images/la_tencha/image_2.jpg',
 '/bar_images/la_tencha/image_3.jpg', '/bar_images/la_tencha/image_4.jpg',
 44.8335454, -0.5624974),
('Danse Machine', 'Groove', '45 quai Lawton', 33300, 'Bordeaux',
 '/bar_images/dance_machine/image_1.jpg', '/bar_images/dance_machine/image_2.jpg',
 '/bar_images/dance_machine/image_3.jpg', '/bar_images/dance_machine/image_4.jpg',
 44.8641505, -0.5569527),
('L''Apollo', 'Groove et funk', '19 place Fernand Lafargue', 33000, 'Bordeaux',
 '/bar_images/l_appollo/image_1.jpg', '/bar_images/l_appollo/image_2.jpeg',
 '/bar_images/l_appollo/image_3.jpg', '/bar_images/l_appollo/image_4.jpg',
 44.8372520, -0.5716578),
('The House Of Parlement', 'Pop', '11 rue du parlement', 33000, 'Bordeaux',
 '/bar_images/the_house_of_parliament/image_1.jpg', '/bar_images/the_house_of_parliament/image_2.jpeg',
 '/bar_images/the_house_of_parliament/image_3.jpg', '/bar_images/the_house_of_parliament/image_4.jpg',
 44.8406263, -0.5730344),
('Le Connemara Irish Pub', 'Rock', '14-18 Cours d''Albret', 33000, 'Bordeaux',
 '/bar_images/le_connemara/image_1.jpg', '/bar_images/le_connemara/image_2.jpg',
 '/bar_images/le_connemara/image_3.jpg', '/bar_images/le_connemara/image_4.webp',
 44.8327572, -0.5797856),
('Le Motel', 'Electro', '12 Place Fernand Lafargue', 33000, 'Bordeaux',
 '/bar_images/la_motel/image_1.webp', '/bar_images/la_motel/image_2.webp',
 '/bar_images/la_motel/image_3.webp', '/bar_images/la_motel/image_4.jpg',
 44.8369020, -0.5720472),
('Le Bistrot des Bouchons', 'Métal', '6 Cours Gambetta', 33400, 'Talence',
 '/bar_images/le_bistrot_des_bouchons/image_1.webp', '/bar_images/le_bistrot_des_bouchons/image_2.jpg',
 '/bar_images/le_bistrot_des_bouchons/image_3.jpeg', '/bar_images/le_bistrot_des_bouchons/image_4.jpg',
 44.8209245, -0.5829475),
('The Garage Bar', 'Rock', '40 Avenue du Maréchal de Lattre de Tassigny', 33610, 'Cestas',
 '/bar_images/the_garage_bar/image_1.jpg', '/bar_images/the_garage_bar/image_2.jpg',
 '/bar_images/the_garage_bar/image_3.jpg', '/bar_images/the_garage_bar/image_4.jpg',
 44.7750790, -0.7057460),
('Echo - Bar à Vin & Cocktails', 'Jazz', '8 Av. Roger Cohe', 33600, 'Pessac',
 '/bar_images/l_echo/image_1.jpg', '/bar_images/l_echo/image_2.jpg',
 '/bar_images/l_echo/image_3.jpg', '/bar_images/l_echo/image_4.webp',
 44.8065024, -0.6316273),
('Sortie 13', 'Pop-Rock', 'Rue Walter Scott', 33600, 'Pessac',
 '/bar_images/sortie_13/image_1.jpg', '/bar_images/sortie_13/image_2.webp',
 '/bar_images/sortie_13/image_3.webp', '/bar_images/sortie_13/image_4.webp',
 44.8013473, -0.6604822),
('The Black Cat Pub', 'Rock', '37 Cours Aristide Briand', 33000, 'Bordeaux',
 '/bar_images/the_black_cat_pub/image_1.jpg', '/bar_images/the_black_cat_pub/image_2.jpg',
 '/bar_images/the_black_cat_pub/image_3.jpeg', '/bar_images/the_black_cat_pub/image_4.jpg',
 44.8317503, -0.5770514),
('Adiu', 'World', '12 Cours Victor Hugo', 33000, 'Bordeaux',
 '/bar_images/adiu/image_1.jpg', '/bar_images/adiu/image_2.webp',
 '/bar_images/adiu/image_3.jpg', '/bar_images/adiu/image_4.jpg',
 44.8359140, -0.5667508),
('L''Athénée Libertaire', 'World', '7 Rue du Muguet', 33000, 'Bordeaux',
 '/bar_images/l_athenee_libertaire/image_1.avif', '/bar_images/l_athenee_libertaire/image_2.jpg',
 '/bar_images/l_athenee_libertaire/image_3.jpg', '/bar_images/l_athenee_libertaire/image_4.png',
 44.8370861, -0.5686945),
('L''Antidote', 'Punk', '13BIS Rue Elie Gintrac', 33800, 'Bordeaux',
 '/bar_images/l_antidote/image_1.jpg', '/bar_images/l_antidote/image_2.jpeg',
 '/bar_images/l_antidote/image_3.jpg', '/bar_images/l_antidote/image_4.jpg',
 44.8308543, -0.5712482),
('La Bodega Del Theatro', 'Pop', '24 Rue de la Faïencerie', 33000, 'Bordeaux',
 '/bar_images/la_bodega_del-theatro/image_1.jpeg', '/bar_images/la_bodega_del-theatro/image_2.jpg',
 '/bar_images/la_bodega_del-theatro/image_3.jpg', '/bar_images/la_bodega_del-theatro/image_4.jpg',
 44.8605498, -0.5560125),
('Code 23', 'Jazz', '23 Rue du Mirail', 33000, 'Bordeaux',
 '/bar_images/code_23/image_1.jpg', '/bar_images/code_23/image_2.jpg',
 '/bar_images/code_23/image_3.jpg', '/bar_images/code_23/image_4.webp',
 44.8340836, -0.5712241),
('L''Âne qui Tousse', 'Soul', '4 Rue des Bahutiers', 33000, 'Bordeaux',
 '/bar_images/l_ane_qui_tousse/image_1.jpg', '/bar_images/l_ane_qui_tousse/image_2.jpg',
 '/bar_images/l_ane_qui_tousse/image_3.jpeg', '/bar_images/l_ane_qui_tousse/image_4.jpg',
 44.8394930, -0.5705066),
('The Grind House', 'Country', '12 Rue des Piliers de Tutelle', 33000, 'Bordeaux',
 '/bar_images/the_grind_house/image_1.jpg', '/bar_images/the_black_cat_pub/image_2.jpg',
 '/bar_images/the_black_cat_pub/image_3.jpeg', '/bar_images/the_black_cat_pub/image_4.jpg',
 44.8414811, -0.5736073),
('Le Bal du Coq', 'Folk', '15 Rue du Loup', 33000, 'Bordeaux',
 '/bar_images/le_bal_du_coq/image_1.jpg', '/bar_images/le_bal_du_coq/image_2.webp',
 '/bar_images/le_bal_du_coq/image_3.webp', '/bar_images/le_bal_du_coq/image_4.jpg',
 44.8379903, -0.5723946),
('L''Arcadien', 'Métal', '5 Rue Duffour Dubergier', 33000, 'Bordeaux',
 '/bar_images/l_arcadien/image_1.jpg', '/bar_images/l_arcadien/image_2.webp',
 '/bar_images/l_arcadien/image_3.jpg', '/bar_images/l_arcadien/image_4.webp',
 44.8370268, -0.5761843),
('Thélonious Café Jazz Club', 'Blues et Jazz', '18 Rue Bourbon', 33000, 'Bordeaux',
 '/bar_images/thelonious_cafe_jazz_club/image_1.jpg', '/bar_images/thelonious_cafe_jazz_club/image_2',
 '/bar_images/thelonious_cafe_jazz_club/image_3.webp', '/bar_images/thelonious_cafe_jazz_club/image_4.webp',
 44.8605456, -0.5568387),
('Blackrock Pub', 'Pop-Rock', '25 Cours de l''Intendance', 33000, 'Bordeaux',
 '/bar_images/blackrock_pub/image_1.jpeg', '/bar_images/blackrock_pub/image_2.jpg',
 '/bar_images/blackrock_pub/image_3.jpeg', '/bar_images/blackrock_pub/image_4.jpeg',
 44.8420349, -0.5766984),
('Jungle Dreams Bar', 'Reggae', '8 Rue des Augustins', 33000, 'Bordeaux',
 '/bar_images/jungle_dreams_bar/image_1.jpg', '/bar_images/jungle_dreams_bar/image_2.jpeg',
 '/bar_images/jungle_dreams_bar/image_3.jpg', '/bar_images/jungle_dreams_bar/image_4.jpg',
 44.8324301, -0.5710858);


CREATE TABLE user (
   id INT PRIMARY KEY AUTO_INCREMENT,
   firstname VARCHAR(50) NOT NULL,
   lastname VARCHAR(50) NOT NULL,
   role VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL,
   hashed_password VARCHAR(100) NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO user (firstname, lastname, role, email, hashed_password) 
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
   image VARCHAR(255) NOT NULL,
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
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


INSERT INTO music_group (name, style, description, image)
   VALUES
      ('Tinariwen', 'World', 'Formé dans les années 1980 par des touaregs exilés, Tinariwen est aujourd''hui un porte-voix de la culture nomade saharienne. Leur blues électrique mêle chants traditionnels en tamasheq, rythmiques hypnotiques et guitares saturées. Ils chantent la résistance, l''amour du désert et l''errance de leur peuple avec une authenticité rare.', '/group_images/tinariwen.jpg'),
      ('Goran Bregović','World',  'Ancien guitariste du groupe rock Yougoslave Bijelo Dugme, Bregović s''est réinventé en compositeur de musiques de films et de concerts festifs. Il allie fanfare gitane, chœurs slaves, rythmes balkaniques et harmonies orientales. Ses performances sont aussi théâtrales que dansantes, une célébration débridée des cultures de l''Est.', '/group_images/goran-bregovic.jpg'),
      ('Ibeyi','World', 'Lisa-Kaindé et Naomi Diaz, filles du percussionniste d''Angá Díaz (Buena Vista Social Club), mêlent la culture yoruba (héritée de leur père cubain) à la soul, au hip-hop et à l''électro. Leurs chants multiculturels évoquent la spiritualité, le deuil et l''héritage féminin, toujours dans une mise en scène sobre et envoûtante.', '/group_images/ibeyi.jpg'),
      ('Kronos Quartet','Classique', 'Ce quatuor américain fondé en 1973 repousse les limites de la musique classique. Leur démarche novatrice les pousse à collaborer avec des musiciens de tous horizons (indiens, chinois, africains, expérimentaux). Leurs concerts sont des voyages sonores, souvent engagés, hors des sentiers battus.', '/group_images/kronos-quartet.jpg'),
      ('Les Arts Florissants', 'Classique', 'Sous la direction de William Christie, cet ensemble vocal et instrumental redonne vie à la musique baroque française, anglaise et italienne. Ils utilisent des instruments d''époque et s''attachent à recréer l''esthétique sonore du XVIIe siècle avec une précision et une émotion remarquables.', '/group_images/les-arts-florissants.jpg'),
      ('Rone','Electro', 'Erwan Castex, alias Rone, est reconnu pour ses créations cinématographiques mêlant nappes ambient, beats subtils et textures organiques. Il a collaboré avec le Ballet de l''Opéra de Paris, écrivains (Alain Damasio) et réalisateurs. Ses concerts sont des immersions sensorielles dans un univers doux, mélancolique et poétique.', '/group_images/rone.jpg'),
      ('Justice','Electro', 'Icône de la French Touch, le duo Gaspard Augé et Xavier de Rosnay offre un son saturé, énergique et dansant, mélangeant rock, disco et électro. Leurs lives sont des shows puissants avec jeux de lumières géométriques, croix géantes et énergie électrisante, à mi-chemin entre rave et concert de rock.', '/group_images/justice.jpg'),
      ('Vulfpeck', 'Groove/Funk', 'Ce groupe américain né sur YouTube a bâti sa notoriété sur un son épuré, une grande musicalité et une présence scénique décalée. Influencé par la soul des années 70, chaque musicien du collectif brille par sa virtuosité, notamment le bassiste Joe Dart.', '/group_images/vulfpeck.webp'),
      ('L''Entourage', 'Hip-Hop', 'Collectif emblématique du rap indépendant français, il fédère des figures majeures comme Nekfeu, Alpha Wann, Jazzy Bazz ou Deen Burbigo. Ils incarnent une génération de lyricistes exigeants, porteurs d''un rap technique, souvent introspectif, qui a su séduire un large public.', '/group_images/entourage.jpg'),
      ('Run The Jewels', 'Hip-Hop', 'Duo américain composé de Killer Mike (Atlanta) et El-P (New York), ils offrent un hip-hop abrasif, militant et post-apocalyptique. Leurs paroles dénoncent le racisme, le capitalisme et les violences policières, sur des prods puissantes et sombres. Leur succès est autant critique que populaire.', '/group_images/run-the-jewels.jpg'),
      ('GoGo Penguin','Jazz', 'Trio instrumental de Manchester, GoGo Penguin brouille les frontières entre jazz, classique et électro. Le piano rythmique, la contrebasse et la batterie dialoguent dans des compositions ciselées, évoquant Philip Glass autant qu''Aphex Twin. Leur jazz est immersif, dynamique et très accessible.', '/group_images/gogo-penguin.jpg'),
      ('Avishai Cohen Trio', 'Jazz', 'Ancien contrebassiste de Chick Corea, Avishai Cohen est une figure du jazz moderne. Entouré de musiciens jeunes et virtuoses, il mêle rythmes méditerranéens, musiques traditionnelles juives et jazz américain. Il propose un jazz chantant, ancré dans les émotions et la mélodie.', '/group_images/avishai-cohen-trio.jpg'),
      ('Christine and the Queens','Pop', 'Derrière ce pseudonyme se cache Héloïse Letissier, artiste inclassable qui mêle pop électro, danse contemporaine et introspection queer. Connue pour ses clips chorégraphiés, elle construit une œuvre engagée, sensible et théâtrale, saluée à l''international.', '/group_images/christine-and-the-queens.webp'),
      ('Tame Impala','Pop', 'Kevin Parker compose, enregistre et mixe seul ses albums, à la croisée du rock psychédélique des 70s, de la pop rêveuse et de l''électro. Avec ses synthés planants et ses mélodies en boucle, il explore les émotions et l''isolement avec une patte sonore unique.', '/group_images/tame-impala.webp'),
      ('Arctic Monkeys','Rock', 'Le groupe de Sheffield a marqué les années 2000 avec son rock garage nerveux, avant d''explorer une pop plus cinématographique et posée. Mené par Alex Turner, leur écriture est mordante, élégante, souvent teintée de nostalgie britannique.', '/group_images/arctic-monkeys.webp'),
      ('Shaka Ponk', 'Rock','Groupe français multi-instrumentiste et visuel, Shaka Ponk fusionne riffs rock, beats électro, performances live déchaînées et personnages virtuels. Leur énergie sur scène est communicative, et leur engagement écologique se ressent jusque dans leurs textes.', '/group_images/shaka-ponk.webp');
      
CREATE TABLE participate (
   user_id INT,
   event_id INT,
   PRIMARY KEY (user_id, event_id)
);

CREATE TABLE favourite_event (
   user_id INT,
   event_id INT,
   PRIMARY KEY (user_id, event_id)
);

CREATE TABLE favourite_bar (
   user_id INT,
   bar_id INT,
   PRIMARY KEY (user_id, bar_id)
);

CREATE TABLE favourite_music_group (
   user_id INT,
   music_group_id INT,
   PRIMARY KEY (user_id, music_group_id)
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
