import * as addRepo from '../repositories/addRepository';
import { Add } from '../models/Add';

/** Retrieve all ads */
export const getAdds = async (): Promise<Add[]> => {
  return await addRepo.getAdds();
};

/** Retrieve ad by ID */
export const getAddById = async (id: number): Promise<Add | null> => {
  return await addRepo.getAddById(id);
};

/** Create new ad */
export const createAdd = async (addData: Partial<Add>): Promise<Add> => {
  return await addRepo.createAdd(addData);
};

/** Update existing ad */
export const updateAdd = async (id: number, addData: Partial<Add>): Promise<Add | null> => {
  return await addRepo.updateAdd(id, addData);
};

/** Delete ad by ID */
export const deleteAdd = async (id: number): Promise<boolean> => {
  return await addRepo.deleteAdd(id);
};
