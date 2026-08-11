"use client"

import { useUserListsViewModel } from "./hooks/useUserListsViewModel"
import UserListsInner from "./UserListsInner"

const UserLists = () => {
  const viewModel = useUserListsViewModel()

  return <UserListsInner viewModel={viewModel} />
}

export default UserLists
