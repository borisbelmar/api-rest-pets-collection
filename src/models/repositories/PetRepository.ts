import { Pet, PrismaClient } from "@prisma/client";
import { CreatePetDTO, UpdatePetDTO, PetDTO } from "../dto/PetDTO"

const prisma = new PrismaClient()

export default class PetRepository {
  private userId: number

  constructor (userId: number) {
    this.userId = userId
  }
  
  public readonly findAll = async (): Promise<PetDTO[]> => {
    const pets: Pet[] = await prisma.pet.findMany({
      where: {
        userId: this.userId
      }
    })
    return pets
  }
  
  public readonly findById = async (id: number): Promise<PetDTO | undefined> => {
    const pet = await prisma.pet.findFirst({
      where: {
        id
      }
    })

    if (!pet) return
    
    return pet
  }

  public readonly create = async (pet: CreatePetDTO): Promise<PetDTO> => {
    const newPet = await prisma.pet.create({
      data: {
        ...pet,
        birth: new Date(pet.birth).toISOString(),
        userId: this.userId
      }
    })

    return newPet
  }

  public readonly update = async (id: number, pet: UpdatePetDTO): Promise<void> => {
    await prisma.pet.update({
      where: {
        id
      },
      data: {
        ...pet,
        birth: pet.birth ? new Date(pet.birth).toISOString() : undefined
      }
    })
  }

  public readonly delete = async (id: number): Promise<void> => {
    await prisma.pet.delete({
      where: {
        id
      }
    })
  }
}