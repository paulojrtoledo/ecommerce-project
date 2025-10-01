import { db } from "./src/firebase";
import { products } from "./src/products"; // caminho para o arquivo onde está o array

async function seed() {
  try {
    for (const product of products) {
      await db.collection("products").doc(product.id.toString()).set({
        name: product.name,
        category: product.category,
        price: product.price,
        stock: product.stock,
      });
    }
    console.log("Todos os produtos foram inseridos com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir produtos:", error);
  }
}

seed();
