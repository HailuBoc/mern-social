import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'

// Hydrate the React app for server-side rendering
hydrate(<App/>, document.getElementById('root'))
