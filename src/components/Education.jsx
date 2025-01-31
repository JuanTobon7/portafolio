export default function Education() {
    const courses = [
        {name: 'Algoritmos y Programación (C++)', institution: 'Universidad de los Llanos', imgInst:'/unillanos.png'},
        {name: 'Programación Enfocada a Objetos (C++)', institution: 'Universidad de los Llanos', imgInst:'/unillanos.png'},
        {name: 'Algoritmos y Estructuras de Datos (C++)', institution: 'Universidad de los Llanos', imgInst:'/unillanos.png'},
        {name: 'Bases de Datos (PostgreSQL y PHP)', institution: 'Universidad de los Llanos', imgInst:'/unillanos.png'},
    ];
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course, index) => (
                    <article
                        key={index}
                        className="bg-gray-900/70 hover:bg-gray-900 p-4 rounded-lg shadow shadow-gray-800/30 hover:shadow-lg transition-shadow duration-300"
                    >
                        <div
                            className="w-full h-32 bg-contain bg-center bg-no-repeat rounded-md"
                            style={{ backgroundImage: `url(${course.imgInst})` }}
                        />
                        <h3 className="text-lg font-semibold text-white mt-4">
                            {course.name}
                        </h3>
                        <p className="text-gray-400">{course.institution}</p>
                    </article>
                ))}
            </div>
        </>
    );
}
