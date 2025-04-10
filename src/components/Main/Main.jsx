// importazione file
import { useState } from 'react'

export default function Main(props){
    const[manga, setManga]= useState('')
    const [mangaList, setNewMangaList] = useState(props.mangaList)

    function sendForm (event){
        event.preventDefault();

        const newId = mangaList.length > 0 ? mangaList.at(-1).id + 1 : 1;

        const newManga ={
            id: newId,
            title: manga,
            description: 'descrizione manga'
        }

        const newMangaList =[...mangaList, newManga]
        console.log(newMangaList)
        setNewMangaList(newMangaList)
        setManga('')
        
    }

    function deleteManga(indexManga){
        const deleteMangaArray = mangaList.filter((manga ,index) => indexManga !== index)
        setNewMangaList(deleteMangaArray)
    }
    

    return(
        <main>
            <div className="container">
                <ul className="manga-list">
                    {mangaList.map((manga,index) =>(
                        <li key={manga.id} >
                            <h2>{manga.title}</h2>
                            <button className='btn-list' onClick={()=> deleteManga(index)}><i className="fa-solid fa-trash-can"></i></button>
                        </li>
                    ))}
                </ul>
                <form action="" className="form-container" onSubmit={sendForm}>
                    <input required type="text" value={manga} onChange={event=> setManga(event.target.value)} className='input-form' placeholder='Inserici qui il manga' />
                    <button className='btn-form'>Invia il manga da leggere</button>
                </form>
            </div>
        </main>
    )
}