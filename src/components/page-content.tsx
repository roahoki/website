import Link from "next/link"

export function PageContent() {
  return (
    <article className="px-6 py-6 md:max-w-xl md:pt-12 md:pl-8 md:pr-0">
      <h1 className="text-base font-semibold text-foreground mb-6">Joaquín Peralta</h1>

      <div className="space-y-5 text-sm leading-relaxed text-foreground/90">
        <p>
          Soy un Ingeniero de Software y trabajo como Trainee en{" "}
          <Link href="https://atipic.us/" className="underline underline-offset-2 hover:text-foreground">
            Atipicus
          </Link>
          . Actualmente mi foco está en el desarrollo de Agentes de IA para el sector de la salud, pero mis intereses abarcan todo el stack de desarrollo, desde la infraestructura en la nube hasta las interfaces de usuario.
        </p>

        <p>
          Durante mi paso por la universidad tuve el privilegio de trabajar como ayudante y coordinador en varios cursos de ingeniería, lo que me permitió profundizar mis conocimientos y habilidades pedagógicas. A veces hago videos en youtube.
        </p>

        <p>
          Puedes conocer más sobre mi historial e intereses a través de mis{" "}
          <Link href="/experience" className="underline underline-offset-2 hover:text-foreground">
            experiencias
          </Link>
          ,{" "}
          <Link href="/projects" className="underline underline-offset-2 hover:text-foreground">
            proyectos
          </Link>
          y {" "}
          <Link href="https://github.com/roahoki" className="underline underline-offset-2 hover:text-foreground">
            GitHub
          </Link>
          {" "}. Conversemos por{" "}
          <Link href="https://www.linkedin.com/in/joaquin-peralta-perez/" className="underline underline-offset-2 hover:text-foreground">
            LinkedIn
          </Link>
          .
        </p>
      </div>
    </article>
  )
}