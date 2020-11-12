import React, { useCallback } from 'react'
import Link from 'next/link'


export default function FristPost() {
    const clickMe = useCallback(() => {
        console.log('U clicked me')
    }, [])
    return (
        <React.Fragment>
            <div>Frist Post <button onClick={clickMe}>click me</button>
                <hr />
                回到首页  <Link href="/"><a >点击这里</a></Link>
            </div>
        </React.Fragment>
    )
}