import Image from "next/image";

const brands = [
    {
        name: "Apple",
        value: 424,
    },
    {
        name: "Samsung",
        value: 23,
    },
    {
        name: "Xiaomi",
        value: 213,
    },
    {
        name: "LG",
        value: 21,
    },
    {
        name: "Nokia",
        value: 12,
    },
    {
        name: "Realmi",
        value: 65,
    },
    {

        name: "Nothing",
        value: 12,
    }
]

export default function Filters() {
    return <div className="flex flex-col w-full gap-6">
        <div className="bg-white shadow-soft p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden">
            <div className="flex items-center gap-2">
                <Image src="/icons/mobile.svg" alt="Mobile" width={24} height={24} />
                <p className="text-lg font-medium">Brend telefona</p>
            </div>
            <div className="flex flex-col gap-2 items-stretch ml-1 w-full">
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col gap-2 w-full">
                        {brands.map((element, index) => {
                            return (
                                <div key={index} className="flex items-center w-full justify-between">
                                    <div className="flex items-center gap-2">
                                        <input
                                            id={index.toString()}
                                            type="checkbox"
                                            className="appearance-none w-4 h-4 border-2 border-gray-300 rounded checked:bg-primary checked:border-primary cursor-pointer transition-colors bg-center bg-no-repeat checked:bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%2F%3E%3C%2Fsvg%3E')]"
                                        />
                                        <label htmlFor={index.toString()} className="text-sm font-medium">{element.name}</label>
                                    </div>
                                    <p className="text-sm text-secondary">{element.value}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white shadow-soft p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden">
            <div className="flex items-center gap-2">
                <Image src="/icons/location.svg" alt="Mobile" width={24} height={24} />
                <p className="text-lg font-medium">Grad</p>
            </div>
            <div className="flex flex-col gap-2 items-stretch ml-1 w-full">
                <select>
                    <option>Leskovac</option>
                    <option>Leskovac</option>
                    <option>Leskovac</option>
                    <option>Leskovac</option>
                    <option>Leskovac</option>
                </select>
            </div>
        </div>
    </div>
}