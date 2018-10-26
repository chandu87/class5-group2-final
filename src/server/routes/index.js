import express from "express";

import internshipsRoute from "./internships";
import mentorsRoute from "./mentors";
import networkingRoute from "./networking";

const router = express.Router();

router.get("/hello", (req, res) => {
  res.send({
    hello: "world"
  });
});
router.use("/internships", internshipsRoute);
router.use("/mentors", mentorsRoute);
router.use("/networking", networkingRoute);

router.use((req, res, next) => {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

export default router;