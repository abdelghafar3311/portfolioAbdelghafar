import { TriangleAlert, Info, ShieldAlert } from "lucide-react";


export default function GetIcon({ type }: { type: "warn" | "info" | "err" }) {
    return (
        <span className="text-sm">
            {type === "warn" && <TriangleAlert />}
            {type === "info" && <Info />}
            {type === "err" && <ShieldAlert />}
        </span>
    )
}