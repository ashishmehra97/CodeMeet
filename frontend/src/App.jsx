import { SignInButton, SignOutButton, UserButton, Show } from '@clerk/react'
import './App.css'

const App = ()=>{
  return(
    <>
      <h1>Welcome to my App</h1>
      <Show when="signed-out">
        <SignInButton mode='modal'/>
      </Show>

      <Show Show when="signed-in">
        <SignOutButton />
      </Show>

      <UserButton />
    </>
  )
}



export default App
