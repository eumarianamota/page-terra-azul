
import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Contact } from "./_components/contact";
import { Services } from "./_components/services";

export default function Home() {
  return (
    <main>
      < Hero />
      < Services />
      < About />
      < Contact />
    </main>
  )
}
