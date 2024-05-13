const members = [
  {
    name: "Jordan Heredia",
    role: "Estudiante",
    image: "/imagenes/avatar-hombre-2.png",
  },
  {
    name: "Solange Martines",
    role: "Estudiante",
    image: "/imagenes/avatar-mujer-1.png",
  },
  {
    name: "Carolina Iguad",
    role: "Estudiante",
    image: "/imagenes/avatar-mujer-2.png",
  },
  {
    name: "Elian Ayala",
    role: "Estudiante",
    image: "/imagenes/avatar-hombre-1.png",
  },
];

const Info = () => {
  return (
    <div className="flex-col mx-auto items-center max-w-xl mt-4">
      <h1 className="text-2xl font-bold">Espacio App</h1>
      <p className="text-gray-400">
        Este proyecto fue elaborado por el estudiantes del 2do año de
        bachillerato técnico.
      </p>
      <p className="text-gray-400 text-balance">
        Nuestro trabajo trata de hacer una página web interactiva sobre el
        espacio. En ella se pueden ver planetas del sistema solar, imágenes de
        los rovers que han explorado Marte y la imagen del día de la NASA.
      </p>
      <h4 className="text-lg font-bold mt-2">Integrantes:</h4>
      <div className="grid grid-cols-2 gap-4">
        {members.map((member, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-md font-bold">{member.name}</h2>
              <p className="text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
