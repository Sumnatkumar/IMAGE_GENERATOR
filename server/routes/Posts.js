import exprss from "express";
import { createPost, getAllPosts } from "../controllers/Posts.js";

const router = exprss.Router();

router.get("/", getAllPosts);
router.post("/", createPost);

export default router;
