"use client"

function FirstDesign(props){
    const {title,description,imageUrl,style}=props
    return(
        <div className="text-black">
        <div className="hover:-translate-y-7 duration-1000 shadow-2xl flex flex-col sm:flex-row items-center rounded-2xl p-6">
            <div className="basis-1/2">
                    <img src={imageUrl} className={style} ></img>
            </div>
            <div className="basis-1/2 ml-0 sm:ml-4 mt-2 sm:mt-0 text-center sm:text-left">
                <h2 className="font-black text-2xl">{title}</h2>
                <p className="mt-2 sm:mt-0">{description}</p>
            </div>
            </div>
        </div>
    )
}
export default FirstDesign; 