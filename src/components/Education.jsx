export default function Education() {
    const courses = [
        {name: 'Algoritmos y Programación (C++)', institution: 'Universidad de los Llanos', imgInst:'/unillanos.png'},
        {name: 'Programación Enfocada a Objetos (C++)', institution: 'Universidad de los Llanos', imgInst:'/unillanos.png'},
        {name: 'Algoritmos y Estructuras de Datos (C++)', institution: 'Universidad de los Llanos', imgInst:'/unillanos.png'},
        {name: 'Bases de Datos (PostgreSQL y PHP)', institution: 'Universidad de los Llanos', imgInst:'/unillanos.png'},
        {name: 'Ingeneria de Software (Java y SpringBoot)', institution: 'Universidad de los Llanos', imgInst:'/unillanos.png'},
    ];
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {courses.map((course, index) => (
                    <article
                        key={index}
                        className=" dark:bg-gray-800 dark:hover:bg-gray-900 px-4 py-2 rounded-lg shadow shadow-gray-400 dark:shadow-gray-800/30 hover:shadow-md transition-shadow duration-300 flex flex-wrap items-center justify-center gap-2"
                    >
                        <div className="flex flex-col items-center gap-3 justify-start">
                        <img
                            className="w-10 h-10 bg-contain bg-center bg-no-repeat bg-gray-800 rounded-full"
                            src={course.imgInst}
                            />
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{course.institution}</p>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 font-semiboldtext-left">
                            {course.name}
                        </p>
                    </article>
                ))}
            </div>
        </>
    );
}
