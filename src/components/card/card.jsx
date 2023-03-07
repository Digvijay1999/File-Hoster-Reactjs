import cardCSS from './card.module.css'

function Card() {
    return (
        <div className={cardCSS.card}>
            <div className={cardCSS.info}>
                <p>File name: asds dsjdkdk sdjsdjshdj sdjsdjshdj.pdf</p>
                <p>Size:220MB</p>
            </div>
            <div className={cardCSS.butttons}>
                <button className={cardCSS.btn}>Download</button>
                <button className={cardCSS.btn}>Delete</button>
            </div>
        </div>
    )
}

export default Card;