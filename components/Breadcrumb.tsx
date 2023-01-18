import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Breadcrumb = () => {
  const router = useRouter()
  let joindPath = ''
  return (
    <>
      {router.asPath.split('/').map((path, index) => {
        if (path) {
          joindPath += path + '/'
          return (
            <Link
              key={index}
              href={`/${joindPath}`}
              className="text-gray-500 hover:text-gray-600"
            >
              <span className="text-gray-500 mx-2">/</span>
              {path}
            </Link>
          )
        }
      })}
    </>
  )
}

export default Breadcrumb
