function Button({label, onclick}){
    return (
        <button
        classname="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        oclick={onclick}
        >
            {label}
        </button>
    )
}

export default Button