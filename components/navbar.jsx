'use client'

import { useRouter } from 'next/navigation';
export default function Navbar() {
    const router = useRouter();
    return (
        <div>
            <button className="pr-10" onClick={() => router.push('/')}>home</button>
            <button className="pr-10" onClick={() => router.push('/aboutUs')}>about us</button>
            <button className="pr-10" onClick={() => router.push('/resources')}>resources</button>
            <button className="pr-10" onClick={() => router.push('/events')}>events</button>
            <button className="pr-10" onClick={() => router.push('/designChallenge')}>design challenge</button>
            <hr></hr>
        </div>
    )
}