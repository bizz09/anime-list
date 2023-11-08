
import { authUserSession } from '@/libs/auth-libs'
import Image from 'next/image'

const page = async () => {
    const user = await authUserSession()
  return (
    <div className='m-4'>

        <h3>Welcome <span className='font-bold'>{user.name}</span></h3>
        <Image src={user.image} width={250} height={250} alt='' />
    </div>
  )
}

export default page
