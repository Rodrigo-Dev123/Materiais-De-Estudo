import Users from "@/app/data/constants/usuarios";
import UserLine from "./UserLine";
import { User } from "@/core/model/Usuário";
export default function UserList() {
    return (
        <div className="flex flex-col gap-4">
            {Users.map((user: User) => {
                return <UserLine key={user.id} User={user}/>
            })}
        </div>
    )
}