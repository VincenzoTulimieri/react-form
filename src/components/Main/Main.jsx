// importazione file
import { useState } from 'react'

export default function Main(props){
    const {mangaList} = props
    console.log(mangaList)
    const{manga, setManga}= useState('ciao')

    
    console.log(useState())

    function sendForm (event){
        event.preventDefault();
        console.log(manga)
    }

    return(
        <main>
            <div className="container">
                <ul className="manga-list">
                    {mangaList.map(manga =>(
                        <li key={manga.id} >
                            <h2>{manga.title}</h2>
                        </li>
                    ))}
                </ul>
                <form action="" className="form-container" onSubmit={sendForm}>
                    <input type="text" value={manga} />
                    <button>invia il manga da leggere</button>
                </form>
            </div>
        </main>
    )
}