"use client"

import { useCallback, useState } from "react"
import { UserListsViewModel, User } from "../models/UserListsViewModel.interface"

export const useUserListsViewModel = (): UserListsViewModel => {
  const [name, setName] = useState("")
  const [users, setUsers] = useState<User[]>([])

  const handleChangeName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value)
    },
    []
  )

  const handleAdd = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const trimmed = name.trim()
      if (!trimmed) {
        return
      }

      setUsers((currentUsers) => [
        { id: Date.now().toString(), name: trimmed },
        ...currentUsers,
      ])
      setName("")
    },
    [name]
  )

  const handleDelete = useCallback((id: string) => {
    setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id))
  }, [])

  return {
    name,
    users,
    hasUsers: users.length > 0,
    handleAdd,
    handleChangeName,
    handleDelete,
  }
}
