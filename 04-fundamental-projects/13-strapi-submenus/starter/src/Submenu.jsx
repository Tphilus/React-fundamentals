import React from 'react'
import { useGlobalContext } from './Context'

export default function Submenu() {
  const {isSubmenuOpen} = useGlobalContext()
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} >Submenu</aside>
  )
}
