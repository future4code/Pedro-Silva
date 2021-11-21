import React from "react";

export default class CriarPlaylist extends React.Component {

    render () {
    return (
        <div>
            <h2> Bem-vindo ao Labefy! </h2>

            <div>
            <h3> Crie suas Playlists: </h3>
            <input
                placeholder='Nome da Playlist'
                onChange={this.props.playlistInput}
                value={this.props.valueInputPlaylist}
            />
            <button onClick={this.props.newPlaylist}>Criar Playlists</button>
            </div>

        </div>
    )
    }
}