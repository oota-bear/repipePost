import { PrismaClient } from "@prisma/client";
import { Materials } from "@prisma/client";

const prisma = new PrismaClient();

export const dbMethod = {
    registMaterials :async (materials: Materials[]) => {
        try {
            const parameter : Materials[] = []
            for(let m  in materials){
                const material: Materials = {id:1,name:"",scaleTypeId:0,scale:0}
                material.name = materials[parseInt(m)].name,
                material.scaleTypeId = materials[parseInt(m)].scaleTypeId,
                material.scale = materials[parseInt(m)].scale
                parameter.push(material)
            }


             await prisma.materials.createMany({
                
              data: parameter
            })
        }
        catch (error:any){
            throw new Error(error)
        }
    },
    getMaterials :async() :Promise<Materials[]> => {
        try {
            return await prisma.materials.findMany({
            })
        }
        catch (error:any){
            throw new Error(error)
        }
    }
}