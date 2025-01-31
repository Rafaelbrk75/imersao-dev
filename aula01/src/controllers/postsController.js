import { getTodosPosts } from "../models/postsModel.js";

export async function listarPosts (req, res)  {
    // Busca todos os posts
    const posts = await getTodosPosts();
    // Envia os posts como resposta JSON com status 200 (OK)
    res.status(200).json(posts);
    } 