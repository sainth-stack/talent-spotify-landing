import React from 'react'
import Link from 'next/link'

export default function AnchorLink({ title, path = "/", textColor }) {
  return (
    <Link href={path}>
      <a className={`${textColor ? 'text-white' : 'text-dark'} text-decoration-none p-2 m-2`}>{title}</a>
    </Link>

  )
}
