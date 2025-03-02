import { Robot } from "../types";

// let the caller handle the error.
export async function getRobotsList(): Promise<Robot[]> {
  const dataUrl = "https://api.npoint.io/86690d80ff3d455133f0";
  const response = await fetch(dataUrl);
  const data = (await response.json()) as Robot[];
  return data.map((item) => ({ ...item, show: true }));
}

// handle error and rethrow to let the caller handle it as well.
export async function getRobotsList2(): Promise<Robot[]> {
  try {
    const data_url = "https://api.npoint.io/86690d80ff3d455133f0";
    const response = await fetch(data_url);
    const data = (await response.json()) as Robot[];
    return data.map((item) => ({ ...item, show: true }));
  } catch (error: unknown) {
    console.log(error); 
    throw new Error(`fetch operation failed: ${(error as Error).message}`);
  }
}