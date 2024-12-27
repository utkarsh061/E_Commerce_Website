"use client"

function Modal(props){
    const { title,description,handleMainbuttonClick,handleCancelButtonClick,buttonTitle,doubleButton } = props

    return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4 sm:mx-0">
                {/* Modal Header */}
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button
                    onClick={handleCancelButtonClick}
                    >
                    ✖
                    </button>
                </div>
    
                {/* Modal Content */}
                <div>
                    <p className="text-gray-700">
                    {description}
                    </p>
                </div>
    
                {/* Modal Footer */}
                <div className="mt-6 flex justify-between space-x-2">
                    {doubleButton && <button
                    className="px-8 py-2 border border-black rounded-3xl hover:bg-gray-300"
                    onClick={handleCancelButtonClick}
                    >
                    Cancel
                    </button>}
                    <button className="px-8 py-2 text-white rounded-3xl bg-black hover:bg-gray-700" onClick={handleMainbuttonClick}>
                    {buttonTitle}
                    </button>
                </div>
                </div>
            </div>
    )
}

export default Modal;