import ufcss from './uploadfile.module.css'

import clicktoupload from '../../images/clicktoupoad.jpg'


function Uploadfile() {
    return (
        <>
            <div className={ufcss.file_selector_card}>

                <div className={ufcss.card}>
                    <div className={ufcss.heading}>
                        <p>UPLOAD FILES</p>
                    </div>

                    <div className={ufcss.upload_info}>
                        <div className={ufcss.upload_process}>
                            <p>filename</p>
                            <div className={ufcss.progress_bar}></div>
                        </div>

                        <form className={ufcss.form}>
                            <div className={ufcss.image_container}>
                                <img src={clicktoupload} alt="" />
                            </div>
                            <input type="file" id="file" required name="file" hidden />
                            <p>Click to upload</p>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Uploadfile