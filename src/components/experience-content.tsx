import React from "react"
import Link from "next/link"

interface ProjectSectionProps {
    icon?: string
    title: string
    children: React.ReactNode
}

function ProjectSection({ icon, title, children }: ProjectSectionProps) {
    return (
        <section className="mb-8">
            <h2 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                {icon && <span>{icon}</span>}
                {title}
            </h2>
            <div className="text-sm leading-relaxed text-foreground/90">
                {children}
            </div>
        </section>
    )
}

function UnderlineLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground/70"
        >
            {children}
        </a>
    )
}

export function ExperienceContent() {
    return (
        <article className="px-6 py-6 md:max-w-xl md:pt-12 md:pl-8 md:pr-8">
            <h1 className="text-base font-semibold text-foreground mb-4">Experiencia</h1>

            <p className="text-sm leading-relaxed text-foreground/90 mb-8">
                Me especializo en el desarrollo Full Stack moderno, desde arquitectura en la nube hasta interfaces de usuario escalables.
            </p>

            <ProjectSection icon="A" title="Atipicus">
                <p>
                    Actualmente trabajo como Software Engineer Trainee en <UnderlineLink href="#">Atipicus</UnderlineLink>.
                    Estoy desarrollando un sistema de agente de IA centrado en el sector de la salud.
                    Mi stack principal incluye el uso avanzado del <UnderlineLink href="#">Google SDK</UnderlineLink>, infraestructura en <UnderlineLink href="https://cloud.google.com/">Google Cloud</UnderlineLink> y gestión de datos con <UnderlineLink href="https://www.mongodb.com/">MongoDB</UnderlineLink>.
                </p>
            </ProjectSection>

            <ProjectSection icon="B" title="Biomechanics.wav">
                <p>
                    Estoy a cargo del desarrollo fullstack del sitio oficial de <UnderlineLink href="https://www.biomechanics.cl/links">Biomechanics</UnderlineLink>, un proyecto artístico-tecnológico.
                    Tomo todas las decisiones técnicas, utilizando <UnderlineLink href="https://nextjs.org">Next.js</UnderlineLink>, <UnderlineLink href="https://supabase.com">Supabase</UnderlineLink> y <UnderlineLink href="https://clerk.com">Clerk</UnderlineLink>
                    He implementado una arquitectura escalable de back-office y optimizado el SEO para asegurar un alto rendimiento en producción.
                </p>
            </ProjectSection>

            <ProjectSection icon="F" title="Freelance Fullstack">
                <p>
                    Participé en el desarrollo de una plataforma completa de apuestas deportivas utilizando <UnderlineLink href="https://react.dev">React</UnderlineLink> y <UnderlineLink href="https://nodejs.org">Node.js</UnderlineLink>.
                    El proyecto incluyó la implementación de workers, funciones serverless y un pipeline de CI/CD. Desplegué la infraestructura utilizando servicios de <UnderlineLink href="https://aws.amazon.com">AWS</UnderlineLink> como EC2, CloudFront y S3.
                </p>
            </ProjectSection>

            <ProjectSection icon="M" title="Mesti">
                <p>
                    Me desempeñé como Líder Técnico Mobile para el cliente <UnderlineLink href="https://mesti.app/">Mesti</UnderlineLink>.
                    Dirigí el desarrollo de tres aplicaciones móviles con <UnderlineLink href="https://reactnative.dev">React Native</UnderlineLink>, incluyendo gestión de menús y herramientas para bartenders.
                    Coordiné al equipo de desarrolladores y gestioné el ciclo completo desde el levantamiento de requerimientos hasta el despliegue.
                </p>
            </ProjectSection>

            <ProjectSection icon="P" title="PUC Chile">
                <p>
                    Poseo una sólida trayectoria académica y docente en la Pontificia Universidad Católica de Chile.
                    He sido Coordinador General del curso Arquitectura de Computadores e impartido ayudantías en cátedras clave como Tecnologías y Aplicaciones Web, Estructuras de Datos y Programación Avanzada.
                </p>
            </ProjectSection>
        </article>
    )
}