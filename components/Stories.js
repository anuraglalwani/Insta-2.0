import React, { useEffect, useState } from 'react'
import Story from './Story'
import { faker } from '@faker-js/faker'
import { useSession } from 'next-auth/react'
function Stories() {
  const [suggestions, setSuggestions] = useState([])
  const { data: session } = useSession()

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      username: faker.name.firstName(),
      name: faker.name.findName(),
      author_image: faker.image.abstract(),
      avatar: faker.image.avatar(),
      id: i,
    }))
    console.log(suggestions)
    setSuggestions(suggestions)
  }, [])

  return (
    <div
      className="mt-8 flex space-x-2  overflow-x-scroll
     rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black"
    >
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile, id) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
