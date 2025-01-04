"use client"

function NoData(props){
    const { text,height,width } = props

    return (
        <div className={`flex justify-center items-center ${height} ${width} bg-gray-100 rounded-xl`}>
      <p className="text-gray-500 text-2xl">{text}</p>
    </div>
    )

}

export default NoData;