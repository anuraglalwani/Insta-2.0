import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
function Suggestions() {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      username: faker.name.firstName(),
      name: faker.name.findName(),
      author_image: faker.image.abstract(),
      avatar: faker.image.avatar(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-4 ml-10">
      <div className="mb-5  flex  justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600 ">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="mt-2 flex items-center justify-between"
        >
          <img
            className="h-10 w-10 rounded-full border-[2px]"
            src={profile.avatar}
            alt=""
          />

          <div className="ml-4 flex-1">
            <h2 className="text-sm font-semibold">{profile.username}</h2>

            <h3 className="text-xs text-gray-400">
              Neque porro quisquam est qui dolorem
            </h3>
          </div>

          <button className='text-blue-400 ml-3 text-xs font-bold'>Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
