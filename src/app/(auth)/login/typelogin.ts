import * as z from "zod"
 import {  Loginschema } from './Loginschema'

export type Logindata =z.infer<typeof Loginschema>