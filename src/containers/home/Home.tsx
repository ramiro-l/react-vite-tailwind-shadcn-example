import { Link } from "@/components/ui/link";

function Home() {
  return (
    <div className="flex justify-center h-[100vh] w-[100vw] flex-col text-center max-w-80 mx-auto">
      <h1 className=" text-3xl font-semibold">ESTE ES EL HOME</h1>
      <Link to="/contador" variant="outline">
        Ir al contador
      </Link>
    </div>
  );
}

export default Home;
