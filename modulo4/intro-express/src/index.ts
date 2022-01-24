import express from 'express';
import cors from 'cors';
import { AddressInfo } from "net"

const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

// Exercício 1

app.get("/", (req, res) => {
    console.log('Testando testando')
    res.send("Hello from Express")
})

// Exercício 2

type User = {
    id: number,
    nameUser: string,
    phone: string,
    email: string,
    website: string
}[]

// Exercício 3 

const users: User = [
    {
        id: 1,
        nameUser: 'Pedro',
        phone: '9999-8888',
        email: 'pedro@labenu.com',
        website: 'oipedro.com.br'
    },
    {
        id: 2,
        nameUser: 'Joao',
        phone: '7777-8888',
        email: 'joao@labenu.com',
        website: 'joaodasneves.com.br'
    },
    {
        id: 3,
        nameUser: 'Maria',
        phone: '9999-6666',
        email: 'maria@labenu.com',
        website: 'mariaflor.com.br'
    },
    {
        id: 4,
        nameUser: 'Luisa',
        phone: '1111-5555',
        email: 'luisa@labenu.com',
        website: 'luisa.com.br'
    },
    {
        id: 5,
        nameUser: 'Barbara',
        phone: '2222-3333',
        email: 'barbara@labenu.com',
        website: 'barbara.com.br'
    }
]

// Exercício 4 

app.get('/users', (req, res) => {
    const getUsers = users.map((u) => {
        return u
    })

    res.status(200).send(getUsers)
})

// Exercício 5

type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}[]

// Exercício 6
// Fazer fora pois são informações diferentes e também porque facilita
// o tratamento dos dados e variáveis. 

const posts: Post = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        userId: 2,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        userId: 2,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        userId: 3,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        userId: 3,
        id: 6,
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
        userId: 4,
        id: 7,
        title: "magnam facilis autem",
        body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
        userId: 4,
        id: 8,
        title: "dolorem dolore est ipsam",
        body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
        userId: 5,
        id: 9,
        title: "nesciunt iure omnis dolorem tempora et accusantium",
        body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
        userId: 5,
        id: 10,
        title: "optio molestias id quia eum",
        body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    }
]

// Exercicio 7 

app.get('/posts', (req, res) => {
    const getPosts = posts.map((p) => {
        return p
    })
    res.status(200).send(getPosts)
})

// Exercício 8 

app.get('/posts/user/:id', (req, res) => {
    const userId = Number(req.params.id)
    const postsUser :Post = posts.filter((p) => {
        if (userId === p.userId) {
            return p
        }
    })
    res.status(200).send(postsUser)
})












