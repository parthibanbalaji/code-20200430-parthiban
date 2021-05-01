/**
 * This File holds the type used out in this project.
*/

export interface input {
    Gender: string,
    HeightCm: number,
    WeightKg: number
}

export interface result {
    Gender: string,
    HeightCm: number,
    WeightKg: number,
    BMI: number,
    BMI_Category: string
    Health_Risk_Category: string
}

export interface category {
    BMI_Category: string,
    Health_Risk_Category: string
}