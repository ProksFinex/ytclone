import { Searchbar } from "./Searchbar"

export const Appbar=()=>{
    return <div className="flex justify-between pt-3">
        <div className="text-lg text-red-600 inline-flex items-center p-3 pt-2">
            <b>YOUTUBE</b>
        </div>
        <div>
            <Searchbar/>
        </div>
        <div className="text-md inline-flex items-center pr-3">
            PROFILE
        </div>
    </div>
}