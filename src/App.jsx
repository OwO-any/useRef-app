import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [ userId, setUserId ] = useState("");
  const idRef = useRef("");
  const pwRef = useRef("");

  useEffect(() => {
    idRef.current.focus();
  }, []);

  // 아이디 입력이 10자리가 넘어가면 focus가 비밀번호로 이동
  useEffect(() => {
    if (userId.length >= 10) {
      pwRef.current.focus();
    }
  }, [userId])

  return (
    <>
      <div>
        아이디 : <input type="text" ref={ idRef } value={ userId } onChange={ (e) => setUserId(e.target.value) } />
      </div>
      <div>
        비밀번호 : <input type="password" ref={ pwRef } />
      </div>
    </>
  )
}

export default App
