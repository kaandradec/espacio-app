import Planeta from "../components/Planeta";

export default function Planetas() {
  return (
    <div className="flex justify-between w-full h-screen">
      <section>
        <div className="aspect-square w-20">
          <img src="/tierra.png" alt="" />
        </div>
      </section>
      <section className="aspect-square h-full">
        <Planeta />
      </section>
    </div>
  );
}
