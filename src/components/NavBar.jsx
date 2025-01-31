function scrollTo(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
}

export default function NavBar() {
    return (
        <>
            <nav className="fixed flex justify-center w-full top-2 z-10">
                <ul className="flex justify-between gap-3 bg-gray-700/60 border border-gray-800 backdrop-blur-sm px-5 py-2  font-medium rounded-full">
                    <li>
                        <button onClick={()=>scrollTo('projects')} className="text-white cursor-pointer hover:text-blue-700">Proyectos</button>
                    </li>
                    <li>
                        <button onClick={()=> scrollTo('skills')}  className="text-white cursor-pointer hover:text-blue-700">Skills</button>
                    </li>
                    <li>
                        <button onClick={()=>scrollTo('education')} className="text-white cursor-pointer hover:text-blue-700">Educacion</button>
                    </li>
                    <li>
                        <button onClick={()=>scrollTo('about')} className="text-white cursor-pointer hover:text-blue-700">Sobre mi</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}