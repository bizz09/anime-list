import Link from 'next/link'
import { authUserSession } from '@/libs/auth-libs'

const UserActionButton = async () => {
    const user = await authUserSession()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className='flex gap-4 justify-between text-primary'>
            {
                user ? <Link href={'/users/dashboard'}>{user.name}</Link> : null
            }
            <Link href={actionURL} className="bg-dark text-accent py-1 px-12 inline-block ">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton
