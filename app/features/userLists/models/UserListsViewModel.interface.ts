import type { ChangeEvent, FormEvent } from "react"

export type User = {
  id: string
  name: string
}

export type UserListsViewModel = {
  name: string
  users: User[]
  hasUsers: boolean
  handleAdd: (event: FormEvent<HTMLFormElement>) => void
  handleChangeName: (event: ChangeEvent<HTMLInputElement>) => void
  handleDelete: (id: string) => void
}
