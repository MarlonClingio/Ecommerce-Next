
import Logo from './Logo'
import Input from './Input'
import Carrinho from './Carrinho'

export default function Cabecalho() {
    return (
        <header
            className="
                flex justify-between items-center
                bg-zinc-800 h-20 px-10 gap-10
            "
        >
            <Logo />
            <Input />
            <Carrinho />
        </header>
    )
}
