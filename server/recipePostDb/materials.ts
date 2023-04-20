import { PrismaClient , Materials } from "@prisma/client";

const prisma = new PrismaClient();

export const dbMethod = {
    registMaterials :async (materials: Materials[]) => {
        try {
              let maxId = 0;
              const registedMaterials: Materials[] = await prisma.materials.findMany()
              if(registedMaterials.length > 1) {
                maxId = registedMaterials.reduce((a,b) => a.id > b.id ? a:b).id;
              }

              const parameter : Materials[] = []
                for(let m = 0; m < materials.length; m++) {
                  const material: Materials = {id: 0 , name: "", scaleTypeId:0, scale:0,recipeTitleId:0}
                  material.id = maxId + m + 1;
                  material.name = materials[m].name;
                  material.recipeTitleId = materials[m].recipeTitleId;
                  material.scale = materials[m].scale;
                  material.scaleTypeId = materials[m].scaleTypeId;
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