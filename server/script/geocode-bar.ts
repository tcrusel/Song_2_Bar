import mysql from "mysql2/promise";
import fetch from "node-fetch";

type GeocodeResponse = {
  lat: string;
  lon: string;
};

type Bar = {
    id: number;
    address: string;
    postcode: number;
    city: string;
}


async function main() {
  try {
    console.log("Tentative de connexion...");
    const db = await mysql.createConnection({
      host: "localhost",
      user: "Allandyl",
      password: "1234",
      database: "Song2bar",
    });
    console.log("✅ Connexion réussie !");

    const [bars] = await db.query(
        "SELECT id, address, postcode, city FROM bar"
    );
    console.log("Bars récupérés :", bars);

    for (const bar of bars as Bar[]) {
      console.log(
        `--> traitement bar id=${bar.id}, ${bar.address}, ${bar.postcode}, ${bar.city}`
    );

      const query = encodeURIComponent(
        `${bar.address}, ${bar.postcode}, ${bar.city}, France`
    );
      const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`;

      console.log(`URL appelée: ${url}`);

      const res = await fetch(url, {
        headers: {
          "User-Agent": "Song2bar",
        },
      });
      const data = (await res.json()) as GeocodeResponse[];

      console.log("Résultat API:", data);

      if (data.length > 0) {
        const lat = data[0].lat;
        const lon = data[0].lon;

        console.log(`✔️ MAJ bar id=${bar.id} vers lat=${lat}, lon=${lon}`);

        await db.query(
          "UPDATE bar SET latitude = ?, longitude = ? WHERE id = ?",
          [lat, lon, bar.id]
        );
      } else {
        console.warn(`⚠️ Aucune coordonnée trouvée pour id=${bar.id}`);
      }
    }

    console.log("✅ Géocodage terminé !");
    process.exit(0);

  } catch (err) {
    console.error("❌ Erreur :", err);
    process.exit(1);
  }
}

main();
