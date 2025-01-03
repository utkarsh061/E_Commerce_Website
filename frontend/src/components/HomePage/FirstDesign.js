"use client"

function FirstDesign(props){
    const {title,description,imageUrl,style}=props
    return(
        <div className="text-black">
        <div className="hover:-translate-y-7 duration-1000 shadow-2xl flex items-center rounded-2xl p-6">
            <div className="basis-1/2">
                    <img src={imageUrl} className={style} ></img>
            </div>
            <div className="basis-1/2">
                <h2 className="font-black text-2xl">{title}</h2>
                <p>{description}</p>
            </div>
            </div>
        </div>
    )
}
export default FirstDesign; 