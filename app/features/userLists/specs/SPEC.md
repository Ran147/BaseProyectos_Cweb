# userLists

## Intent
Permitir a un usuario agregar nombres de usuario a una lista y eliminar entradas existentes en una interfaz sencilla.

## In scope
- Mostrar un campo de entrada con label y botón para agregar un usuario.
- Renderizar una lista de usuarios agregados.
- Permitir eliminar un usuario individual de la lista.

## Out of scope
- Persistencia entre recargas.
- Validaciones avanzadas más allá de nombre no vacío.
- Integración con Redux o API remota.

## Requirements
- El componente debe correr en el cliente.
- El input debe tener un label accesible.
- Cada usuario agregado debe mostrarse en una lista.
- Cada elemento debe tener un botón para eliminarlo.

## Edge cases & errors
- No agregar nombres vacíos o con solo espacios.
- Mostrar un texto adecuado cuando la lista está vacía.

## Constraints
- Seguir el patrón de feature folder con ViewModel y separación lógica/presentación.
- Reusar componentes existentes si aplican.

## Acceptance criteria
- [ ] Existe la carpeta `app/components/user-lists` con un componente de presentación y un hook `useUserListsViewModel`.
- [ ] La página principal importa e renderiza el feature.
- [ ] La UI permite agregar y eliminar usuarios sin recargar.
- [ ] El listado muestra un mensaje cuando no hay usuarios.
