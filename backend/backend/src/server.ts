import express, { Express } from "express"; // importa express e o tipo Express
import cors from "cors";
import { db } from "./firebase"; // caminho correto para o seu arquivo de configuração


const app: Express = express(); // cria a instância do servidor

app.use(cors()); // habilita o cors para todas as rotas
app.use(express.json()); // permite interpretar requisições json


// Define a porta do servidor e garante que não de erro com o operador ternário
const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// retorna detalhes de um produto específico
app.get("/products/:id", async (req, res) => {
    const reqId = req.params.id; // Firestore usa string como ID

    try {
        const docRef = db.collection("products").doc(reqId);
        const doc = await docRef.get();

        if (!doc.exists) {
            return res.status(404).json({ message: "Produto não encontrado" });
        }

        res.json({ id: doc.id, ...doc.data() });
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar produto", error });
    }
});

// rota para adicionar um produto 
app.post("/products", async (req, res) => {
    const newProduct = req.body;

    if (!newProduct.id || !newProduct.name || !newProduct.category || !newProduct.price || !newProduct.stock) {
        return res.status(400).json({ message: "Faltam informações do produto" });
    }

    try {
        const docRef = db.collection("products").doc(newProduct.id.toString());
        const doc = await docRef.get();

        if (doc.exists) {
            return res.status(400).json({ message: "Produto com esse ID já existe" });
        }

        await docRef.set({
            name: newProduct.name,
            category: newProduct.category,
            price: newProduct.price,
            stock: newProduct.stock,
        });

        return res.status(201).json({
            message: "Produto criado com sucesso",
            product: { id: docRef.id, ...newProduct },
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar produto", error });
    }
});

// atualiza dados do produto
app.put("/products/:id", async (req, res) => {
    const updateId = req.params.id;
    const { name, category, price, stock } = req.body;

    if (!name && !category && !price && !stock) {
        return res.status(400).json({ message: "Faltam informações do produto" });
    }

    try {
        const docRef = db.collection("products").doc(updateId);
        const doc = await docRef.get();

        if (!doc.exists) {
            return res.status(404).json({ message: "Produto não encontrado" });
        }

        await docRef.update({
            ...(name && { name }),
            ...(category && { category }),
            ...(price && { price }),
            ...(stock && { stock }),
        });

        const updatedDoc = await docRef.get();

        return res.status(200).json({
            message: "Produto atualizado com sucesso",
            product: { id: updatedDoc.id, ...updatedDoc.data() },
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao atualizar produto", error });
    }
});

// remove produtos a partir do id
app.delete("/products/:id", async (req, res) => {
    const deleteId = req.params.id;

    try {
        const docRef = db.collection("products").doc(deleteId);
        const doc = await docRef.get();

        if (!doc.exists) {
            return res.status(404).json({ message: "Produto não encontrado" });
        }

        await docRef.delete();

        return res.status(200).json({
            message: "Produto deletado com sucesso",
            product: { id: doc.id, ...doc.data() },
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao deletar produto", error });
    }
});

