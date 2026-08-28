import * as z from "zod"
import { schema } from "./Registerschema";


export type RegisterData =z.infer<typeof schema>