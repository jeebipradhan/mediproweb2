'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChangePassword } from './ChangePassword'

interface LoginProps {
  onLogin: (success: boolean, username: string) => void
  isLoggedIn: boolean
  username: string
}

export const Login: React.FC<LoginProps> = ({ onLogin, isLoggedIn, username }) => {
  const [loginUsername, setLoginUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleLogin = () => {
    if (loginUsername === 'admin' && password === 'medipro') {
      onLogin(true, loginUsername)
      setIsOpen(false)
      setError('')
      setLoginUsername('')
      setPassword('')
    } else {
      setError('Invalid username or password')
    }
  }

  const handleLogout = () => {
    onLogin(false, '')
  }

  const handlePasswordChange = (oldPassword: string, newPassword: string) => {
    if (oldPassword === 'medipro') {
      alert('Password changed successfully')
    } else {
      alert('Current password is incorrect')
    }
  }

  if (isLoggedIn) {
    return (
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium">Welcome, {username}</span>
        <ChangePassword onPasswordChange={handlePasswordChange} />
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            id="username"
            placeholder="Username"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

