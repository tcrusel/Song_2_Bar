import EventSeeder from "./EventSeeder";

// Ajoute ici d'autres seeders si besoin (ex: BarSeeder)

const run = async () => {
  console.log("🔄 Démarrage du seeding...");

  // Exécute les seeders un par un
  await new EventSeeder().run();

  console.log("✅ Tous les seeders ont été exécutés avec succès !");
};

run();
