import Cabecalho from './Cabecalho'

export interface PaginaProps {
    children: React.ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Cabecalho />
            <main
                className={`
                    flex-1 w-full mx-auto
                    ${props.className ?? ''} py-10 px-10
                `}
            >
                {props.children}
            </main>
        </div>
    )
}
