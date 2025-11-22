//Puede ser interfaz o clase
// export interface CreateTaskDto {
//     title: string,
//     description: string
// }

import { IsString, MinLength } from "class-validator"

export class CreateTaskDto {
    @IsString()
    @MinLength(1)
    title: string

    @IsString()
    @MinLength(1)
    description: string
}