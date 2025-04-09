// importazione file
import { useState } from 'react'

export default function Main(props){
    const {mangaList} = props
    const[manga, setManga]= useState('')
    console.log(mangaList)

    function sendForm (event){
        event.preventDefault();
        console.log(manga)
        const newMangaList =[...mangaList,manga]
        console.log(newMangaList)
        setManga(newMangaList)
        
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
                    <input type="text" value={manga} onChange={event=> setManga(event.target.value)}/>
                    <button>invia il manga da leggere</button>
                </form>
            </div>
        </main>
    )
}