import React from "react";

export default class ListaPlaylists extends React.Component {

    render() {
        return (
            <div>
                <h1> Playlists </h1>

                {this.props.listPlaylists.map((item) => {
                    return (
                        <div key={item.id}>

                            <p>{item.name}</p>

                            <button onClick={() => this.props.listDetails(item.id)}>Ver Playlist</button>
                            <button onClick={() => this.props.delete(item.id)}>Deletar</button>
                        </div>
                    )
                })}

                <button onClick={this.props.voltarCriar}> Voltar</button>
            </div>
        )
    }
}