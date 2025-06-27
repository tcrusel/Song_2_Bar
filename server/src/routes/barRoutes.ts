import express from "express";
import type { RequestHandler } from "express";
import database from "../../database/client";
import type { Rows } from "../../database/client";

const router = express.Router();

// GET /api/bars - Get all bars
const getAllBars: RequestHandler = async (req, res) => {
  try {
    const [rows] = await database.query<Rows>("SELECT * FROM bar");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching bars:", error);
    res.status(500).json({ error: "Failed to fetch bars" });
  }
};

const getBarById: RequestHandler = async (req, res): Promise<void> => {
  try {
    const { id } = req.params;

    const [barRows] = await database.query<Rows>(
      "SELECT * FROM bar WHERE id = ?",
      [id],
    );

    if (barRows.length === 0) {
      res.status(404).json({ error: "Bar not found" });
      return;
    }

    const bar = barRows[0];

    if (bar.hours_id) {
      const [hoursRows] = await database.query<Rows>(
        "SELECT * FROM hours WHERE id = ?",
        [bar.hours_id],
      );

      if (hoursRows.length > 0) {
        bar.hours = hoursRows[0];
      }
    }

    res.json(bar);
  } catch (error) {
    console.error("Error fetching bar:", error);
    res.status(500).json({ error: "Failed to fetch bar details" });
  }
};

const getBarEvents: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await database.query<Rows>(
      `SELECT e.*, mg.name as music_group_name, mg.style as music_group_style 
       FROM event e 
       LEFT JOIN music_group mg ON e.music_group_id = mg.id 
       WHERE e.bar_id = ?
       ORDER BY e.date ASC`,
      [id],
    );

    const events = rows.map((row) => ({
      id: row.id,
      title: row.title,
      date: row.date,
      start_at: row.start_at,
      end_at: row.end_at,
      description: row.description,
      music_group: {
        id: row.music_group_id,
        name: row.music_group_name,
        style: row.music_group_style,
      },
    }));

    res.json(events);
  } catch (error) {
    console.error("Error fetching bar events:", error);
    res.status(500).json({ error: "Failed to fetch bar events" });
  }
};

router.get("/bars", getAllBars);
router.get("/bars/:id", getBarById);
router.get("/bars/:id/events", getBarEvents);

export default router;
