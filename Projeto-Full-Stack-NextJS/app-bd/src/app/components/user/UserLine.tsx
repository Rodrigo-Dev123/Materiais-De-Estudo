import { User } from "@/core/model/Usuário"
import Image from "next/image"

export interface UserLineProps {
    user: User
    onClick?: (user: User) => void
}

export default function UserLine(props: UserLineProps) {
    return (
        <div
            className="flex bg-zinc-900 items-center gap-5 p-4 rounded-md"
            onClick={() => props.onClick?.(props.user)}
        >
            <Image
                src="/example.jpg"
                width={80}
                height={80}
                className="rounded-full"
                alt="Avatar"
            />
            <div className="flex flex-col">
                <span className="text-xl font-black">{props.user.nome}</span>
                <span className="text-sm text-zinc-400">{props.user.email}</span>
            </div>
        </div>
    )
}