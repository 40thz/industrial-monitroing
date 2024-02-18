import { RegionDTO } from "@/services/region.service/types";
import { createContext } from "react";

type RegionContext = {
    data: RegionDTO['data']
    industry: boolean
}

export const RegionContext = createContext<RegionContext>({} as RegionContext)