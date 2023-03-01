import { Outlet } from 'react-router-dom';

export default function Admin() {
  return (
    <div>
      <h1>Espace admin</h1>
      
      <Outlet />
    </div>
  )
}
