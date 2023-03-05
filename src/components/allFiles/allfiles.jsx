import Navbar from "../navbar/navbar"
import allfiles from "./allfiles.module.css"
import Card from "../card/card"

function AllFiles() {

    let files = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <>
            <Navbar />
            <main className={allfiles.main}>
                {files.map((item) => {
                    return <Card />
                })}
            </main>
        </>
    )
}

export default AllFiles