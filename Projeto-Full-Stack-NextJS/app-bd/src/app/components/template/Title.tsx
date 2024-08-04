import { ElementType } from "react";

export interface PropsTitle {
    primary: string;
    secondary: string;
    icon: ElementType
}


export default function Title(props: PropsTitle) {
    return (
        <div className="flex">
            <props.icon size={55} stroke={1}/>
            <div className="flex flex-col">
                <h1 className="text-2xl font-black">{props.primary}</h1>
                <h1 className="text-zinc-400">{props.secondary}</h1>
            </div>
        </div>
    )
}