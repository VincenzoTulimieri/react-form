
export default function Main(props){
    const {mangaList} = props
    console.log(mangaList)
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
            </div>
        </main>
    )
}