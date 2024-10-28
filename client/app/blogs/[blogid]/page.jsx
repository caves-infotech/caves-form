import React from 'react'

async function page({params}) {
    const { blogid } = await params; // Get the ID from the URL parameters
  return (
    <div>
        hey {blogid} is here
    </div>
  )
}

export default page