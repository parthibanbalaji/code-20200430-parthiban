/**
 * This File contains utility functions.
*/

import * as type from './type';

export var categories = [
    {
        BMI_Category: 'Under Weight',
        Health_Risk_Category: 'Malnutrition Risk'
    },
    {
        BMI_Category: 'Normal Weight',
        Health_Risk_Category: 'Low Risk'
    },
    {
        BMI_Category: 'Over Weight',
        Health_Risk_Category: 'Enhanced Risk'
    },
    {
        BMI_Category: 'Moderately Obese',
        Health_Risk_Category: 'Medium Risk'
    },
    {
        BMI_Category: 'Severly Obese',
        Health_Risk_Category: 'High Risk'
    },
    {
        BMI_Category: 'Very Severly Obese',
        Health_Risk_Category: 'Very High Risk'
    },
    {
        BMI_Category: '',
        Health_Risk_Category: ''
    }
];

/**
 * Method to process provided input for BMI calcution
*/
export function processData(input: any) {
    const BMI = calculateBMI(input.HeightCm, input.WeightKg);
    let category = findBMICategories(BMI);
    input.BMI = BMI;
    input.BMI_Category = category.BMI_Category;
    input.Health_Risk_Category = category.Health_Risk_Category;
    return input;
}

/**
 * Method to calculat BMI
*/
function calculateBMI(heightInCM: number, weight: number): number {
    const heightInM = convertCMtoMeter(heightInCM);
    const BMI = weight / (heightInM * heightInM);
    return parseFloat(BMI.toFixed(2));
}

/**
 * Method to convert centi meter to meter
*/
function convertCMtoMeter(heightInCM: number): number {
    let meter: number;
    return meter = heightInCM / 100;
}

/**
 * Method to find BMI and health categories based on the provide BMI
*/
function findBMICategories(BMI: number): type.category {
    if (BMI <= 18.4) {
        return categories[0];
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        return categories[1];
    } else if (BMI >= 25 && BMI <= 29.9) {
        return categories[2];
    } else if (BMI >= 30 && BMI <= 34.9) {
        return categories[3];
    } else if (BMI >= 35 && BMI <= 39.9) {
        return categories[4];
    } else if (BMI >= 40) {
        return categories[5];
    } else {
        return categories[6];
    }
}

/**
 * Method to generate sample records
*/
export function generateSampleRecords(limit: number) :  Array<type.input> {
    let array = [];
    let maxHeightCm = 213.36; // 7 feet
    let maxWeightKg = 150;
    for (let i = 0; i < limit; i++) {
        let randomHeight = Math.floor(Math.random() * maxHeightCm);
        let randomWeight = Math.floor(Math.random() * maxWeightKg);
        let data = {
            Gender: 'Male',
            HeightCm: randomHeight,
            WeightKg: randomWeight
        }
        array.push(data);
    }
    return array
}

