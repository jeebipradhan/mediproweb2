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

interface ChangePasswordProps {
  onPasswordChange: (oldPassword: string, newPassword: string) => void
}

export const ChangePassword: React.FC<ChangePasswordProps> = ({ onPasswordChange }) => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match')
      return
    }
    onPasswordChange(oldPassword, newPassword)
    setIsOpen(false)
    setOldPassword('')
    setNewPassword('')
    setConfirmPassword('')
    setError('')
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Change Password</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            id="old-password"
            type="password"
            placeholder="Current Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <Input
            id="new-password"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Input
            id="confirm-password"
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button onClick={handleChangePassword}>Change Password</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

