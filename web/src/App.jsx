import { useState } from 'react'
import { HeartIcon } from '@heroicons/react/outline'

const MAX_TWEET_CHAR = 140

function TweetForm() {
  const [text, setText] = useState('')

  function changeText(e) {
    setText(e.target.value)
  }

  return (
    <div className="border-b border-silver p-4 space-y-6">
      <div className="flex p-4 space-x-7">
        <img src="/src/avatar.svg" className="w-7" />
        <h1 className="font-bold text-xl" >Página Inicial</h1>
      </div>

      <form className="pl-12 text-lg flex flex-col">
        <textarea
          name="text"
          placeholder="O que está acotecendo?"
          className="bg-transparent outline-none disabled:opacity-50"
          onChange={changeText}
        />

        <div className="flex justify-end items-center space-x-3">
          <spam className="text-sm">
            <spam>{text.length}</spam> / <span className="text-birdBlue">{MAX_TWEET_CHAR}</span>
          </spam>
          <button
            className="bg-birdBlue px-5 py-2 rounded-full disabled:opacity-50"
            disabled={text.length > MAX_TWEET_CHAR}
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  )
}

function Tweet({ name, username, avatar, children }) {
  return (
    <div className="flex space-x-3 p-4 border-b border-silver">
      <div>
        <img src="/src/avatar.svg" />
      </div>
      <div className="space-y-1">
        <span className="font-bold text-sm">{name}</span>{' '}
        <span className="text-sm text-silver">@{username}</span>

        <p>{children}</p>
        <div className="flex space-x-1 text-silver text-sm items-center">
          <HeartIcon className="w-6 stroke-1 stroke-sliver" />
          <spam>1.2k</spam>
        </div>
      </div>
    </div>
  )
}

export function App() {
  return (
    <>
      <TweetForm />
      <div>
        <Tweet name="Elon Musk" username="elonmusk" avatar="/src/avatar.svg">
          Let’s make Twitter maximun fun!
        </Tweet>

        <Tweet name="Mateus Barboza" username="omateusbarboza" avatar="/src/avatar.svg">
          Let’s make Twitter maximun awesome!
        </Tweet>
      </div>
    </>
  )
}
