"use client"

function Modal(props){
    const { title,description,handleMainbuttonClick,handleCancelButtonClick,buttonTitle,doubleButton } = props

    return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md mx-4 sm:mx-0">
                {/* Modal Header */}
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button
                    onClick={handleCancelButtonClick}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    >
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                    </button>
                    
                </div>
    
                {/* Modal Content */}
                <div>
                    <p className="text-gray-700 flex justify-center">
                    {description}
                    </p>
                </div>
    
                {/* Modal Footer */}
                <div className="mt-6 flex justify-center space-x-2">
                    {true && <button
                    className="px-4 py-2 border border-black rounded-xl hover:bg-gray-300"
                    onClick={handleCancelButtonClick}
                    >
                    Cancel
                    </button>}
                    <button className="px-6 py-2 text-white rounded-xl bg-black hover:bg-gray-800" onClick={handleMainbuttonClick}>
                    {buttonTitle}
                    </button>
                </div>
                </div>
            </div>
    )
}

export default Modal;