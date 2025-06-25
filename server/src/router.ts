import express from "express";
import barRoutes from './routes/barRoutes';

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Bar-related routes (mount under /api)
router.use('/api', barRoutes);

/* ************************************************************************* */

export default router;
