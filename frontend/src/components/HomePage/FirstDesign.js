"use client"

function FirstDesign(props){
    const {title,description,imageUrl,style}=props
    return(
        <div className="text-black px-52">
        <div className="hover:-translate-y-7 duration-1000 shadow-2xl flex items-center">
            <div className="pl-4 py-8">
                    <img src={imageUrl} className={style} ></img>
            </div>
            <div className="-ml-4">
                <h2 className="font-black text-2xl">{title}</h2>
                <p>{description}</p>
            </div>
            </div>
        </div>
    )
}
export default FirstDesign; 