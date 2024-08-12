import users from "@/app/data/constants/usuarios";
import UserLine from "./UserLine";
import { User } from "@/core/model/Usuário";

export interface UserListProps {
    onClick?: (user: User) => void
}

export default function UserList(props: UserListProps) {
    return (
        <div className="flex flex-col gap-4 cursor-pointer">
            {users.map((user: User) => {
                return <UserLine key={user.id} user={user} onClick={props.onClick} />
            })}
        </div>
    )
}