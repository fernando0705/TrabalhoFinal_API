const express = require('express');
const app = express();

app.use(express.json());

let produtos = [
    { id: 1, nome: "Notebook", preco: 3500, categoria: "Informática" },
    { id: 2, nome: "Mouse", preco: 150, categoria: "Informática" },
    { id: 3, nome: "Teclado", preco: 150, categoria: "Informática" },
    { id: 4, nome: "Headset", preco: 150, categoria: "Informática" },
    { id: 5, nome: "Monitor", preco: 150, categoria: "Informática" },
    { id: 6, nome: "Processador", preco: 150, categoria: "Informática" },
    { id: 7, nome: "Placa de video", preco: 150, categoria: "Informática" },
    { id: 8, nome: "Gabinete", preco: 150, categoria: "Informática" },
    { id: 9, nome: "Mouse pad", preco: 150, categoria: "Informática" },
    { id: 10, nome: "Memória RAM", preco: 150, categoria: "Informática" },
];

let proximoId = produtos.length+1;

//validação
function validarProduto(nome, preco, categoria) {
    if (!nome || typeof nome !== "string" || nome.trim() === "") {
        return "Nome inválido";
    }

    if (typeof preco !== "number" || preco <= 0) {
        return "Preço deve ser um número maior que 0";
    }

    if (!categoria || typeof categoria !== "string" || categoria.trim() === "") {
        return "Categoria inválida";
    }

    return null;
}

// get produtos
app.get('/api/produtos', (req, res) => {
    try {
        res.json(produtos);
    } catch (err) {
        res.status(500).json({ erro: "Erro ao buscar produtos" });
    }
});

// get por id
app.get('/api/produtos/:id', (req, res) => {
    try {
        const produto = produtos.find(p => p.id === parseInt(req.params.id));

        if (!produto) {
            return res.status(404).json({ erro: "Não encontrado" });
        }

        res.json(produto);
    } catch (err) {
        res.status(500).json({ erro: "Erro ao buscar produto" });
    }
});

// post
app.post('/api/produtos', (req, res) => {
    try {
        const { nome, preco, categoria } = req.body;
        const erro = validarProduto(nome, preco, categoria);
        if (erro) {
            return res.status(400).json({ erro });
        }
        const novoProduto = {
            id: proximoId++,
            nome,
            preco,
            categoria
        };
        produtos.push(novoProduto);
        res.status(201).json(novoProduto);
    } catch (err) {
        res.status(500).json({ erro: "Erro ao criar produto" });
    }
});

// put
app.put('/api/produtos/:id', (req, res) => {
    try {
        const produto = produtos.find(p => p.id === parseInt(req.params.id));

        if (!produto) {
            return res.status(404).json({ erro: "Não encontrado" });
        }

        const { nome, preco, categoria } = req.body;

        const erro = validarProduto(nome, preco, categoria);
        if (erro) {
            return res.status(400).json({ erro });
        }

        produto.nome = nome;
        produto.preco = preco;
        produto.categoria = categoria;

        res.json(produto);

    } catch (err) {
        res.status(500).json({ erro: "Erro ao atualizar produto" });
    }
});

// delete
app.delete('/api/produtos/:id', (req, res) => {
    try {
        const index = produtos.findIndex(p => p.id === parseInt(req.params.id));
        if (index === -1) {
            return res.status(404).json({ erro: "Não encontrado" });
        }
        produtos.splice(index, 1);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ erro: "Erro ao deletar produto" });
    }
});

// servidor
app.listen(3000, () => {
    console.log('🚀 API CRUD completa na porta 3000');
});