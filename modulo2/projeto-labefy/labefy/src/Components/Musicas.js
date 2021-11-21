import React from "react";


export default class Musicas extends React.Component {

    render() {
        return (
            <div>
                <h1>Detalhes da Playlist</h1>
                <div>
                    <h2> Adicionar Música à Playlist</h2>
                    <input
                        placeholder='Nome da Música'
                        onChange={this.props.inputMusicName}
                        value={this.props.valueMusicName}
                    />
                    <input
                        placeholder='Artista'
                        onChange={this.props.inputArtistName}
                        value={this.props.valueArtistName}
                    />
                    <input
                        placeholder='Link de aúdio'
                        onChange={this.props.inputUrlLink}
                        value={this.props.valueUrlLink}
                    />
                    <button onClick={this.props.addMusic}>Adicionar na Playlist</button>
                </div>
                <h2>Músicas:</h2>
                {this.props.viewMusic.map((music) => {
                    return (
                        <div key={music.id}>
                            <iframe src={music.url} width='20%' height='80' frameBorder="0" allowfullscreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                    )
                })}

                <button onClick={this.props.voltarPlaylist}>Voltar para Playlists</button>
            </div>
        )
    }
}