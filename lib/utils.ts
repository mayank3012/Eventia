import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { IApiRequest } from "./interfaces/IApiRequest";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const PerformApiCall= async ({url, method, body}:IApiRequest) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: body,
    });
    return await response.json();
  } catch (error) {
    return {
      success: false,
      error: error,
      message: 'Unknown error occured'
    }
  }
}
