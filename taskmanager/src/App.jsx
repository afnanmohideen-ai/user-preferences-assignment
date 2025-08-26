import React, { useState } from 'react'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, id: Date.now() }])
      setInput('')
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div style={{
      minHeight: '100vh',
      height: '100vh', // Add this line
      background: 'radial-gradient(circle at 20% 40%, #f8ffae 0%, #43c6ac 60%, #191654 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center', // Add this line
      fontFamily: 'Segoe UI, Arial, sans-serif',
      paddingTop: '40px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative floating shapes */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '80px',
        height: '80px',
        background: 'linear-gradient(135deg, #43c6ac 60%, #f8ffae 100%)',
        borderRadius: '50%',
        opacity: 0.3,
        filter: 'blur(2px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '120px',
        height: '120px',
        background: 'linear-gradient(135deg, #191654 60%, #43c6ac 100%)',
        borderRadius: '50%',
        opacity: 0.2,
        filter: 'blur(4px)'
      }} />

      <h2 style={{
        color: '#191654',
        fontSize: '3rem',
        marginBottom: '30px',
        letterSpacing: '3px',
        textShadow: '0 4px 16px #43c6ac88, 0 1px 0 #fff'
      }}>
        <span style={{
          background: 'linear-gradient(90deg, #43c6ac 0%, #191654 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Task Manager</span>
      </h2>
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '30px',
        background: 'rgba(255,255,255,0.7)',
        borderRadius: '12px',
        boxShadow: '0 4px 24px #43c6ac33',
        padding: '18px 24px'
      }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new task..."
          style={{
            padding: '14px 18px',
            borderRadius: '10px',
            border: '1.5px solid #43c6ac',
            fontSize: '1.1rem',
            outline: 'none',
            boxShadow: '0 2px 8px #43c6ac33',
            background: 'linear-gradient(90deg, #f8ffae 0%, #43c6ac22 100%)',
            transition: 'border 0.2s'
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: '14px 28px',
            borderRadius: '10px',
            border: 'none',
            background: 'linear-gradient(90deg, #43c6ac 0%, #191654 100%)',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 12px #19165433',
            transition: 'background 0.2s, transform 0.1s',
            letterSpacing: '1px'
          }}
          onMouseDown={e => e.currentTarget.style.transform = 'scale(0.96)'}
          onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span style={{ fontSize: '1.3rem', marginRight: '6px' }}>➕</span> Add
        </button>
      </div>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        width: '100%',
        maxWidth: '420px'
      }}>
        {tasks.map(task => (
          <li key={task.id} style={{
            background: 'linear-gradient(90deg, #fff 80%, #43c6ac22 100%)',
            marginBottom: '18px',
            borderRadius: '14px',
            boxShadow: '0 4px 16px #43c6ac33',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '18px 24px',
            fontSize: '1.15rem',
            transition: 'box-shadow 0.2s, transform 0.1s',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <span style={{
              color: '#191654',
              fontWeight: '600',
              letterSpacing: '1px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #43c6ac 60%, #191654 100%)',
                marginRight: '12px'
              }} />
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              style={{
                background: 'linear-gradient(90deg, #ff5858 0%, #f09819 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 2px 8px #ff585833',
                transition: 'background 0.2s, transform 0.1s',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center'
              }}
              onMouseDown={e => e.currentTarget.style.transform = 'scale(0.96)'}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span style={{ fontSize: '1.2rem', marginRight: '6px' }}>🗑️</span> Delete
            </button>
            {/* Animated gradient bar */}
            <div style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              height: '4px',
              width: '100%',
              background: 'linear-gradient(90deg, #43c6ac 0%, #191654 100%)',
              animation: 'gradientMove 2s linear infinite'
            }} />
          </li>
        ))}
      </ul>
      {/* Gradient bar animation */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}
      </style>
    </div>
  )
}