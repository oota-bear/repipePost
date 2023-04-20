import { PrismaClient , ScaleType } from "@prisma/client";

const prisma = new PrismaClient();

export const dbMethod = {
    getScaleType: async (): Promise<ScaleType[]> => {
        try {
            return await prisma.scaleType.findMany()
        }
        catch (error:any){
            throw new Error(error)
        }
    }
}