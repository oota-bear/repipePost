import { dbMethod } from '$/recipePostDb/scaleType'
import { ScaleType } from '@prisma/client'

export const getScaleType = async (): Promise<ScaleType[] | undefined> => {
    return await dbMethod.getScaleType()
}