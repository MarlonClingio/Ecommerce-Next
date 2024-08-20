import { IconSearch } from '@tabler/icons-react'

export default function Input() {
  return (
      <div className="w-full">
        <form className='flex relative'>
          <input type="text" placeholder='Buscar' className="w-full rounded-lg p-2.5"/>
          <IconSearch size={30} stroke={1} className="m-2 absolute right-0" />
        </form>
      </div>
  )
}
