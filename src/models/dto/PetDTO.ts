export interface BasePetDTO {
  id?: number
  name: string
  type: string
  birth: Date
  photo: string | null
}

export interface PetDTO extends BasePetDTO {
  id: number
  userId: number | null
}

export interface CreatePetDTO extends BasePetDTO {
  
}

export type UpdatePetDTO = Partial<BasePetDTO>