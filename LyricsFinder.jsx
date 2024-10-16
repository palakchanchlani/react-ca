import React, { useState } from 'react'
import axios from 'axios'

function LyricsFinder(){
    const[artist, setArtist] = useState('')
    const[song, setSong] = useState('')
    const[lyrics, setLyrics] = useState('')

    function getLyrics(){
        if(song === "" || artist === ""){
            return
        }
        axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
        //.then(res =>res.data.lyrics)
        .then(res =>
            //console.log(res.data.lyrics),
            setLyrics(res.data.lyrics)
        )
        //console.log(lyrics)
    }

    return(
        <div>
            <h1>Lyrics Finder App</h1>
            <input type="text" 
            placeholder='Artist Name'
            onChange={(e) =>{setArtist(e.target.value)}} 
            />

            <input type="text" 
            placeholder='Song Name' 
            onChange={(e) =>{setSong(e.target.value)}} 
            />
            <hr />
            <button onClick={getLyrics}>Search</button>
            <hr />
            <pre>{lyrics}</pre>
        </div>
    )
}

export default LyricsFinder;