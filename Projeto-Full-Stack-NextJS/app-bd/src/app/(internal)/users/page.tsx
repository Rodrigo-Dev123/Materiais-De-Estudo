import Pagina from "@/app/components/template/Pagina";
import Title from "@/app/components/template/Title";
import UserList from "@/app/components/user/UserList";
import { IconUser } from "@tabler/icons-react";

export default function Page() {
    return (
        <Pagina className="flex flex-col gap-10">
            <Title icon={IconUser} primary="Usuários" secondary="Cadastro de usuários" />
            <UserList />
        </Pagina>
    )
}