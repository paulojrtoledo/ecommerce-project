import express, { Express } from "express"; // importa express e o tipo Express
import cors from "cors";
import { Product } from "./types";
import { products } from "./products";

const app: Express = express(); // cria a instância do servidor

app.use(cors()); // habilita o cors para todas as rotas
app.use(express.json()); // permite interpretar requisições json


// Define a porta do servidor e garante que não de erro com o operador ternário
const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// rota teste
app.get("/", (req, res) => {
    res.send("Backend com Firestore working good!");
})

// retorna lista de todos os produtos
app.get("/products", (req, res) => {
    res.json(products)
})
 
// retorna detalhes de um produto específico
app.get("/products/:id", (req, res) => {
    const reqId = Number(req.params.id);

    const product = products.find(product => product.id === reqId);

    if (!product) {
        return res.status(404).json({ message: "Produto não encontrado" });
    }

    res.json(product);
});


// rota para adicionar um produto (versão para teste)
app.post("/products", (req, res) => {
    const newProduct = req.body;
    
    if (!newProduct.id || !newProduct.name || !newProduct.category || !newProduct.price || !newProduct.stock) {
        return res.status(400).json( { message: "Faltam informações do produto"});
    } 

    products.push(newProduct);
    return res.status(201).json({ 
        message: "Produto criado com sucesso",
        product: newProduct
    });

})

app.put("/products/:id", (req, res) => {
    const updateId = Number(req.params.id);

    const product = products.find(product => product.id === updateId);
    if (!product) 
        return res.status(404).json({ message: "Produto não encontrado" });

    const { name, category, price, stock } = req.body;
    if (!name && !category && !price && !stock) 
        return res.status(400).json({ message: "Faltam informações do produto" });

    product.name = name || product.name;
    product.category = category || product.category;
    product.price = price || product.price;
    product.stock = stock || product.stock;

    return res.status(200).json({
        message: "Produto atualizado com sucesso",
        product
    });
});

// remove produtos a partir do id
app.delete("/products/:id", (req, res) => {
    const deleteId = Number(req.params.id);

    const index = products.findIndex(product => product.id === deleteId);

    if (index === -1) {
        return res.status(404).json({ message: "Produto não encontrado" });
    }

    const removedProduct = products.splice(index, 1)[0];

    return res.status(200).json({
        message: "Produto deletado com sucesso",
        product: removedProduct
    });
});
