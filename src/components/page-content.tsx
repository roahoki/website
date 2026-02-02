import Link from "next/link"

export function PageContent() {
  return (
    <article className="max-w-xl pt-12 pl-8">
      <h1 className="text-base font-semibold text-foreground mb-6">Joaquín Peralta</h1>
      
      <div className="space-y-6 text-sm leading-relaxed text-foreground/90">
        <p>
          I am a trainee developer at{" "}
          <Link href="https://atipic.us/" className="underline underline-offset-2 hover:text-foreground">
            Atipicus
          </Link>
          . My interests are broad.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt urna ut mauris scelerisque pellentesque vitae eget velit. Praesent vitae dui nibh. In condimentum purus eu mattis lacinia. Mauris velit lacus, elementum a pretium et, dictum at magna. Suspendisse potenti. Vestibulum ut mattis risus, ac dapibus nibh. Quisque tincidunt convallis augue ut posuere. Duis purus ante, vulputate vitae lectus eget, congue viverra odio. Donec et vestibulum ligula, vel mattis est. Quisque sed tempus augue, id accumsan ex. Ut rutrum pulvinar eros, non efficitur turpis efficitur sit amet. Proin sit amet justo ut lorem vehicula blandit.
        </p>

        <p>
          You can gain further insights into my background and interests through my{" "}
          <Link href="/thoughts" className="underline underline-offset-2 hover:text-foreground">
            thoughts
          </Link>
          ,{" "}
          <Link href="/projects" className="underline underline-offset-2 hover:text-foreground">
            projects
          </Link>
          , find me on{" "}
          <Link href="https://github.com/roahoki" className="underline underline-offset-2 hover:text-foreground">
            GitHub
          </Link>
          ,{" "}
          , and{" "}
          <Link href="https://www.linkedin.com/in/joaquin-peralta-perez/" className="underline underline-offset-2 hover:text-foreground">
            LinkedIn
          </Link>
          .
        </p>
      </div>
    </article>
  )
}
