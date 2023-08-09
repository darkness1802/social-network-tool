import { io } from "socket.io-client"
import { useEffect } from "react"



export default function App () {

  const socket = io("http://localhost:7777")

  useEffect(() => {


  }, [socket])

  const handleTest = () => {
    socket.emit("like", { to : "tung" })
  }

  return <div>
    <button onClick={handleTest}>Test</button>
  </div>
}