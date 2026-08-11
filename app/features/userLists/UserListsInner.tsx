import { Button, FormField, Section, Title } from "@/app/components"
import { TitleVariant } from "@/app/constants"
import { UserListsViewModel } from "./models/UserListsViewModel.interface"

interface UserListsInnerProps {
  viewModel: UserListsViewModel
}

const UserListsInner = ({ viewModel }: UserListsInnerProps) => {
  const {
    name,
    users,
    hasUsers,
    handleAdd,
    handleChangeName,
    handleDelete,
  } = viewModel

  return (
    <Section className="p-4 bg-white rounded shadow-sm max-w-md">
      <Title
        variant={TitleVariant.SECONDARY}
        className="text-lg font-semibold mb-3"
      >
        Lista de usuarios
      </Title>

      <form onSubmit={handleAdd} className="flex flex-col gap-3 mb-4 sm:flex-row">
        <FormField
          id="username"
          name="username"
          label="Nombre de usuario"
          value={name}
          placeholder="Ingresa un nombre"
          onChange={handleChangeName}
          classNameField="flex-1"
          labelSuffix=""
        />
        <Button type="submit" className="min-w-[120px] self-end sm:self-auto">
          Agregar
        </Button>
      </form>

      {hasUsers ? (
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between gap-3 border px-3 py-2 rounded"
            >
              <span>{user.name}</span>
              <Button
                type="button"
                className="text-red-600 hover:underline bg-transparent border-none px-0"
                onClick={() => handleDelete(user.id)}
              >
                Eliminar
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No hay usuarios.</p>
      )}
    </Section>
  )
}

export default UserListsInner
