import { AppDataSource } from '../config/db';
import { Add } from '../models/Add';

const addRepo = AppDataSource.getRepository(Add);

/** Retrieve all ads */
export const getAdds = async (): Promise<Add[]> => {
  return await addRepo.find();
};

/** Retrieve ad by ID */
export const getAddById = async (id: number): Promise<Add | null> => {
  return await addRepo.findOneBy({ add_id: id });
};

/** Create new ad */
export const createAdd = async (addData: Partial<Add>): Promise<Add> => {
  const ad = addRepo.create(addData);
  return await addRepo.save(ad);
};

/** Update existing ad */
export const updateAdd = async (id: number, addData: Partial<Add>): Promise<Add | null> => {
  const ad = await addRepo.findOneBy({ add_id: id });
  if (!ad) return null;
  Object.assign(ad, addData);
  return await addRepo.save(ad);
};

/** Delete ad by ID */
export const deleteAdd = async (id: number): Promise<boolean> => {
  const result = await addRepo.delete(id);
  return result.affected !== 0;
};
