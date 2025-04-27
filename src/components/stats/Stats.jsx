import { useEffect, useState } from "react"

export function Stats({ name, value, title }) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        setProgress((value / 200) * 100)
    }, [])

    return (
        <div className="flex justify-between gap-2 w-full" title={title}>
            <span className="1/6">{name}:</span>
            <div className="w-5/6 bg-gray-300 rounded-r-xl">
                <div className="flex justify-start items-center h-full rounded-r-full pl-2 text-white bg-sky-400" style={{ width: `${progress}%` }}>
                    {value}
                </div>
            </div>
        </div>
    )
}