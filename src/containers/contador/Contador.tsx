import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center h-[100vh] w-[100vw]">
      <div className="flex justify-center flex-col max-w-96 gap-2 text-center">
        <h1 className=" font-extrabold text-3xl">EL SWITCHER</h1>
        <h2>Contador: {count}</h2>
        <div className="flex justify-between gap-2">
          <Button
            className="w-full h-8 text-3xl"
            onClick={() => setCount((c) => c + 1)}
          >
            +
          </Button>
          <Button
            className="w-full h-8 text-3xl"
            onClick={() => setCount((c) => c - 1)}
          >
            -
          </Button>
        </div>
        <Link to="/" variant="outline">
          Ir a Home
        </Link>
      </div>
    </div>
  );
}

export default Contador;
