function Title({ title, children }) {
  return (
    <h1>{title} {children}</h1>
  )
}

export function App() {
  return (
    <div id="tweet">
      <div id="col-avatar" class="col">
        <img src="/src/avatar.svg" class="tweet_img" />
      </div>
      <div id="col-text" class="col">
        <span>Elon Musk</span>
        <span>@elonmusk</span>
        <p>
          Let’s make Twitter maximun fun!
        </p>
      </div>
    </div>
  )
}

