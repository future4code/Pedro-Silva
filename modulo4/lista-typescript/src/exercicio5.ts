enum ROLE {
    USER = 'user',
    ADMIN ='admin'
}

type Pessoas = {
    name: string,
    email: string,
    role: ROLE
}[]

const usuarios :Pessoas = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
]

function selecionandoUsuarios(array :Pessoas) :string[] {
    const usuariosFiltrados = array.filter((u) => {
        return u.role === ROLE.ADMIN
    })

    const emails = usuariosFiltrados.map((u) =>{
        return u.email
    })

    return emails
}

console.log(selecionandoUsuarios(usuarios))