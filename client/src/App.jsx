import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-400">Hello, Tailwind CSS! 🚀</h1>
        <p className="mt-2 text-gray-300">React + Vite + Tailwind setup is working!</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg">
          Click Me
        </button>
      </div>
    </div>
    </>
  )
}

export default App
