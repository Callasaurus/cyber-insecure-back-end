import express from "express";
const knowledgeRouter = express.Router();

import {
    getAllKnowledgeBank,
    getKnowledgeByTitle,
    getKnowledgeByCategory
} from '../models/knowledgeBankModels.js'

knowledgeRouter.get("/", async (req, res) => {
    const allKnowledge = await getAllKnowledgeBank();
    return res.json({ success: true, payload: allKnowledge });
})

knowledgeRouter.get("/:title", async (req, res) => {
    const specificKnowledge = await getKnowledgeByTitle(req.params.title);
    return res.json({ success: true, payload: specificKnowledge });
})

knowledgeRouter.get("/category/:category", async (req, res) => {
    const specificKnowledge = await getKnowledgeByCategory(req.params.category);
    return res.json({ success: true, payload: specificKnowledge });
})

export default knowledgeRouter;